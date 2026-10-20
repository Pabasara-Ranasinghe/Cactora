
export function getUniqueCactusSpecies(speciesList = []) {
  const seen = new Set();

  return speciesList.filter((species) => {
    const scientificName = species.scientificName
      ?.trim()
      .replace(/\s+/g, " ")
      .toLowerCase();

    const commonName = species.commonName
      ?.trim()
      .replace(/\s+/g, " ")
      .toLowerCase();

    // Use the scientific name as the main duplicate identifier.
    // Fall back to the common name, then the ID.
    const uniqueKey =
      scientificName ||
      commonName ||
      species.id?.trim().toLowerCase();

    if (!uniqueKey || seen.has(uniqueKey)) {
      return false;
    }

    seen.add(uniqueKey);
    return true;
  });
}
