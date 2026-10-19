
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cactusSpecies from '../src/data/cactusSpecies.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourceFile = path.resolve(
  __dirname,
  '../src/data/cactusSpecies.js'
);

const outputFile = path.resolve(
  __dirname,
  'generated-cactoideae-species.json'
);

const normalize = (value) =>
  String(value ?? '')
    .toLowerCase()
    .replace(/[×x]/g, 'x')
    .replace(/[^a-z0-9]/g, '');

const targets = [
  // Set 01 — Cereeae & Trichocereeae (11–30)
  ['Trichocereus grandiflorus', 'Echinopsis grandiflora'],
  ['Trichocereus huascha', 'Echinopsis huascha'],
  ['Trichocereus schickendantzii'],
  ['Echinopsis aurea'],
  ['Echinopsis calochlora'],
  ['Echinopsis subdenudata'],
  ['Echinopsis bruchii', 'Soehrensia bruchii'],
  ['Echinopsis formosa'],
  ['Armatocereus laetus'],
  ['Armatocereus matucanensis'],
  ['Armatocereus rauhii'],
  ['Pilosocereus azureus'],
  ['Pilosocereus pachycladus'],
  ['Pilosocereus leucocephalus'],
  ['Cephalocereus senilis'],
  ['Stenocereus thurberi'],
  ['Stenocereus gummosus'],
  ['Stenocereus queretaroensis'],
  ['Lemaireocereus marginatus'],
  ['Carnegiea gigantea'],

  // Set 02 — Echinocereeae (31–60)
  ['Echinocereus engelmannii'],
  ['Echinocereus viridiflorus'],
  ['Echinocereus reichenbachii'],
  ['Echinocereus rigidissimus'],
  ['Echinocereus pectinatus'],
  ['Echinocereus triglochidiatus'],
  ['Echinocereus coccineus'],
  ['Echinocereus subinermis'],
  ['Echinocereus brandegeei'],
  ['Echinocereus fendleri'],
  ['Echinocereus laui'],
  ['Echinocereus schmollii'],
  ['Echinocereus pentalophus'],
  ['Echinocereus stolonifer'],
  ['Wilcoxia poselgeri', 'Echinocereus poselgeri'],
  ['Echinocereus enneacanthus'],
  ['Echinocereus dasyphyllus'],
  ['Echinocereus chloranthus'],
  ['Echinocereus knippelianus'],
  ['Echinocereus pulchellus'],
  ['Echinocereus gentryi'],
  ['Echinocereus ledingii'],
  ['Echinocereus nicholii'],
  ['Echinocereus pacificus'],
  ['Echinocereus parkeri'],
  ['Echinocereus stramineus'],
  ['Echinocereus viereckii'],
  ['Echinocereus waldei'],
  ['Echinocereus websterianus'],
  ['Echinocereus yavapaiensis'],
];

const existingNames = new Set(
  cactusSpecies.map((species) => normalize(species.scientificName))
);

const missingTargets = targets.filter((names) =>
  !names.some((name) => existingNames.has(normalize(name)))
);

// These are draft descriptions. Review botanical details before publishing.
function createDraftRecord(scientificName, index) {
  const genus = scientificName.split(' ')[0];

  return {
    id: `cactoideae-${normalize(scientificName)}`,
    commonName: scientificName,
    scientificName,
    subfamily: 'Cactoideae',
    growthHabitAndSize:
      `${scientificName} is a cactus whose growth form and mature size vary by species. Verify its dimensions using a reliable botanical reference.`,
    hardinessAndNativeRange:
      `Native range and cold tolerance for ${scientificName} should be verified using a reliable botanical reference before publication.`,
    specialTraits:
      `Species-specific identifying features of ${scientificName} should be verified before publication.`,
    care: {
      sunlight:
        'Provide light appropriate to the verified species and acclimate gradually to stronger sun.',
      watering:
        'Water thoroughly when the growing medium has dried appropriately; adjust to season, temperature, and growth.',
      soilAndPotting:
        'Use a fast-draining cactus mix and a pot with drainage holes.',
      temperature:
        'Protect from frost until the species-specific temperature tolerance is verified.',
      fertilizer:
        'During active growth, use a diluted cactus fertilizer according to its label.'
    },
    _draft: true,
    _reviewRequired: true,
    _targetNumber: index + 11
  };
}

const generated = missingTargets.map((names, index) =>
  createDraftRecord(names[0], index)
);

const existingIds = new Set(
  cactusSpecies.map((species) => species.id)
);

const duplicateIds = generated.filter((species) =>
  existingIds.has(species.id)
);

const missingFields = generated.filter((species) =>
  !species.id ||
  !species.commonName ||
  !species.scientificName ||
  !species.subfamily ||
  !species.growthHabitAndSize ||
  !species.hardinessAndNativeRange ||
  !species.specialTraits ||
  !species.care?.sunlight ||
  !species.care?.watering ||
  !species.care?.soilAndPotting ||
  !species.care?.temperature ||
  !species.care?.fertilizer
);

if (duplicateIds.length || missingFields.length) {
  console.error('Validation failed. No preview was written.');
  console.error('Duplicate IDs:', duplicateIds.length);
  console.error('Records with missing fields:', missingFields.length);
  process.exit(1);
}

fs.writeFileSync(
  outputFile,
  JSON.stringify(generated, null, 2),
  'utf8'
);

console.log('🌵 Cactora species generator');
console.log('Existing records:', cactusSpecies.length);
console.log('Target species checked:', targets.length);
console.log('Records generated for review:', generated.length);
console.log('Duplicate IDs:', duplicateIds.length);
console.log('Records with missing fields:', missingFields.length);
console.log('Original species file changed: No');
console.log('Preview:', outputFile);
console.log(
  'IMPORTANT: Generated records contain draft botanical descriptions.'
);
