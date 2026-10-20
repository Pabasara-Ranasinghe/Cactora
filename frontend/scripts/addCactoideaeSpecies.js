
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cactusSpecies from '../src/data/cactusSpecies.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outputFile = path.resolve(
  __dirname,
  'generated-set-06-species.json'
);

const normalize = (value) =>
  String(value ?? '')
    .toLowerCase()
    .replace(/[×x]/g, 'x')
    .replace(/[^a-z0-9]/g, '');

// Each group contains alternative scientific names for one species.
// The first name is used for the generated draft record.
const targets = [
  // Set 06 — Opuntieae: Prickly pears
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia ficus-indica'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia microdasys'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia humifusa'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia basilaris'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia engelmannii'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia macrocentra'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia santa-rita', 'Opuntia violacea var. santa-rita'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia polyacantha'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia fragilis'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia stricta'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia monacantha'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia leucotricha'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia robusta'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia cochenillifera', 'Nopalea cochenillifera'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Opuntia aciculata'],
  },

  // Set 06 — Chollas and related jointed-stem cacti
  {
    subfamily: 'Opuntioideae',
    names: ['Cylindropuntia imbricata', 'Opuntia imbricata'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Cylindropuntia bigelovii', 'Opuntia bigelovii'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Cylindropuntia fulgida', 'Opuntia fulgida'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Cylindropuntia leptocaulis', 'Opuntia leptocaulis'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Cylindropuntia spinosior', 'Opuntia spinosior'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Cylindropuntia tunicata', 'Opuntia tunicata'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Austrocylindropuntia subulata', 'Opuntia subulata'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Austrocylindropuntia cylindrica', 'Opuntia cylindrica'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Tephrocactus articulatus', 'Opuntia articulata'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Consolea rubescens'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Consolea falcata'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Maihueniopsis darwinii'],
  },
  {
    subfamily: 'Opuntioideae',
    names: ['Puna clavarioides', 'Maihueniopsis clavarioides'],
  },

  // Set 06 — Maihuenieae: Patagonian cushion cacti
  {
    subfamily: 'Maihuenioideae',
    names: ['Maihuenia poeppigii'],
  },
  {
    subfamily: 'Maihuenioideae',
    names: ['Maihuenia patagonica'],
  },
];

const existingNames = new Set(
  cactusSpecies.map((species) => normalize(species.scientificName))
);

const existingIds = new Set(
  cactusSpecies.map((species) => species.id)
);

// Reserve every alias so duplicate target groups cannot generate
// multiple records for the same known name within this batch.
const reservedNames = new Set(existingNames);

const missingTargets = [];

for (const target of targets) {
  const aliases = target.names.map(normalize);

  // Skip this species if any listed name already exists.
  if (aliases.some((name) => reservedNames.has(name))) {
    continue;
  }

  missingTargets.push(target);

  // Reserve all aliases before processing the next target.
  aliases.forEach((name) => reservedNames.add(name));
}

function createDraftRecord(target, index) {
  const scientificName = target.names[0];

  return {
    id: `set06-${normalize(scientificName)}`,
    commonName: scientificName,
    scientificName,
    subfamily: target.subfamily,
    growthHabitAndSize:
      `Growth habit, mature dimensions, and growth rate for ${scientificName} require verification using a reliable botanical reference.`,
    hardinessAndNativeRange:
      `Native range, habitat, and cold tolerance for ${scientificName} require botanical verification before publication.`,
    specialTraits:
      `Distinctive features, flowering characteristics, fruit, and toxicity information for ${scientificName} require verification before publication.`,
    care: {
      sunlight:
        'Verify the species-specific light requirements and acclimate gradually to stronger sunlight.',
      watering:
        'Use a watering schedule appropriate to the verified species, season, and growing conditions.',
      soilAndPotting:
        'Use a suitable, well-draining growing medium and a container with drainage holes; verify species-specific requirements.',
      temperature:
        'Verify the species-specific temperature range and protect the plant from unsuitable conditions.',
      fertilizer:
        'During active growth, use a suitable diluted cactus fertilizer according to its label and the verified care requirements.',
    },
    _draft: true,
    _reviewRequired: true,
    _set: 6,
    _targetNumber: 201 + index,
  };
}

const generated = missingTargets.map(createDraftRecord);

const generatedIds = new Set();
const generatedNames = new Set();
const duplicateIds = [];
const duplicateNames = [];

for (const species of generated) {
  const normalizedName = normalize(species.scientificName);

  if (existingIds.has(species.id) || generatedIds.has(species.id)) {
    duplicateIds.push(species.id);
  }

  if (
    existingNames.has(normalizedName) ||
    generatedNames.has(normalizedName)
  ) {
    duplicateNames.push(species.scientificName);
  }

  generatedIds.add(species.id);
  generatedNames.add(normalizedName);
}

const requiredFields = [
  'id',
  'commonName',
  'scientificName',
  'subfamily',
  'growthHabitAndSize',
  'hardinessAndNativeRange',
  'specialTraits',
];

const missingFields = generated.filter((species) => {
  const missingTopLevel = requiredFields.some(
    (field) => !species[field]
  );

  const missingCare = [
    'sunlight',
    'watering',
    'soilAndPotting',
    'temperature',
    'fertilizer',
  ].some((field) => !species.care?.[field]);

  return missingTopLevel || missingCare;
});

if (
  duplicateIds.length ||
  duplicateNames.length ||
  missingFields.length
) {
  console.error('Validation failed. No preview was written.');
  console.error('Duplicate IDs:', duplicateIds);
  console.error('Duplicate scientific names:', duplicateNames);
  console.error('Records with missing fields:', missingFields.length);
  process.exit(1);
}

fs.writeFileSync(
  outputFile,
  JSON.stringify(generated, null, 2),
  'utf8'
);

console.log('🌵 Cactora — Set 06 species generator');
console.log('Existing records:', cactusSpecies.length);
console.log('Target species groups:', targets.length);
console.log('Records skipped as existing/duplicate:', targets.length - generated.length);
console.log('New draft records generated:', generated.length);
console.log(
  'Opuntioideae drafts:',
  generated.filter((s) => s.subfamily === 'Opuntioideae').length
);
console.log(
  'Maihuenioideae drafts:',
  generated.filter((s) => s.subfamily === 'Maihuenioideae').length
);
console.log('Duplicate IDs:', duplicateIds.length);
console.log('Duplicate scientific names:', duplicateNames.length);
console.log('Original species file changed: No');
console.log('Preview:', outputFile);
console.log('IMPORTANT: Draft botanical information must be verified.');
