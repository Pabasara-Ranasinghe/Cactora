
const cactusSpecies = [
  {
    id: "saguaro",
    commonName: "Saguaro",
    scientificName: "Carnegiea gigantea",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing, tall columnar cactus that can reach several metres in height.",
    hardinessAndNativeRange:
      "Native to the Sonoran Desert of Arizona and Mexico. Protect young plants from frost.",
    specialTraits:
      "Recognised by its tall ribbed trunk, branching arms, and large white flowers.",
    care: {
      sunlight: "Full sun, introduced gradually.",
      watering:
        "Water thoroughly, then allow the soil to dry completely before watering again.",
      soilAndPotting:
        "Use a gritty, fast-draining cactus mix and a pot with drainage holes.",
      temperature:
        "Prefers warm conditions. Protect from frost and prolonged cold.",
      fertilizer:
        "Use a diluted, low-nitrogen cactus fertilizer during active growth."
    },
    imageUrl:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a4917?w=800&q=80",
    imageAlt: "Saguaro cactus"
  },
  {
    id: "golden-barrel",
    commonName: "Golden Barrel",
    scientificName: "Echinocactus grusonii",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing, rounded barrel cactus that can grow quite wide.",
    hardinessAndNativeRange:
      "Native to central Mexico. It needs protection from hard frost.",
    specialTraits:
      "Its spherical shape and golden-yellow spines make it a popular ornamental cactus.",
    care: {
      sunlight: "Full sun after gradual acclimation.",
      watering:
        "Water thoroughly and let the growing medium dry completely between waterings.",
      soilAndPotting:
        "Use a gritty, mineral-rich cactus mix in a pot with drainage holes.",
      temperature:
        "Prefers warm conditions and protection from hard frost.",
      fertilizer:
        "Apply diluted, low-nitrogen cactus fertilizer during active growth."
    },
    imageUrl:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e9f?w=800&q=80",
    imageAlt: "Golden barrel cactus"
  },
  
  {
    id: "christmas-cactus",
    commonName: "Christmas Cactus",
    scientificName: "Schlumbergera truncata",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A trailing epiphytic cactus with segmented stems, suitable for hanging baskets.",
    hardinessAndNativeRange: "Native to the coastal mountains of southeastern Brazil; protect from frost.",
    specialTraits: "Produces colourful tubular flowers in shades of pink, red, white, and purple.",
    care: {
      sunlight: "Bright indirect light.",
      watering: "Keep lightly moist during growth, but never waterlogged.",
      soilAndPotting: "Use an airy epiphytic mix containing bark and perlite.",
      temperature: "Prefers mild temperatures and protection from cold drafts.",
      fertilizer: "Use diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1597264946598-99f852c6c930?w=800&q=80",
    imageAlt: "Christmas cactus"
  },
  {
    id: "thanksgiving-cactus",
    commonName: "Thanksgiving Cactus",
    scientificName: "Schlumbergera × buckleyi",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A trailing holiday cactus with flattened, segmented stems.",
    hardinessAndNativeRange: "A cultivated holiday cactus hybrid derived from Brazilian forest cacti.",
    specialTraits: "Known for colourful seasonal flowers and arching stems.",
    care: {
      sunlight: "Bright indirect light.",
      watering: "Water when the upper soil begins to dry.",
      soilAndPotting: "Use a well-draining epiphytic potting mix.",
      temperature: "Prefers mild indoor temperatures.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1604959070505-91932150d0b9?w=800&q=80",
    imageAlt: "Thanksgiving cactus"
  },
  {
    id: "dragon-fruit",
    commonName: "Dragon Fruit Cactus",
    scientificName: "Selenicereus undatus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A climbing cactus with long, three-angled stems that needs support.",
    hardinessAndNativeRange: "Associated with Mexico and Central America; widely cultivated in tropical regions.",
    specialTraits: "Produces large night-blooming flowers and dragon fruit.",
    care: {
      sunlight: "Full sun to partial shade.",
      watering: "Water during active growth and allow excess water to drain.",
      soilAndPotting: "Use fertile, well-draining soil and provide a sturdy support.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Use balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    imageAlt: "Dragon fruit cactus"
  },
  {
    id: "old-lady",
    commonName: "Old Lady Cactus",
    scientificName: "Mammillaria hahniana",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, rounded cactus that may produce clusters of offsets.",
    hardinessAndNativeRange: "Native to central Mexico.",
    specialTraits: "Covered in fine white hairs and known for its pink or purple flower ring.",
    care: {
      sunlight: "Bright light with some direct sun after acclimation.",
      watering: "Water thoroughly after the soil dries; reduce watering in winter.",
      soilAndPotting: "Use gritty cactus soil in a pot with drainage holes.",
      temperature: "Prefers warm conditions and protection from frost.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914901979-3d081e020354?w=800&q=80",
    imageAlt: "Old lady cactus"
  },
  {
    id: "golden-star-mammillaria",
    commonName: "Golden Star Cactus",
    scientificName: "Mammillaria elongata",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A clustering cactus with slender, finger-like stems.",
    hardinessAndNativeRange: "Native to central Mexico.",
    specialTraits: "Its dense golden spines give the plant a distinctive appearance.",
    care: {
      sunlight: "Bright light with gradual exposure to direct sun.",
      watering: "Allow the soil to dry between thorough waterings.",
      soilAndPotting: "Use gritty, fast-draining cactus mix.",
      temperature: "Prefers warm conditions; protect from frost.",
      fertilizer: "Use diluted cactus fertilizer during the growing season."
    },
    imageUrl: "https://images.unsplash.com/photo-1616275236767-bd9c1c0c5e41?w=800&q=80",
    imageAlt: "Golden star Mammillaria cactus"
  },
  {
    id: "pink-snowball",
    commonName: "Pink Snowball Cactus",
    scientificName: "Mammillaria zeilmanniana",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus that can develop offsets.",
    hardinessAndNativeRange: "Native to Guanajuato, central Mexico.",
    specialTraits: "Produces rings of pink to magenta flowers around the crown.",
    care: {
      sunlight: "Bright light with gradual exposure to direct sun.",
      watering: "Water when the soil has dried; reduce watering during cool weather.",
      soilAndPotting: "Use a gritty cactus mix with good drainage.",
      temperature: "Prefers warmth and protection from frost.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310108798-590e04d2b461?w=800&q=80",
    imageAlt: "Pink snowball cactus"
  },
  {
    id: "thimble",
    commonName: "Thimble Cactus",
    scientificName: "Mammillaria gracilis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A tiny clustering cactus with short cylindrical stems.",
    hardinessAndNativeRange: "Native to central Mexico.",
    specialTraits: "Forms delicate-looking clusters and produces small pale flowers.",
    care: {
      sunlight: "Bright light with gentle direct sun.",
      watering: "Let the potting mix dry before watering again.",
      soilAndPotting: "Use very gritty soil in a shallow pot with drainage.",
      temperature: "Prefers warm conditions and protection from frost.",
      fertilizer: "Fertilize sparingly with diluted cactus fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914843028-9e347c03c3f4?w=800&q=80",
    imageAlt: "Thimble cactus"
  },
  {
    id: "feather",
    commonName: "Feather Cactus",
    scientificName: "Mammillaria plumosa",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus that may form clusters.",
    hardinessAndNativeRange: "Native to northeastern Mexico.",
    specialTraits: "Its soft-looking, feather-like white spines give it a distinctive appearance.",
    care: {
      sunlight: "Bright filtered light with gentle sun.",
      watering: "Allow the soil to dry; avoid keeping the plant damp for long periods.",
      soilAndPotting: "Use a very gritty, fast-draining cactus mix.",
      temperature: "Prefers warm conditions and protection from frost.",
      fertilizer: "Apply diluted cactus fertilizer sparingly during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310109214-4d3f5a3b7c41?w=800&q=80",
    imageAlt: "Feather cactus"
  },
  
  {
    id: "bishops-cap",
    commonName: "Bishop's Cap",
    scientificName: "Astrophytum myriostigma",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slow-growing, star-shaped cactus with four or five distinct ribs.",
    hardinessAndNativeRange: "Native to central and northern Mexico.",
    specialTraits: "Its smooth, spineless body is decorated with tiny white flecks and yellow flowers.",
    care: {
      sunlight: "Bright light; introduce direct sun gradually.",
      watering: "Allow the soil to dry completely between waterings.",
      soilAndPotting: "Use a mineral-rich, fast-draining cactus mix.",
      temperature: "Prefers warm conditions and protection from frost.",
      fertilizer: "Apply diluted, low-nitrogen cactus fertilizer sparingly."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310108901-9f3c1c2b3c41?w=800&q=80",
    imageAlt: "Bishop's cap cactus"
  },
  {
    id: "star-cactus",
    commonName: "Star Cactus",
    scientificName: "Astrophytum asterias",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, flattened, spineless cactus.",
    hardinessAndNativeRange: "Native to southern Texas and northeastern Mexico; threatened in parts of its range.",
    specialTraits: "Its flat, star-like shape and white speckles make it easy to recognise.",
    care: {
      sunlight: "Bright light with careful acclimation to direct sun.",
      watering: "Water sparingly after the soil has dried completely.",
      soilAndPotting: "Use an extremely mineral, fast-draining mix.",
      temperature: "Prefers warmth; protect from frost and cold, wet soil.",
      fertilizer: "Use very dilute cactus fertilizer sparingly."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310108501-2f3c4c5d6e7f?w=800&q=80",
    imageAlt: "Star cactus"
  },
  {
    id: "golden-star-astrophytum",
    commonName: "Golden Star Cactus",
    scientificName: "Astrophytum ornatum",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A ribbed cactus that may become columnar as it matures.",
    hardinessAndNativeRange: "Native to central Mexico.",
    specialTraits: "Features pronounced ribs, white flecks and strong spines.",
    care: {
      sunlight: "Full sun after gradual acclimation.",
      watering: "Water thoroughly, then allow the mix to dry completely.",
      soilAndPotting: "Use a gritty mineral cactus mix.",
      temperature: "Prefers warm conditions; protect from hard frost.",
      fertilizer: "Apply diluted, low-nitrogen cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310108301-1c2b3c4d5e6f?w=800&q=80",
    imageAlt: "Astrophytum ornatum cactus"
  },
  {
    id: "hedgehog",
    commonName: "Engelmann Hedgehog Cactus",
    scientificName: "Echinocereus engelmannii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A clustering cactus with short cylindrical stems.",
    hardinessAndNativeRange: "Native to the southwestern United States and northern Mexico.",
    specialTraits: "Known for its dense spines and large pink to magenta flowers.",
    care: {
      sunlight: "Full sun after gradual acclimation.",
      watering: "Allow the soil to dry thoroughly between waterings.",
      soilAndPotting: "Use gritty mineral soil with excellent drainage.",
      temperature: "Can tolerate some cold when dry; avoid wet frost.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1597264945249-3f4e8c9c9d30?w=800&q=80",
    imageAlt: "Engelmann hedgehog cactus"
  },
  {
    id: "rainbow-hedgehog",
    commonName: "Rainbow Hedgehog Cactus",
    scientificName: "Echinocereus rigidissimus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A usually solitary cactus with short cylindrical stems.",
    hardinessAndNativeRange: "Native to parts of Arizona, New Mexico and northern Mexico.",
    specialTraits: "Its colourful bands of pink, red, white and grey spines are distinctive.",
    care: {
      sunlight: "Bright light and direct sun after gradual acclimation.",
      watering: "Water after the soil dries; keep drier during winter.",
      soilAndPotting: "Use a very gritty mineral cactus mix.",
      temperature: "Prefers bright, well-ventilated conditions; protect from prolonged wet frost.",
      fertilizer: "Apply diluted cactus fertilizer sparingly during growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310107901-2c3d4e5f6a7b?w=800&q=80",
    imageAlt: "Rainbow hedgehog cactus"
  },
  {
    id: "peanut",
    commonName: "Peanut Cactus",
    scientificName: "Echinopsis chamaecereus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A spreading cactus with many short, finger-like stems.",
    hardinessAndNativeRange: "Native to Argentina.",
    specialTraits: "Produces bright orange-red flowers and numerous offsets.",
    care: {
      sunlight: "Bright light with several hours of sun.",
      watering: "Water during growth after the mix dries; reduce in winter.",
      soilAndPotting: "Use gritty cactus mix in a broad pot.",
      temperature: "Prefers mild conditions; protect from hard frost and wet cold.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914828543-3c4d5e6f7a8b?w=800&q=80",
    imageAlt: "Peanut cactus"
  },
  {
    id: "easter-lily",
    commonName: "Easter Lily Cactus",
    scientificName: "Echinopsis tubiflora",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular to short-columnar cactus.",
    hardinessAndNativeRange: "Native to South America, particularly Argentina.",
    specialTraits: "Produces large, fragrant, white trumpet-shaped flowers that open at night.",
    care: {
      sunlight: "Bright light with several hours of direct sun.",
      watering: "Water during active growth after the soil dries.",
      soilAndPotting: "Use gritty cactus mix with good drainage.",
      temperature: "Prefers mild conditions; protect from frost.",
      fertilizer: "Apply diluted cactus or bloom fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1597264944123-4f5e6d7b8c9d?w=800&q=80",
    imageAlt: "Easter lily cactus"
  },
  {
    id: "flying-saucer",
    commonName: "Flying Saucer Cactus",
    scientificName: "Echinopsis 'Flying Saucer'",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus that may develop clusters.",
    hardinessAndNativeRange: "A cultivated horticultural hybrid; parentage can vary.",
    specialTraits: "Selected for its exceptionally large, showy flowers.",
    care: {
      sunlight: "Bright light with gentle direct sun.",
      watering: "Allow the soil to dry between thorough waterings.",
      soilAndPotting: "Use a gritty cactus mix in a pot with drainage holes.",
      temperature: "Prefers mild conditions; protect from frost.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310107701-1a2b3c4d5e6f?w=800&q=80",
    imageAlt: "Flying saucer Echinopsis cactus"
  },
  
  {
    id: "san-pedro",
    commonName: "San Pedro Cactus",
    scientificName: "Echinopsis pachanoi",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A fast-growing, blue-green columnar cactus that can develop multiple upright stems.",
    hardinessAndNativeRange: "Native to the Andes of Ecuador and Peru.",
    specialTraits: "Recognised by its ribbed stems and large, fragrant, night-blooming white flowers. It contains mescaline, and laws concerning it vary by location.",
    care: {
      sunlight: "Full sun to partial shade after gradual acclimation.",
      watering: "Water during active growth, allowing the soil to dry between waterings.",
      soilAndPotting: "Use gritty, well-draining cactus soil in a stable pot.",
      temperature: "Prefers mild to warm conditions; protect from severe frost.",
      fertilizer: "Apply balanced, diluted fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1518004668777-0805d35d90c1?w=800&q=80",
    imageAlt: "San Pedro cactus"
  },
  {
    id: "ball",
    commonName: "Ball Cactus",
    scientificName: "Parodia magnifica",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A rounded, blue-green cactus that may become short-columnar with age.",
    hardinessAndNativeRange: "Native to southern Brazil.",
    specialTraits: "Its blue-green body, ribbed form and yellow flowers make it attractive in collections.",
    care: {
      sunlight: "Bright light with some gentle direct sun.",
      watering: "Water thoroughly after the soil dries; reduce watering in winter.",
      soilAndPotting: "Use a gritty, well-draining cactus mix.",
      temperature: "Prefers mild conditions; protect from frost.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914812345-6b7c8d9e0f1a?w=800&q=80",
    imageAlt: "Ball cactus"
  },
  {
    id: "golden-ball",
    commonName: "Golden Ball Cactus",
    scientificName: "Parodia leninghausii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A cactus that forms upright, columnar stems and may cluster.",
    hardinessAndNativeRange: "Native to southern Brazil.",
    specialTraits: "Covered in golden bristle-like spines and known for its yellow flowers.",
    care: {
      sunlight: "Bright light with gradual exposure to direct sun.",
      watering: "Let the soil dry between thorough waterings.",
      soilAndPotting: "Use a gritty, fast-draining mix.",
      temperature: "Prefers mild to warm conditions; protect from frost.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310107501-3c4d5e6f7a8b?w=800&q=80",
    imageAlt: "Golden ball cactus"
  },
  {
    id: "scarlet-ball",
    commonName: "Scarlet Ball Cactus",
    scientificName: "Parodia haselbergii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, slow-growing globular cactus.",
    hardinessAndNativeRange: "Native to southern Brazil.",
    specialTraits: "Its silvery spines contrast with the vivid scarlet flowers it can produce.",
    care: {
      sunlight: "Bright light with gentle direct sun.",
      watering: "Water after the soil dries, avoiding prolonged dampness.",
      soilAndPotting: "Use a very gritty, well-draining cactus mix.",
      temperature: "Prefers mild conditions; protect from cold, wet soil.",
      fertilizer: "Apply diluted cactus fertilizer sparingly during growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310107301-2d3e4f5a6b7c?w=800&q=80",
    imageAlt: "Scarlet ball cactus"
  },
  {
    id: "button",
    commonName: "Button Cactus",
    scientificName: "Rebutia minuscula",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus that can grow into a cluster.",
    hardinessAndNativeRange: "Native to South America, particularly Argentina; its taxonomy may vary among references.",
    specialTraits: "Produces colourful flowers, often red, orange or yellow, around the lower stem.",
    care: {
      sunlight: "Bright filtered light to gentle direct sun.",
      watering: "Allow the soil to dry between waterings.",
      soilAndPotting: "Use gritty cactus mix in a shallow pot with drainage.",
      temperature: "Prefers mild conditions; protect from hard frost.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914798765-4c5d6e7f8a9b?w=800&q=80",
    imageAlt: "Button cactus"
  },
  {
    id: "red-crown",
    commonName: "Red Crown Cactus",
    scientificName: "Rebutia kupperiana",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus that produces offsets.",
    hardinessAndNativeRange: "Associated with Bolivia.",
    specialTraits: "Known for colourful flowers and compact growth.",
    care: {
      sunlight: "Bright light with gentle sun.",
      watering: "Water after the mix dries; reduce watering during cool periods.",
      soilAndPotting: "Use a gritty, fast-draining cactus mix.",
      temperature: "Prefers mild conditions; protect from frost and wet soil.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310107101-1b2c3d4e5f6a?w=800&q=80",
    imageAlt: "Red crown cactus"
  },
  {
    id: "old-man",
    commonName: "Old Man Cactus",
    scientificName: "Cephalocereus senilis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slow-growing columnar cactus that can reach several metres in its native habitat.",
    hardinessAndNativeRange: "Native to eastern Mexico.",
    specialTraits: "Its long, white, hair-like spines give it its distinctive appearance.",
    care: {
      sunlight: "Full sun with good airflow.",
      watering: "Water after the soil dries; keep much drier in winter.",
      soilAndPotting: "Use a gritty cactus mix in a deep pot with drainage.",
      temperature: "Prefers warm conditions; protect from cold, damp weather.",
      fertilizer: "Use diluted cactus fertilizer sparingly during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914784321-5d6e7f8a9b0c?w=800&q=80",
    imageAlt: "Old man cactus"
  },
  {
    id: "peruvian-old-man",
    commonName: "Peruvian Old Man Cactus",
    scientificName: "Espostoa melanostele",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A columnar cactus that may branch as it matures.",
    hardinessAndNativeRange: "Native to Peru.",
    specialTraits: "Its woolly covering and darker spines create a distinctive appearance.",
    care: {
      sunlight: "Full sun after gradual acclimation.",
      watering: "Allow the soil to dry between waterings.",
      soilAndPotting: "Use a gritty mineral cactus mix.",
      temperature: "Prefers warm conditions; protect from frost and damp cold.",
      fertilizer: "Apply diluted cactus fertilizer sparingly during growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310106901-4c5d6e7f8a9b?w=800&q=80",
    imageAlt: "Peruvian old man cactus"
  },
  
  {
    id: "blue-torch",
    commonName: "Blue Torch Cactus",
    scientificName: "Pilosocereus azureus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A branching columnar cactus that can grow several metres tall.",
    hardinessAndNativeRange: "Native to eastern Brazil.",
    specialTraits: "Its powdery blue stems and golden spines create a striking contrast.",
    care: {
      sunlight: "Full sun after gradual acclimation.",
      watering: "Water during active growth, allowing the soil to dry between waterings.",
      soilAndPotting: "Use a gritty, well-draining mix in a stable pot.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Apply balanced, diluted fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1542382105201-8c38a796c305?w=800&q=80",
    imageAlt: "Blue torch cactus"
  },
  {
    id: "candelabra",
    commonName: "Candelabra Cactus",
    scientificName: "Pachycereus pringlei",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A massive branching columnar cactus that can become tree-like.",
    hardinessAndNativeRange: "Native to Baja California and nearby northwestern Mexico.",
    specialTraits: "Develops thick, upright trunks with branches resembling a candelabra.",
    care: {
      sunlight: "Full sun.",
      watering: "Water infrequently, allowing the soil to dry completely between waterings.",
      soilAndPotting: "Use very gritty mineral soil and a large, stable container.",
      temperature: "Prefers warm, dry conditions; protect from hard frost.",
      fertilizer: "Use diluted cactus fertilizer sparingly during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a4917?w=800&q=80",
    imageAlt: "Candelabra cactus"
  },
  {
    id: "organ-pipe",
    commonName: "Organ Pipe Cactus",
    scientificName: "Stenocereus thurberi",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A multi-stemmed columnar cactus that forms clumps of upright stems.",
    hardinessAndNativeRange: "Native to the Sonoran Desert of Arizona and Mexico.",
    specialTraits: "Its tall, parallel stems resemble the pipes of a musical organ.",
    care: {
      sunlight: "Full sun.",
      watering: "Water sparingly and allow the soil to dry fully between waterings.",
      soilAndPotting: "Use a gritty, rapidly draining cactus mix.",
      temperature: "Prefers warm conditions; protect from prolonged frost.",
      fertilizer: "Apply minimal diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1518004668777-0805d35d90c1?w=800&q=80",
    imageAlt: "Organ pipe cactus"
  },
  {
    id: "fishhook-barrel",
    commonName: "Fishhook Barrel Cactus",
    scientificName: "Ferocactus wislizeni",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A barrel-shaped cactus that becomes larger and more elongated with age.",
    hardinessAndNativeRange: "Native to the southwestern United States and northern Mexico.",
    specialTraits: "Its prominent central spines can curve into distinctive hooks.",
    care: {
      sunlight: "Full sun.",
      watering: "Water deeply, then let the soil dry completely.",
      soilAndPotting: "Use a gritty mineral cactus mix.",
      temperature: "Prefers warm, dry conditions; protect from hard frost and wet cold.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e9f?w=800&q=80",
    imageAlt: "Fishhook barrel cactus"
  },
  {
    id: "blue-barrel",
    commonName: "Blue Barrel Cactus",
    scientificName: "Ferocactus glaucescens",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A rounded, blue-green barrel cactus.",
    hardinessAndNativeRange: "Native to central Mexico.",
    specialTraits: "Its blue-green body, pale spines and yellow flowers make it distinctive.",
    care: {
      sunlight: "Full sun after gradual acclimation.",
      watering: "Allow the soil to dry completely between waterings.",
      soilAndPotting: "Use a gritty, fast-draining cactus mix.",
      temperature: "Prefers warm conditions; protect from hard frost.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310106701-3c4d5e6f7a8b?w=800&q=80",
    imageAlt: "Blue barrel cactus"
  },
  {
    id: "chin",
    commonName: "Chin Cactus",
    scientificName: "Gymnocalycium mihanovichii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, globular cactus with rounded ribs.",
    hardinessAndNativeRange: "Native to parts of South America, including Paraguay.",
    specialTraits: "Its ribs have chin-like bumps, and it produces delicate flowers.",
    care: {
      sunlight: "Bright light; protect from intense midday sun.",
      watering: "Water after the soil dries and reduce watering in winter.",
      soilAndPotting: "Use a gritty cactus mix with good drainage.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914762109-2b3c4d5e6f7a?w=800&q=80",
    imageAlt: "Chin cactus"
  },
  {
    id: "moon-cactus",
    commonName: "Moon Cactus",
    scientificName: "Grafted Gymnocalycium hybrids",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small grafted cactus with a colourful top attached to a green rootstock.",
    hardinessAndNativeRange: "A cultivated horticultural graft rather than one single wild species.",
    specialTraits: "The colourful top may be red, orange, yellow or pink, depending on the cultivar.",
    care: {
      sunlight: "Bright indirect light; avoid harsh direct sun.",
      watering: "Water only after the soil dries; avoid keeping the graft wet.",
      soilAndPotting: "Use a gritty cactus mix in a pot with drainage holes.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Apply diluted balanced fertilizer sparingly during growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310106501-1a2b3c4d5e6f?w=800&q=80",
    imageAlt: "Moon cactus"
  },
  {
    id: "silver-ball",
    commonName: "Silver Ball Cactus",
    scientificName: "Parodia scopa",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus that may become short-columnar or form clusters.",
    hardinessAndNativeRange: "Native to southern Brazil and nearby regions.",
    specialTraits: "Its fine silvery spines contrast with its green body and yellow flowers.",
    care: {
      sunlight: "Bright light with gentle direct sun.",
      watering: "Allow the soil to dry between waterings.",
      soilAndPotting: "Use a gritty, well-draining cactus mix.",
      temperature: "Prefers mild conditions; protect from frost.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310106301-4c5d6e7f8a9b?w=800&q=80",
    imageAlt: "Silver ball cactus"
  },
  
  {
    id: "brain",
    commonName: "Brain Cactus",
    scientificName: "Stenocactus multicostatus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus with numerous narrow, wavy ribs.",
    hardinessAndNativeRange: "Native to northern Mexico.",
    specialTraits: "Its deeply folded ribs resemble the surface of a brain.",
    care: {
      sunlight: "Bright light with gentle direct sun.",
      watering: "Allow the soil to dry completely between waterings.",
      soilAndPotting: "Use a gritty mineral cactus mix in a pot with drainage.",
      temperature: "Prefers warm conditions; protect from frost and cold, wet soil.",
      fertilizer: "Apply diluted, low-nitrogen cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310106101-2d3e4f5a6b7c?w=800&q=80",
    imageAlt: "Brain cactus"
  },
  {
    id: "melon",
    commonName: "Melon Cactus",
    scientificName: "Melocactus azureus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus that develops a distinctive cap-like structure when mature.",
    hardinessAndNativeRange: "Native to Bahia, Brazil.",
    specialTraits: "Its blue-green body and woolly cap, called a cephalium, make it distinctive.",
    care: {
      sunlight: "Bright light and warm growing conditions.",
      watering: "Water during warm growth, allowing excess water to drain.",
      soilAndPotting: "Use gritty soil with excellent drainage.",
      temperature: "Prefers warmth and is sensitive to cold.",
      fertilizer: "Apply diluted, low-nitrogen cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310105901-3c4d5e6f7a8b?w=800&q=80",
    imageAlt: "Melon cactus"
  },
  {
    id: "turks-cap",
    commonName: "Turk's Cap Cactus",
    scientificName: "Melocactus matanzanus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A compact globular cactus with a prominent cephalium at maturity.",
    hardinessAndNativeRange: "Native to Cuba, particularly the Matanzas region.",
    specialTraits: "Its woolly reddish cap can produce small flowers and fruits.",
    care: {
      sunlight: "Bright light with protection from extreme scorching.",
      watering: "Water carefully during warm growth and avoid cold, wet soil.",
      soilAndPotting: "Use a gritty, fast-draining cactus mix.",
      temperature: "Requires warm conditions and protection from frost.",
      fertilizer: "Apply diluted cactus fertilizer sparingly during growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310105701-1b2c3d4e5f6a?w=800&q=80",
    imageAlt: "Turk's cap cactus"
  },
  {
    id: "living-rock",
    commonName: "Living Rock Cactus",
    scientificName: "Ariocarpus fissuratus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A very slow-growing, flattened cactus with a substantial underground root.",
    hardinessAndNativeRange: "Native to southwestern Texas and northern Mexico.",
    specialTraits: "Its fissured, stone-like surface helps it blend into rocky surroundings.",
    care: {
      sunlight: "Bright light with gradual acclimation to direct sun.",
      watering: "Water very sparingly during warm growth and keep dry in cool weather.",
      soilAndPotting: "Use a highly mineral, fast-draining mix and a deep pot.",
      temperature: "Prefers warm conditions; protect from prolonged cold and dampness.",
      fertilizer: "Use little or no fertilizer; if needed, apply a very dilute formula."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310105501-5d6e7f8a9b0c?w=800&q=80",
    imageAlt: "Living rock cactus"
  },
  {
    id: "peyote",
    commonName: "Peyote",
    scientificName: "Lophophora williamsii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slow-growing, spineless, flattened globular cactus.",
    hardinessAndNativeRange: "Native to parts of the Chihuahuan Desert in Mexico and southern Texas.",
    specialTraits: "Its soft grey-green body produces small pale flowers. It contains mescaline, and legal restrictions vary by location.",
    care: {
      sunlight: "Bright light with gradual acclimation.",
      watering: "Water sparingly after the soil dries completely.",
      soilAndPotting: "Use a highly mineral, fast-draining mix.",
      temperature: "Prefers warm conditions and protection from prolonged cold and wetness.",
      fertilizer: "Use little or no fertilizer; if used, make it very dilute."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310105301-4c5d8e7f8a9b?w=800&q=80",
    imageAlt: "Peyote cactus"
  },
  {
    id: "fairy-castle",
    commonName: "Fairy Castle Cactus",
    scientificName: "Acanthocereus tetragonus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A branching columnar cactus with upright stems that resemble castle towers.",
    hardinessAndNativeRange: "Native to regions of the southern United States, Mexico, Central America and the Caribbean.",
    specialTraits: "Its numerous upright branches create a miniature castle-like silhouette.",
    care: {
      sunlight: "Full sun to bright light.",
      watering: "Water during active growth after the soil dries.",
      soilAndPotting: "Use gritty, well-draining soil in a stable pot.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Apply balanced, diluted fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914738987-6b7c8d9e0f1a?w=800&q=80",
    imageAlt: "Fairy castle cactus"
  },
  {
    id: "rat-tail",
    commonName: "Rat Tail Cactus",
    scientificName: "Disocactus flagelliformis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with long, slender, trailing stems.",
    hardinessAndNativeRange: "Native to Mexico.",
    specialTraits: "Its cascading stems can produce bright pink to red tubular flowers.",
    care: {
      sunlight: "Bright indirect light with gentle sun.",
      watering: "Keep lightly moist during active growth without waterlogging.",
      soilAndPotting: "Use an airy epiphytic mix with bark and perlite.",
      temperature: "Prefers mild conditions; protect from cold drafts.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1597264943876-5c6d7e8f9a0b?w=800&q=80",
    imageAlt: "Rat tail cactus"
  },
  {
    id: "snake-cactus",
    commonName: "Golden Rat Tail Cactus",
    scientificName: "Cleistocactus winteri",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A trailing cactus with long, pendulous stems.",
    hardinessAndNativeRange: "Native to Bolivia.",
    specialTraits: "Its dense golden spines and orange-pink tubular flowers make it attractive in hanging pots.",
    care: {
      sunlight: "Bright light with several hours of sun.",
      watering: "Water after the soil dries and reduce watering in winter.",
      soilAndPotting: "Use a gritty, well-draining cactus mix in a hanging or raised pot.",
      temperature: "Prefers mild to warm conditions; protect from frost.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310105101-3c4d5e6f7a8b?w=800&q=80",
    imageAlt: "Golden rat tail cactus"
  },
  
  {
    id: "silver-torch",
    commonName: "Silver Torch Cactus",
    scientificName: "Cleistocactus strausii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slender, upright columnar cactus that can form clusters.",
    hardinessAndNativeRange: "Native to the Bolivian Andes.",
    specialTraits: "Its dense, silvery-white spines create a soft-looking appearance; mature plants can produce red tubular flowers.",
    care: {
      sunlight: "Full sun after gradual acclimation.",
      watering: "Water after the soil dries; keep much drier in winter.",
      soilAndPotting: "Use gritty, fast-draining cactus mix in a deep pot.",
      temperature: "Prefers bright conditions and well-drained soil; protect from wet frost.",
      fertilizer: "Apply diluted cactus fertilizer sparingly during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310104901-2d3e4f5a6b7c?w=800&q=80",
    imageAlt: "Silver torch cactus"
  },
  {
    id: "mountain-pincushion",
    commonName: "Mountain Pincushion",
    scientificName: "Escobaria vivipara",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus that may form clusters.",
    hardinessAndNativeRange: "Native across parts of western and central North America, including areas of Canada, the United States and Mexico.",
    specialTraits: "Produces bright pink flowers and is notably cold-hardy when grown in well-drained conditions.",
    care: {
      sunlight: "Full sun.",
      watering: "Water sparingly and avoid prolonged winter moisture.",
      soilAndPotting: "Use a very gritty mineral mix with excellent drainage.",
      temperature: "Cold-hardy when dry; container plants need protection from wet freeze-thaw conditions.",
      fertilizer: "Use minimal diluted cactus fertilizer in spring."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310104701-1b2c3d4e5f6a?w=800&q=80",
    imageAlt: "Mountain pincushion cactus"
  },
  {
    id: "finger-cactus",
    commonName: "Finger Cactus",
    scientificName: "Mammillaria vetula subsp. gracilis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small clustering cactus with finger-like stems.",
    hardinessAndNativeRange: "Associated with central Mexico; taxonomy and synonyms can vary by reference.",
    specialTraits: "Forms clusters of small stems covered with pale spines and produces tiny flowers.",
    care: {
      sunlight: "Bright light with gentle direct sun.",
      watering: "Allow the soil to dry between waterings.",
      soilAndPotting: "Use gritty cactus mix in a shallow pot with drainage.",
      temperature: "Prefers warm conditions; protect from frost.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914715678-4c5d6e7f8a9b?w=800&q=80",
    imageAlt: "Finger cactus"
  },
  {
    id: "domino-cactus",
    commonName: "Domino Cactus",
    scientificName: "Echinopsis cultivar sold as 'Dominos'",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus that may produce offsets.",
    hardinessAndNativeRange: "A cultivated horticultural form; the exact cultivar name may vary among sellers.",
    specialTraits: "Some forms have distinctive pale areoles and produce large, showy flowers.",
    care: {
      sunlight: "Bright light with gentle direct sun.",
      watering: "Water thoroughly, then allow the soil to dry completely.",
      soilAndPotting: "Use a gritty cactus mix in a pot with drainage.",
      temperature: "Prefers mild conditions; protect from frost.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310104501-5d6e7f8a9b0c?w=800&q=80",
    imageAlt: "Domino cactus"
  },
  {
    id: "blue-column",
    commonName: "Blue Column Cactus",
    scientificName: "Pilosocereus pachycladus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An upright, branching columnar cactus that can become several metres tall.",
    hardinessAndNativeRange: "Native to eastern Brazil.",
    specialTraits: "Its powdery blue-green stems and contrasting spines make it a striking specimen.",
    care: {
      sunlight: "Full sun after gradual acclimation.",
      watering: "Water during warm growth and allow the soil to dry between waterings.",
      soilAndPotting: "Use a gritty, fast-draining mix in a stable, deep pot.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Apply balanced, diluted fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1542382105201-8c38a796c305?w=800&q=80",
    imageAlt: "Blue column cactus"
  },
  {
    id: "queens-of-night",
    commonName: "Queen of the Night",
    scientificName: "Epiphyllum oxypetalum",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with long, flattened, leaf-like stems.",
    hardinessAndNativeRange: "Associated with tropical regions of Central America and widely cultivated.",
    specialTraits: "Famous for large, fragrant white flowers that open at night.",
    care: {
      sunlight: "Bright filtered light; avoid harsh midday sun.",
      watering: "Water when the upper mix begins to dry, without leaving the roots waterlogged.",
      soilAndPotting: "Use an airy epiphytic mix containing bark and perlite.",
      temperature: "Prefers warm conditions and protection from cold.",
      fertilizer: "Use diluted balanced fertilizer during active growth."
    },
    imageUrl: "",
    imageAlt: "Queen of the night cactus"
  },
  {
    id: "mistletoe-cactus",
    commonName: "Mistletoe Cactus",
    scientificName: "Rhipsalis baccifera",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with thin, branching, trailing stems.",
    hardinessAndNativeRange: "Found in tropical and subtropical forests across the Americas and some other regions.",
    specialTraits: "Produces small pale flowers followed by translucent, berry-like fruits.",
    care: {
      sunlight: "Bright indirect light.",
      watering: "Keep lightly moist during growth while allowing excess water to drain.",
      soilAndPotting: "Use an airy epiphytic potting mix.",
      temperature: "Prefers warm conditions and protection from cold.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    },
    imageUrl: "",
    imageAlt: "Mistletoe cactus"
  },
  {
    id: "peruvian-apple",
    commonName: "Peruvian Apple Cactus",
    scientificName: "Cereus repandus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A tall, branching columnar cactus that can become tree-like.",
    hardinessAndNativeRange: "Native to northern South America and widely cultivated elsewhere.",
    specialTraits: "Produces large night-blooming flowers and red fruits in suitable conditions.",
    care: {
      sunlight: "Full sun.",
      watering: "Water during active growth after the soil dries; reduce in cooler weather.",
      soilAndPotting: "Use gritty, fast-draining soil in a stable, deep pot.",
      temperature: "Prefers warm conditions; protect from frost.",
      fertilizer: "Apply balanced, diluted fertilizer during active growth."
    },
    imageUrl: "",
    imageAlt: "Peruvian apple cactus"
  }
];

export default cactusSpecies;
