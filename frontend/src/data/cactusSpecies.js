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
  },
  
  {
    id: "indian-fig-prickly-pear",
    commonName: "Indian Fig Prickly Pear",
    scientificName: "Opuntia ficus-indica",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A tree-like shrub with branching pads, typically 3–5 m tall. Growth is moderate to fast.",
    hardinessAndNativeRange: "Originated in central Mexico and is cultivated worldwide, including Sri Lanka. Generally suited to warm climates.",
    specialTraits: "Large green pads, usually with few prominent spines but fine glochids. Produces yellow to orange-red flowers and sweet red or yellow edible fruits. Glochids can irritate skin.",
    care: {
      sunlight: "Full sun, ideally 6 or more hours daily.",
      watering: "Water thoroughly, then let the soil dry. Water less during winter.",
      soilAndPotting: "Use a sharply draining mix with plenty of grit and a terracotta pot with drainage.",
      temperature: "Prefers 20–35°C; protect from prolonged cold.",
      fertilizer: "Use diluted, low-nitrogen cactus fertilizer during spring and summer."
    },
    imageUrl: "https://images.unsplash.com/photo-1612928831096-466a0b989bce?w=800&q=80",
    imageAlt: "Prickly pear pads, flowers and fruits"
  },
  {
    id: "bunny-ear",
    commonName: "Bunny Ear Cactus",
    scientificName: "Opuntia microdasys",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A shrubby cactus with paired oval pads, typically 60–90 cm tall.",
    hardinessAndNativeRange: "Native to northern and central Mexico; prefers warm growing conditions.",
    specialTraits: "Rounded pads have dense yellow, white or reddish glochid clusters. Pale yellow flowers and red-purple fruits may appear. Glochids easily irritate skin.",
    care: {
      sunlight: "Full sun after gradual acclimation, ideally 5 or more hours.",
      watering: "Water thoroughly and let the soil dry; reduce watering in winter.",
      soilAndPotting: "Use a gritty cactus mix and a terracotta pot with drainage.",
      temperature: "Keep warm; protect from temperatures below about 5°C.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1599958893295-927a26c7b380?w=800&q=80",
    imageAlt: "Bunny ear prickly pear cactus"
  },
  {
    id: "eastern-prickly-pear",
    commonName: "Eastern Prickly Pear",
    scientificName: "Opuntia humifusa",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low-spreading, ground-covering cactus, around 15–30 cm tall and 60–100 cm wide.",
    hardinessAndNativeRange: "Native to eastern and central North America; notably cold-hardy when grown in suitable conditions.",
    specialTraits: "Flat green pads, spines and glochids; bright yellow summer flowers and purple fruits.",
    care: {
      sunlight: "Full sun, ideally 6 or more hours daily.",
      watering: "Water new plants occasionally; established plants need little supplemental water.",
      soilAndPotting: "Use gritty, sharply draining soil; tolerates sandy ground.",
      temperature: "Very cold-hardy when established and kept well-drained.",
      fertilizer: "Use little fertilizer; an occasional light spring feeding is sufficient."
    },
    imageUrl: "https://images.unsplash.com/photo-1565192703803-b3c61e81d0b6?w=800&q=80",
    imageAlt: "Eastern prickly pear pads and flowers"
  },
  {
    id: "engelmann-prickly-pear",
    commonName: "Engelmann Prickly Pear",
    scientificName: "Opuntia engelmannii",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A large branching shrub that can reach about 1–2 m tall and spread several metres.",
    hardinessAndNativeRange: "Native to the southwestern United States and northern Mexico.",
    specialTraits: "Blue-green pads, prominent spines, yellow to orange or rose-toned flowers, and red fruits.",
    care: {
      sunlight: "Full sun, ideally 6 or more hours.",
      watering: "Water occasionally during active growth; keep much drier in winter.",
      soilAndPotting: "Use a gritty mix with excellent drainage.",
      temperature: "Tolerates some cool weather when dry; protect from prolonged wet frost.",
      fertilizer: "Use diluted cactus fertilizer sparingly during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1518004668777-0805d35d90c1?w=800&q=80",
    imageAlt: "Engelmann prickly pear cactus"
  },
  {
    id: "beaver-tail",
    commonName: "Beaver Tail Cactus",
    scientificName: "Opuntia basilaris",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low, clumping cactus with flattened pads, commonly 30–60 cm tall.",
    hardinessAndNativeRange: "Native to desert regions of the southwestern United States, including California, Arizona and Nevada.",
    specialTraits: "Distinctive blue-purple pads, usually with few prominent spines, and brilliant pink or magenta flowers.",
    care: {
      sunlight: "Full sun; strong light helps maintain pad colour.",
      watering: "Water very sparingly and allow the soil to dry completely.",
      soilAndPotting: "Use a highly mineral mix with excellent drainage.",
      temperature: "Tolerates dry conditions and some cold; avoid cold, wet soil.",
      fertilizer: "Usually needs little or no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e9f?w=800&q=80",
    imageAlt: "Blue-purple beaver tail cactus pads"
  },
  {
    id: "santa-rita",
    commonName: "Santa Rita Prickly Pear",
    scientificName: "Opuntia santarita",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A branching shrub with colourful pads, commonly around 1–2 m tall.",
    hardinessAndNativeRange: "Native to parts of the southwestern United States and northern Mexico.",
    specialTraits: "Pads can turn vivid violet-purple in bright sun and cool, dry conditions. Yellow flowers and purple fruits may develop.",
    care: {
      sunlight: "Full sun to maintain strong purple colouring.",
      watering: "Water deeply but infrequently; allow the soil to dry completely.",
      soilAndPotting: "Use a gritty, fast-draining cactus mix.",
      temperature: "Prefers warm, dry conditions; protect from prolonged wet cold.",
      fertilizer: "Apply a small amount of diluted cactus fertilizer during growth if needed."
    },
    imageUrl: "https://images.unsplash.com/photo-1542382105201-8c38a796c305?w=800&q=80",
    imageAlt: "Purple Santa Rita prickly pear pads"
  },
  {
    id: "cows-tongue",
    commonName: "Cow's Tongue Prickly Pear",
    scientificName: "Opuntia linguiformis",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A prickly pear form with unusually long, tongue-shaped pads that can arch outward.",
    hardinessAndNativeRange: "Associated with Texas and cultivated in warm, sunny regions.",
    specialTraits: "Long, narrow-to-elongated pads, yellow flowers and potential purple fruits; spines and glochids may be present.",
    care: {
      sunlight: "Full sun.",
      watering: "Water thoroughly, then let the soil dry completely.",
      soilAndPotting: "Use gritty cactus soil in a pot with drainage.",
      temperature: "Prefers warm conditions and protection from prolonged frost.",
      fertilizer: "Use diluted cactus fertilizer sparingly during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1612928831096-466a0b989bce?w=800&q=80",
    imageAlt: "Elongated prickly pear pads"
  },
  {
    id: "opuntia-rubescens",
    commonName: "Road Kill Cactus",
    scientificName: "Opuntia rubescens",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A branching, tree-like cactus with relatively thin pads.",
    hardinessAndNativeRange: "The supplied name and common-name association require taxonomic verification before publication.",
    specialTraits: "The profile is retained for review; verify the accepted scientific name, native range and flower description before presenting these as confirmed facts.",
    care: {
      sunlight: "Bright light to full sun, introduced gradually.",
      watering: "Allow the growing medium to dry between waterings.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Keep warm and protect from cold.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1597264945249-3f4e8c9c9d30?w=800&q=80",
    imageAlt: "Branching cactus with narrow pads"
  },
  {
    id: "tiger-tongue",
    commonName: "Tiger Tongue",
    scientificName: "Opuntia aurantiaca",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low, spreading cactus with small jointed pads; can spread rapidly.",
    hardinessAndNativeRange: "Native to parts of South America and invasive in some regions outside its native range.",
    specialTraits: "Narrow pads, sharp spines and orange flowers. Detached joints can root and spread; handle carefully.",
    care: {
      sunlight: "Full sun.",
      watering: "Water sparingly and allow the soil to dry fully.",
      soilAndPotting: "Use a gritty, sharply draining mix.",
      temperature: "Prefers warm conditions; protect from hard frost.",
      fertilizer: "Usually needs little or no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1565192703803-b3c61e81d0b6?w=800&q=80",
    imageAlt: "Jointed prickly pear cactus"
  },
  {
    id: "opuntia-vestita",
    commonName: "Old Man Opuntia",
    scientificName: "Opuntia vestita",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A slender, branching cactus reported to have hair-like spines.",
    hardinessAndNativeRange: "The supplied identification and association with Bolivia require taxonomic verification.",
    specialTraits: "This record is retained for review; verify the scientific name and whether the described hairy stems and red flowers match the intended species.",
    care: {
      sunlight: "Bright light to full sun after gradual acclimation.",
      watering: "Water thoroughly and let the soil dry; reduce watering in winter.",
      soilAndPotting: "Use a gritty, fast-draining cactus mix.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Use diluted cactus fertilizer sparingly."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914784321-5d6e7f8a9b0c?w=800&q=80",
    imageAlt: "Hairy-looking cactus stems"
  },
  {
    id: "teddy-bear-cholla",
    commonName: "Teddy Bear Cholla",
    scientificName: "Cylindropuntia bigelovii",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A branching cylindrical cholla, commonly around 1–2 m tall.",
    hardinessAndNativeRange: "Native to the Sonoran Desert, including parts of Arizona, California and Mexico.",
    specialTraits: "Dense golden spines create a fuzzy appearance. Stem joints detach readily and have barbed spines.",
    care: {
      sunlight: "Full sun, ideally 6 or more hours.",
      watering: "Water very sparingly; allow the soil to dry completely.",
      soilAndPotting: "Use a highly mineral mix with sharp drainage.",
      temperature: "Prefers warm, dry conditions; protect from prolonged wet frost.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a4917?w=800&q=80",
    imageAlt: "Golden cylindrical cholla cactus"
  },
  {
    id: "silver-cholla",
    commonName: "Silver Cholla",
    scientificName: "Cylindropuntia echinocarpa",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A branching, upright cholla that can reach around 1–2.5 m tall.",
    hardinessAndNativeRange: "Native to desert regions of the southwestern United States.",
    specialTraits: "Silvery to golden spines, woody branching growth and greenish-yellow flowers.",
    care: {
      sunlight: "Full sun.",
      watering: "Water very infrequently and allow the soil to dry fully.",
      soilAndPotting: "Use a very gritty mineral mix.",
      temperature: "Tolerates dry desert conditions and some cold when kept dry.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1518004668777-0805d35d90c1?w=800&q=80",
    imageAlt: "Branching silver cholla"
  },
  {
    id: "chain-fruit-cholla",
    commonName: "Chain Fruit Cholla",
    scientificName: "Cylindropuntia fulgida",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A tree-like branching cholla that can reach around 2–3 m tall.",
    hardinessAndNativeRange: "Native to the Sonoran Desert of the southwestern United States and Mexico.",
    specialTraits: "Older fruits can remain attached in hanging chains. Flowers are commonly pinkish to magenta.",
    care: {
      sunlight: "Full sun.",
      watering: "Water sparingly and allow the soil to dry completely.",
      soilAndPotting: "Use a highly mineral, fast-draining cactus mix.",
      temperature: "Prefers warm, dry conditions; protect from prolonged wet cold.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e9f?w=800&q=80",
    imageAlt: "Branching cholla cactus"
  },
  {
    id: "staghorn-cholla",
    commonName: "Staghorn Cholla",
    scientificName: "Cylindropuntia versicolor",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A branching, tree-like cholla that may reach 2–4 m tall.",
    hardinessAndNativeRange: "Native to parts of Arizona and northern Mexico.",
    specialTraits: "Branching stems may show green, purple or reddish tones. Flower colours can vary.",
    care: {
      sunlight: "Full sun.",
      watering: "Water sparingly, allowing the soil to dry completely between waterings.",
      soilAndPotting: "Use a highly mineral mix with excellent drainage.",
      temperature: "Prefers warm, dry conditions; protect from prolonged wet frost.",
      fertilizer: "Use very little fertilizer; a light spring feeding is optional."
    },
    imageUrl: "https://images.unsplash.com/photo-1542382105201-8c38a796c305?w=800&q=80",
    imageAlt: "Branching staghorn cholla"
  },
  {
    id: "whipple-cholla",
    commonName: "Whipple Cholla",
    scientificName: "Cylindropuntia whipplei",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low, bushy cholla generally around 30–90 cm tall.",
    hardinessAndNativeRange: "Native to the Colorado Plateau and nearby areas of the southwestern United States.",
    specialTraits: "Short, dense joints with yellowish or whitish spines and greenish-yellow flowers.",
    care: {
      sunlight: "Full sun.",
      watering: "Water minimally and keep the soil dry in winter.",
      soilAndPotting: "Use a highly gritty mineral mix.",
      temperature: "Cold-tolerant when dry and well-drained.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a4917?w=800&q=80",
    imageAlt: "Low-growing cholla cactus"
  },
  {
    id: "gumball-cholla",
    commonName: "Gumball Cholla",
    scientificName: "Cylindropuntia spinosior",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "An upright, branching, cane-like cholla that may reach 1–3 m tall.",
    hardinessAndNativeRange: "Native to the southwestern United States and northern Mexico.",
    specialTraits: "Slender jointed stems, dense spines and flowers that may be purple, magenta, red or yellow.",
    care: {
      sunlight: "Full sun.",
      watering: "Water sparingly and let the soil dry completely.",
      soilAndPotting: "Use a highly mineral cactus mix.",
      temperature: "Prefers dry conditions and good drainage; protect from wet frost.",
      fertilizer: "Use diluted cactus fertilizer sparingly if needed."
    },
    imageUrl: "https://images.unsplash.com/photo-1518004668777-0805d35d90c1?w=800&q=80",
    imageAlt: "Cane-like cholla cactus"
  },
  {
    id: "tree-cholla",
    commonName: "Tree Cholla",
    scientificName: "Cylindropuntia imbricata",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A tree-like cholla with a woody trunk, commonly 2–4 m tall.",
    hardinessAndNativeRange: "Native to parts of the central and southwestern United States and Mexico.",
    specialTraits: "Distinctively patterned cylindrical stems, purple or rose flowers and yellowish fruits.",
    care: {
      sunlight: "Full sun.",
      watering: "Drought-tolerant; water sparingly after establishment.",
      soilAndPotting: "Use gritty soil with excellent drainage.",
      temperature: "Relatively cold-hardy when kept dry.",
      fertilizer: "Usually needs little fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1565192703803-b3c61e81d0b6?w=800&q=80",
    imageAlt: "Tree-like cholla with branching stems"
  },
  {
    id: "desert-christmas-cactus",
    commonName: "Desert Christmas Cactus",
    scientificName: "Cylindropuntia leptocaulis",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A sprawling cactus with slender, pencil-like stems, often 60–150 cm tall.",
    hardinessAndNativeRange: "Native to the southwestern United States and northern Mexico.",
    specialTraits: "Thin stems, small pale flowers and bright red fruits that may remain visible in winter.",
    care: {
      sunlight: "Full sun.",
      watering: "Water very sparingly and allow the soil to dry completely.",
      soilAndPotting: "Use a gritty, fast-draining mineral mix.",
      temperature: "Tolerates some cold when dry; protect from prolonged wet frost.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1599958893295-927a26c7b380?w=800&q=80",
    imageAlt: "Slender stems of a jointed cactus"
  },
  {
    id: "grusonia",
    commonName: "Club Cholla",
    scientificName: "Grusonia spp.",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low, clumping cactus with thick, club-shaped joints.",
    hardinessAndNativeRange: "Different Grusonia species occur in parts of the southwestern United States and northern Mexico.",
    specialTraits: "Thick joints, sharp spines and typically yellowish flowers. This is a genus-level profile, not one species.",
    care: {
      sunlight: "Full sun.",
      watering: "Water very sparingly and allow the soil to dry fully.",
      soilAndPotting: "Use an extremely gritty mineral mix.",
      temperature: "Requirements vary by species; keep plants dry in cold weather.",
      fertilizer: "Usually needs little or no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1612928831096-466a0b989bce?w=800&q=80",
    imageAlt: "Low-growing spiny cactus"
  },
  {
    id: "pereskiopsis",
    commonName: "Pereskiopsis",
    scientificName: "Pereskiopsis spp.",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A leafy, shrubby cactus with slender stems; some species grow rapidly to around 30–60 cm or more.",
    hardinessAndNativeRange: "Native to Mexico and parts of Central America; prefers warm conditions.",
    specialTraits: "Unlike many cacti, it has true leaves. Some species are used as grafting stock in horticulture.",
    care: {
      sunlight: "Bright light with some direct sun after acclimation.",
      watering: "Needs more regular water than desert cacti; do not let the mix remain waterlogged.",
      soilAndPotting: "Use a well-draining mix with some organic matter.",
      temperature: "Keep warm and protect from cold.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1597264945249-3f4e8c9c9d30?w=800&q=80",
    imageAlt: "Leafy cactus growth"
  },
  {
    id: "quiabentia-zehntneri",
    commonName: "Quiabentia",
    scientificName: "Quiabentia zehntneri",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A branching, tree-like cactus that may reach several metres in suitable conditions.",
    hardinessAndNativeRange: "Native to northeastern Brazil, including dry Caatinga habitats.",
    specialTraits: "Has persistent leaves and a more leafy appearance than many desert cacti.",
    care: {
      sunlight: "Full sun to light shade.",
      watering: "Water during active growth, allowing the soil to dry partly between waterings.",
      soilAndPotting: "Use a well-draining mix with some organic matter.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Use diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310108798-590e04d2b461?w=800&q=80",
    imageAlt: "Leafy cactus plant"
  },
  {
    id: "eves-needle",
    commonName: "Eve's Needle",
    scientificName: "Austrocylindropuntia subulata",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A branching, columnar cactus that can reach 2–4 m tall and retains long, awl-shaped leaves.",
    hardinessAndNativeRange: "Native to the Andes of Peru and naturalised in various regions.",
    specialTraits: "Cylindrical stems, long green leaves and orange-red flowers under suitable conditions.",
    care: {
      sunlight: "Full sun to bright light.",
      watering: "Water thoroughly during growth, then let the soil dry; reduce watering in winter.",
      soilAndPotting: "Use gritty, fast-draining cactus soil.",
      temperature: "Prefers warm conditions; protect from prolonged frost.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1611914828543-3c4d5e6f7a8b?w=800&q=80",
    imageAlt: "Eve's needle cactus with cylindrical stems"
  },
  {
    id: "austrocylindropuntia-cylindrica",
    commonName: "Cane Cactus",
    scientificName: "Austrocylindropuntia cylindrica",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A branching shrub with cylindrical stems, often around 1–2 m tall.",
    hardinessAndNativeRange: "Native to parts of Ecuador and Peru.",
    specialTraits: "Green cylindrical stems, small leaves and flowers that may be pink or red.",
    care: {
      sunlight: "Full sun.",
      watering: "Water thoroughly, then let the soil dry between waterings.",
      soilAndPotting: "Use gritty cactus soil with excellent drainage.",
      temperature: "Prefers warm conditions and protection from frost.",
      fertilizer: "Use diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1597264944123-4f5e6d7b8c9d?w=800&q=80",
    imageAlt: "Cylindrical green cactus stems"
  },
  {
    id: "maihueniopsis-glomerata",
    commonName: "Cushion Opuntia",
    scientificName: "Maihueniopsis glomerata",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A slow-growing, dense cushion-forming cactus, generally around 10–20 cm tall.",
    hardinessAndNativeRange: "Native to high-elevation regions of the Andes in Argentina and Chile.",
    specialTraits: "Small segmented pads form compact mats and can produce bright yellow flowers.",
    care: {
      sunlight: "Full sun.",
      watering: "Water very sparingly; keep dry during cold winter periods.",
      soilAndPotting: "Use a highly mineral mix with excellent drainage.",
      temperature: "Some cold tolerance is possible when the plant is completely dry.",
      fertilizer: "Usually needs little or no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1619310107701-1a2b3c4d5e6f?w=800&q=80",
    imageAlt: "Compact cushion-forming cactus"
  },
  {
    id: "cumulopuntia-sphaerica",
    commonName: "Ball-Jointed Cactus",
    scientificName: "Cumulopuntia sphaerica",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low, clumping cactus with rounded joints, commonly around 15–30 cm tall.",
    hardinessAndNativeRange: "Associated with high-elevation areas of the Andes, including Peru, Bolivia and Chile.",
    specialTraits: "Rounded joints, prominent spines and yellow to orange flowers.",
    care: {
      sunlight: "Full sun.",
      watering: "Water very sparingly and keep dry in winter.",
      soilAndPotting: "Use highly mineral soil with sharp drainage.",
      temperature: "Prefers dry conditions; avoid cold, wet soil.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1518004668777-0805d35d90c1?w=800&q=80",
    imageAlt: "Rounded joints of an opuntioid cactus"
  },
  {
    id: "tunilla-soehrensii",
    commonName: "Tunilla",
    scientificName: "Tunilla soehrensii",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low, mat-forming cactus with small flattened joints.",
    hardinessAndNativeRange: "Associated with high-elevation regions of the Andes, including Bolivia and neighbouring countries.",
    specialTraits: "Small pads with dense spines; may produce bright orange-red flowers.",
    care: {
      sunlight: "Full sun.",
      watering: "Water sparingly and allow the soil to dry completely.",
      soilAndPotting: "Use a gritty, fast-draining mineral mix.",
      temperature: "Keep dry during cold weather.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1542382105201-8c38a796c305?w=800&q=80",
    imageAlt: "Low-growing opuntioid cactus"
  },
  {
    id: "brazilian-prickly-pear",
    commonName: "Brazilian Prickly Pear",
    scientificName: "Brasiliopuntia brasiliensis",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A tree-like cactus that can reach several metres tall, with a trunk and flattened upper pads.",
    hardinessAndNativeRange: "Native to Brazil and other parts of South America.",
    specialTraits: "Distinctive tree form, flattened pads, yellow flowers and orange fruits.",
    care: {
      sunlight: "Full sun.",
      watering: "Water during active growth and allow excess water to drain; reduce watering in cooler periods.",
      soilAndPotting: "Use well-draining soil with some mineral grit.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Use diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a4917?w=800&q=80",
    imageAlt: "Tree-like Brazilian prickly pear"
  },
  {
    id: "consolea-rubriflora",
    commonName: "Red-Flowered Prickly Pear",
    scientificName: "Consolea rubriflora",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A tree-like prickly pear form that may develop a tall trunk and flattened pads.",
    hardinessAndNativeRange: "The supplied species identification and distribution require verification before publication.",
    specialTraits: "Retained as a review record; confirm the accepted name and the reported red flowers before treating these traits as verified.",
    care: {
      sunlight: "Full sun to bright light.",
      watering: "Water when the soil has dried substantially; avoid waterlogging.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e9f?w=800&q=80",
    imageAlt: "Tree-like prickly pear cactus"
  },
  {
    id: "nopalea-cochenillifera",
    commonName: "Cochineal Nopal",
    scientificName: "Nopalea cochenillifera",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A fast-growing shrub with thick pads, potentially reaching several metres tall.",
    hardinessAndNativeRange: "Native to Mexico and widely cultivated in warm regions.",
    specialTraits: "Often has few prominent spines, red-orange flowers and edible fruits. Historically associated with cochineal dye production.",
    care: {
      sunlight: "Full sun.",
      watering: "Water during active growth; established plants tolerate dry periods.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Prefers warm conditions; protect from cold.",
      fertilizer: "Use diluted balanced fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1612928831096-466a0b989bce?w=800&q=80",
    imageAlt: "Nopal cactus pads"
  },
  {
    id: "opuntia-stricta",
    commonName: "Erect Prickly Pear",
    scientificName: "Opuntia stricta",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "An upright, spreading shrub that can grow around 1–2 m tall.",
    hardinessAndNativeRange: "Native to parts of the southeastern United States and Caribbean; invasive in several regions outside its native range.",
    specialTraits: "Green pads, yellow flowers and purple fruits. Can become an invasive plant where introduced.",
    care: {
      sunlight: "Full sun.",
      watering: "Very drought-tolerant once established; avoid excessive watering.",
      soilAndPotting: "Use well-draining soil.",
      temperature: "Prefers warm conditions and good drainage.",
      fertilizer: "Usually needs little or no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1565192703803-b3c61e81d0b6?w=800&q=80",
    imageAlt: "Erect prickly pear cactus"
  },
  {
    id: "desert-prickly-pear",
    commonName: "Desert Prickly Pear",
    scientificName: "Opuntia phaeacantha",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low-spreading prickly pear, commonly around 30–60 cm tall.",
    hardinessAndNativeRange: "Native to the western United States and northern Mexico.",
    specialTraits: "Blue-grey to green pads, brown central spines, colourful flowers and purple fruits.",
    care: {
      sunlight: "Full sun.",
      watering: "Water sparingly and let the soil dry fully.",
      soilAndPotting: "Use gritty soil with excellent drainage.",
      temperature: "Cold-tolerant when dry and established.",
      fertilizer: "Usually needs little or no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1518004668777-0805d35d90c1?w=800&q=80",
    imageAlt: "Desert prickly pear pads and spines"
  },
  {
    id: "plains-prickly-pear",
    commonName: "Plains Prickly Pear",
    scientificName: "Opuntia polyacantha",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low-growing, spreading cactus, commonly around 10–30 cm tall.",
    hardinessAndNativeRange: "Native across broad areas of western and central North America, from Canada toward Mexico.",
    specialTraits: "Dense white or grey spines and yellow or pink flowers; adapted to cold, dry climates.",
    care: {
      sunlight: "Full sun.",
      watering: "Water minimally and avoid prolonged winter moisture.",
      soilAndPotting: "Use gritty, sharply draining soil.",
      temperature: "Very cold-hardy when established and kept well-drained.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e9f?w=800&q=80",
    imageAlt: "Low-growing plains prickly pear"
  },
  {
    id: "giant-prickly-pear",
    commonName: "Giant Prickly Pear",
    scientificName: "Opuntia robusta",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A large shrub or tree-like cactus with broad, round pads; may reach several metres tall.",
    hardinessAndNativeRange: "Native to central Mexico.",
    specialTraits: "Large blue-grey to silvery-green pads, yellow flowers and reddish fruits.",
    care: {
      sunlight: "Full sun.",
      watering: "Water thoroughly, then let the soil dry completely.",
      soilAndPotting: "Use gritty cactus soil and a large, stable pot with drainage.",
      temperature: "Prefers warm conditions; protect from prolonged frost.",
      fertilizer: "Use diluted, low-nitrogen cactus fertilizer during active growth."
    },
    imageUrl: "https://images.unsplash.com/photo-1542382105201-8c38a796c305?w=800&q=80",
    imageAlt: "Large round pads of a giant prickly pear"
  },
  {
    id: "black-spine-prickly-pear",
    commonName: "Black-Spine Prickly Pear",
    scientificName: "Opuntia macrocentra",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A clumping shrub with colourful pads, often around 60–90 cm tall.",
    hardinessAndNativeRange: "Native to parts of the southwestern United States and northern Mexico.",
    specialTraits: "Pads can become deep purple in strong light or cool, dry weather. Long dark central spines and yellow flowers with reddish centres are characteristic.",
    care: {
      sunlight: "Full sun; strong light helps bring out purple pad colouring.",
      watering: "Water sparingly and allow the soil to dry fully.",
      soilAndPotting: "Use a highly gritty mix with excellent drainage.",
      temperature: "Tolerates some cold when dry; protect from wet frost.",
      fertilizer: "Usually needs little or no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1612928831096-466a0b989bce?w=800&q=80",
    imageAlt: "Purple pads of a black-spine prickly pear"
  },
  {
    id: "golden-prickly-pear",
    commonName: "Golden Prickly Pear",
    scientificName: "Opuntia aurea",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A low, mounding prickly pear, commonly around 15–30 cm tall.",
    hardinessAndNativeRange: "Associated with the Colorado Plateau, including parts of Utah and Arizona.",
    specialTraits: "Blue-green pads with golden spines and yellow flowers.",
    care: {
      sunlight: "Full sun.",
      watering: "Water minimally and let the soil dry completely.",
      soilAndPotting: "Use gritty, mineral-rich soil with excellent drainage.",
      temperature: "Prefers dry conditions; protect from prolonged wet cold.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1565192703803-b3c61e81d0b6?w=800&q=80",
    imageAlt: "Golden-spined prickly pear cactus"
  },
  {
    id: "long-tailed-beaver-tail",
    commonName: "Long-Tailed Beaver Tail",
    scientificName: "Opuntia basilaris var. caudata",
    subfamily: "Opuntioideae",
    growthHabitAndSize: "A clumping cactus with blue-purple pads that may develop a short trunk with age.",
    hardinessAndNativeRange: "Reported from parts of California and Arizona; verify the accepted variety name before publication.",
    specialTraits: "Blue-purple pads and pink to magenta flowers. The supplied variety identification should be checked against a reliable botanical reference.",
    care: {
      sunlight: "Full sun.",
      watering: "Water very sparingly; keep the soil dry in cool weather.",
      soilAndPotting: "Use a highly mineral mix with excellent drainage.",
      temperature: "Prefers dry conditions; protect from prolonged wet frost.",
      fertilizer: "Usually needs no fertilizer."
    },
    imageUrl: "https://images.unsplash.com/photo-1599958893295-927a26c7b380?w=800&q=80",
    imageAlt: "Blue-purple beaver tail cactus pads"
  },
  
  {
    id: "maihuenia-patagonica",
    commonName: "Spiny Green Blanket",
    scientificName: "Maihuenia patagonica",
    subfamily: "Maihuenioideae",
    growthHabitAndSize:
      "A very slow-growing, dense cushion-forming cactus with tightly packed segments. Typically around 5–10 cm tall, with a spreading mat that can reach 50–100 cm or more in favourable conditions.",
    hardinessAndNativeRange:
      "Native to Patagonia in southern Argentina and Chile, where it grows in cold, open steppe environments. Exceptionally cold-tolerant when grown in sharply drained soil, but vulnerable to excess moisture.",
    specialTraits:
      "Has tiny, cylindrical green leaves that persist longer than those of most cacti, along with short, stout white or yellowish spines. Produces bright lemon-yellow, cup-shaped flowers in spring to early summer. Fruit is described as a small, greenish berry.",
    care: {
      sunlight:
        "Full sun is preferred, ideally around 6 or more hours daily. Introduce strong sunlight gradually to prevent sunburn.",
      watering:
        "Water thoroughly during active growth, then allow the substrate to dry completely. Water sparingly and keep much drier during cold winter conditions. Overwatering can quickly cause root rot.",
      soilAndPotting:
        "Use an extremely fast-draining, predominantly mineral mix, such as pumice, grit and lava rock with a small amount of mineral soil. A shallow, wide terracotta pot with drainage holes suits its spreading growth.",
      temperature:
        "Prefers cool to moderate growing conditions, approximately 10–22°C. Very cold-hardy when dry and properly acclimated, but prolonged wetness and high humidity can be problematic.",
      fertilizer:
        "Requires little fertilizer. If necessary, apply a very dilute, low-nitrogen cactus fertilizer sparingly during active growth."
    }
  },
  {
    id: "maihuenia-poeppigii",
    commonName: "Maihuen",
    scientificName: "Maihuenia poeppigii",
    subfamily: "Maihuenioideae",
    growthHabitAndSize:
      "A very slow-growing, compact cushion-forming cactus with a somewhat looser and more open structure than Maihuenia patagonica. Typically grows around 3–8 cm tall and spreads approximately 30–60 cm.",
    hardinessAndNativeRange:
      "Native to the mountainous and steppe regions of southern Argentina and Chile. Adapted to exposed, rocky environments and cold conditions, with excellent drainage essential for cultivation.",
    specialTraits:
      "Features small, fleshy, cylindrical green leaves and generally longer, softer-looking spines. Produces vivid golden-yellow flowers in spring. Its growth forms a low, spreading cushion.",
    care: {
      sunlight:
        "Provide full sun, ideally around 5 or more hours daily. A bright south- or east-facing window may work indoors, depending on the local climate and light intensity.",
      watering:
        "Water thoroughly during active growth, then allow the soil to dry completely. Keep much drier during winter. Wrinkling may indicate thirst, while a soft or darkened base can indicate rot.",
      soilAndPotting:
        "Use a highly mineral, fast-draining mix containing grit, pumice or similar materials. A shallow terracotta pot with drainage holes helps prevent waterlogged roots.",
      temperature:
        "Prefers cool to moderate conditions, approximately 10–24°C during growth. It is cold-tolerant when dry and acclimated, but prolonged tropical humidity can make cultivation difficult.",
      fertilizer:
        "Requires little fertilizer because it is adapted to nutrient-poor environments. Avoid frequent feeding or excessive nitrogen."
    }
  },
  
  {
    id: "pereskia-aculeata",
    commonName: "Barbados Gooseberry",
    scientificName: "Pereskia aculeata",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "A climbing or vining shrub with long, thorny stems that can reach several metres in length. Fast-growing and often benefits from support.",
    hardinessAndNativeRange:
      "Native to tropical America, including parts of Central America, the Caribbean, and South America. It has also become naturalised in several other regions.",
    specialTraits:
      "Has glossy oval leaves and paired spines at the nodes. Produces fragrant cream to pale-yellow flowers and orange fruits. Its leaves are traditionally eaten as a nutritious vegetable in Brazil.",
    care: {
      sunlight:
        "Full sun to light shade. Provide several hours of sunlight daily, with protection from intense afternoon sun when necessary.",
      watering:
        "Water regularly during active growth. Allow the upper layer of soil to dry slightly between waterings, and reduce watering in cooler conditions.",
      soilAndPotting:
        "Use fertile, well-draining soil containing organic matter and mineral grit. Provide a sturdy support, trellis, or suitable climbing structure.",
      temperature:
        "Prefers warm conditions and does not tolerate prolonged frost. Protect from cold temperatures.",
      fertilizer:
        "Apply a balanced, diluted fertilizer during active growth according to its label."
    }
  },
  {
    id: "pereskia-grandifolia",
    commonName: "Rose Cactus",
    scientificName: "Pereskia grandifolia",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "An upright shrub or small tree with a rounded crown, commonly growing several metres tall under favourable conditions.",
    hardinessAndNativeRange:
      "Native to eastern Brazil, particularly areas associated with the Atlantic Forest. Best suited to warm climates.",
    specialTraits:
      "Features large, fleshy oval leaves and woody stems as it matures. Produces showy pink to rose-purple flowers and pear-shaped fruits.",
    care: {
      sunlight:
        "Provide full sun to partial sun. Strong light encourages healthy growth and flowering.",
      watering:
        "Water regularly during active growth, allowing the soil surface to dry between waterings. Reduce watering during cooler periods.",
      soilAndPotting:
        "Use fertile, well-draining soil with organic matter and mineral grit. Choose a spacious pot with drainage holes.",
      temperature:
        "Prefers warm temperatures and should be protected from frost and prolonged cold.",
      fertilizer:
        "Use a diluted balanced fertilizer during active growth. Avoid excessive feeding."
    }
  },
  {
    id: "pereskia-bahiensis",
    commonName: "Bahia Leaf Cactus",
    scientificName: "Pereskia bahiensis",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "An upright shrub or small tree with branching, spiny stems. Growth and mature size depend on environmental conditions.",
    hardinessAndNativeRange:
      "Associated with eastern Brazil, especially Bahia and neighbouring regions. Adapted to warm environments and seasonally dry habitats.",
    specialTraits:
      "Has leafy, spiny branches and produces pale flowers. Its appearance reflects the leafy growth form characteristic of Pereskia.",
    care: {
      sunlight:
        "Provide bright light and several hours of direct sunlight when the plant is acclimated.",
      watering:
        "Water moderately during active growth and allow the growing medium to drain well. Reduce watering in cooler conditions.",
      soilAndPotting:
        "Use a well-draining mixture of mineral grit and fertile soil. Avoid waterlogged roots.",
      temperature:
        "Prefers warm conditions and protection from frost.",
      fertilizer:
        "Apply a diluted balanced fertilizer sparingly during active growth."
    }
  },
  {
    id: "pereskia-sacharosa",
    commonName: "Chaco Leaf Cactus",
    scientificName: "Pereskia sacharosa",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "A spreading, woody shrub with armed branches. Its mature height and spread vary with growing conditions.",
    hardinessAndNativeRange:
      "Reported from parts of Bolivia, Paraguay, and northern Argentina, including seasonally dry regions.",
    specialTraits:
      "May develop grey-green foliage and strong paired spines. Its flowers are described as white to pale pink. Handle carefully because of the sharp spines.",
    care: {
      sunlight:
        "Provide full sun or very bright light.",
      watering:
        "Water during active growth, then allow the soil to dry partially. Avoid prolonged moisture around the roots.",
      soilAndPotting:
        "Use a mineral-rich, sharply draining soil mixture in a pot with drainage holes.",
      temperature:
        "Prefers warm growing conditions. Cold tolerance depends on the plant's acclimation and growing environment.",
      fertilizer:
        "Use a diluted balanced fertilizer occasionally during active growth."
    }
  },
  {
    id: "pereskia-nemorosa",
    commonName: "Forest Leaf Cactus",
    scientificName: "Pereskia nemorosa",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "Described as a climbing or scrambling shrub with leafy stems. Its growth form and mature size depend on habitat and cultivation.",
    hardinessAndNativeRange:
      "Reported from parts of southern South America. Verify the current accepted taxonomic placement and distribution before publishing detailed range claims.",
    specialTraits:
      "A leafy cactus form associated with slender stems and relatively delicate foliage. Species-specific flowering and fruit characteristics should be confirmed from a reliable botanical source.",
    care: {
      sunlight:
        "Provide bright light or partial sun, adjusting exposure to the plant's response.",
      watering:
        "Water regularly during active growth while maintaining good drainage. Avoid allowing the roots to remain waterlogged.",
      soilAndPotting:
        "Use a fertile, well-draining growing medium containing both organic matter and mineral grit.",
      temperature:
        "Prefers suitable frost-free conditions until its specific cold tolerance is confirmed.",
      fertilizer:
        "Apply diluted balanced fertilizer sparingly during active growth."
    }
  },
  {
    id: "pereskia-diaz-romeroana",
    commonName: "Bolivian Tree Cactus",
    scientificName: "Pereskia diaz-romeroana",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "Reported as a small tree with branching stems. Growth rate and mature size may vary, particularly in cultivation.",
    hardinessAndNativeRange:
      "Reported from Bolivia. Confirm the accepted name and distribution with a current botanical reference.",
    specialTraits:
      "A less commonly encountered leafy cactus name in cultivation. Verify its accepted classification and diagnostic features before presenting detailed species-specific claims.",
    care: {
      sunlight:
        "Provide bright light, with direct sun introduced gradually.",
      watering:
        "Water moderately during active growth and allow excess water to drain freely.",
      soilAndPotting:
        "Use a well-draining mineral and organic soil mixture suitable for leafy cacti.",
      temperature:
        "Protect from frost and prolonged cold until species-specific tolerances are established.",
      fertilizer:
        "Use a diluted balanced fertilizer sparingly during active growth."
    }
  },
  {
    id: "pereskia-horrida",
    commonName: "Peruvian Leaf Cactus",
    scientificName: "Pereskia horrida",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "Described as a strongly armed, woody shrub or small tree. Its size varies with habitat and growing conditions.",
    hardinessAndNativeRange:
      "Associated with Peru and parts of northwestern South America. Confirm the current accepted taxonomy and distribution.",
    specialTraits:
      "Known in horticultural descriptions for prominent spines and leafy stems. Handle with care when pruning or repotting.",
    care: {
      sunlight:
        "Provide bright light to full sun, acclimating the plant gradually.",
      watering:
        "Allow the growing medium to dry partially between waterings. Avoid overwatering, especially during cool weather.",
      soilAndPotting:
        "Use a gritty, well-draining mixture with mineral components and a suitable amount of organic matter.",
      temperature:
        "Protect from frost and prolonged cold.",
      fertilizer:
        "Use little fertilizer; apply a diluted balanced product only when needed during active growth."
    }
  },
  {
    id: "pereskia-weberiana",
    commonName: "Weber's Leaf Cactus",
    scientificName: "Pereskia weberiana",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "Reported as a compact, branching shrub. Mature size and growth habit should be confirmed against a current botanical reference.",
    hardinessAndNativeRange:
      "Reported from Bolivia, including dry Andean valleys. Verify its current accepted name and native distribution.",
    specialTraits:
      "Described as a leafy cactus with comparatively small leaves. Detailed flower characteristics and its accepted taxonomic status need verification.",
    care: {
      sunlight:
        "Provide bright light to full sun, introducing stronger sunlight gradually.",
      watering:
        "Water during active growth and allow the substrate to dry partially between waterings.",
      soilAndPotting:
        "Use well-draining soil containing mineral grit and some organic matter.",
      temperature:
        "Prefer warm conditions and protect from frost until its specific tolerances are verified.",
      fertilizer:
        "Apply a diluted balanced fertilizer occasionally during active growth."
    }
  },
  {
    id: "pereskia-stenantha",
    commonName: "Bahia Short-Flowered Cactus",
    scientificName: "Pereskia stenantha",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "Reported as an upright, branching shrub. Mature dimensions depend on the species' verified identity and growing conditions.",
    hardinessAndNativeRange:
      "Reported from eastern Brazil. Confirm the currently accepted taxonomy and distribution before publishing a detailed range.",
    specialTraits:
      "A name associated with leafy cactus references. Verify its accepted status and distinctive flower characteristics using a botanical source.",
    care: {
      sunlight:
        "Provide bright light and suitable direct sun after gradual acclimation.",
      watering:
        "Water moderately during active growth and ensure the substrate drains quickly.",
      soilAndPotting:
        "Use a well-draining mix containing mineral grit and fertile soil.",
      temperature:
        "Protect from frost and prolonged cold.",
      fertilizer:
        "Apply a diluted balanced fertilizer sparingly during active growth."
    }
  },
  {
    id: "pereskia-violacea",
    commonName: "Violet-Flowered Leaf Cactus",
    scientificName: "Pereskia violacea",
    subfamily: "Pereskioideae",
    growthHabitAndSize:
      "Described as a branching shrub with leafy stems. Mature size and growth habit should be confirmed against a reliable botanical reference.",
    hardinessAndNativeRange:
      "Reported from eastern Brazil. Confirm the current accepted name and distribution before publishing more specific claims.",
    specialTraits:
      "Associated with descriptions of violet or lilac flowers. Confirm the accepted taxonomic status and flower colour from a reliable botanical reference.",
    care: {
      sunlight:
        "Provide bright light to full sun, acclimating the plant gradually.",
      watering:
        "Water regularly during active growth, allowing excess water to drain freely. Reduce watering in cooler conditions.",
      soilAndPotting:
        "Use fertile, well-draining soil containing both organic matter and mineral grit.",
      temperature:
        "Prefers warm conditions and should be protected from frost.",
      fertilizer:
        "Use a diluted balanced fertilizer during active growth, avoiding excessive feeding."
    }
  },
  {
    id: 'leuenbergeria-bleo',
    commonName: 'Wax Rose',
    scientificName: 'Leuenbergeria bleo',
    subfamily: 'Leuenbergerioideae',
    growthHabitAndSize:
      'An upright woody shrub or small tree growing approximately 2–4 metres tall, with glossy green leaves and orange-red, rose-like flowers that can appear throughout the year.',
    hardinessAndNativeRange:
      'Native to Panama, Colombia, and Venezuela, where it grows in tropical forests and dry regions. Suitable for warm climates corresponding to USDA zones 10–12.',
    specialTraits:
      'Has large glossy leaves with wavy margins, dense black spines, orange-red flowers, and yellow fleshy berries. The sharp spines require careful handling.',
    care: {
      sunlight: 'Full sun to bright indirect light, ideally receiving at least 4 hours of sunlight.',
      watering: 'Keep the soil evenly moist during active growth, allowing the top 2–3 cm to dry. Reduce watering in winter without allowing the plant to shrivel.',
      soilAndPotting: 'Use a fertile, well-draining mixture of approximately 40% grit and 60% loam or organic material. A terracotta pot with adequate drainage is suitable.',
      temperature: 'Prefers approximately 22–30°C. Protect from temperatures below 10°C.',
      fertilizer: 'Apply a balanced 10-10-10 fertilizer every 4–6 weeks during spring and summer.'
    }
  },
  {
    id: 'leuenbergeria-guamacho',
    commonName: 'Guamacho',
    scientificName: 'Leuenbergeria guamacho',
    subfamily: 'Leuenbergerioideae',
    growthHabitAndSize:
      'A small tree with a rounded crown, typically growing approximately 3–6 metres tall.',
    hardinessAndNativeRange:
      'Native to Venezuela and Colombia, particularly dry forests and the Orinoco basin. Associated with warm climates corresponding to USDA zones 10–12.',
    specialTraits:
      'Features greyish bark, small thick leaves, bright yellow spring flowers, and yellow berries. It is adapted to drought conditions.',
    care: {
      sunlight: 'Full sun, ideally at least 5 hours daily.',
      watering: 'Water moderately during active growth. Reduce watering during winter; the plant is drought-tolerant once established.',
      soilAndPotting: 'Use a sharply draining mixture of approximately 50% grit and 50% loam.',
      temperature: 'Keep temperatures at or above approximately 10°C.',
      fertilizer: 'Apply a balanced 10-10-10 fertilizer approximately every 6 weeks during active growth.'
    }
  },
  {
    id: 'leuenbergeria-aureiflora',
    commonName: 'Golden Rose Cactus',
    scientificName: 'Leuenbergeria aureiflora',
    subfamily: 'Leuenbergerioideae',
    growthHabitAndSize:
      'A woody shrub typically growing approximately 2–4 metres tall.',
    hardinessAndNativeRange:
      'Reported from eastern Brazil, including the Minas Gerais and Bahia regions. Grows in warm climates corresponding to USDA zones 10–12.',
    specialTraits:
      'Known for bright green foliage and golden-yellow flowers. It is uncommon in cultivation.',
    care: {
      sunlight: 'Full sun promotes healthy growth and flowering.',
      watering: 'Water moderately during active growth and reduce watering in winter.',
      soilAndPotting: 'Use a well-draining mixture of approximately 50% grit and 50% loam.',
      temperature: 'Protect from temperatures below approximately 10°C.',
      fertilizer: 'Use a suitable flowering-plant fertilizer, such as 7-9-5, approximately every 4 weeks during active growth.'
    }
  },
  {
    id: 'leuenbergeria-lychnidiflora',
    commonName: 'Wax Rose',
    scientificName: 'Leuenbergeria lychnidiflora',
    subfamily: 'Leuenbergerioideae',
    growthHabitAndSize:
      'A large woody shrub or small tree growing approximately 3–5 metres tall.',
    hardinessAndNativeRange:
      'Native to Mexico and Central America, where it occurs in dry tropical forests. Associated with USDA zones 10–12.',
    specialTraits:
      'Has grey-green leaves, long formidable spines, and orange-pink funnel-shaped flowers. Handle carefully because of its sharp spines.',
    care: {
      sunlight: 'Full sun, ideally at least 5 hours daily.',
      watering: 'Water moderately during active growth and reduce watering during winter.',
      soilAndPotting: 'Use a fertile, well-draining mixture containing approximately 50% grit and 50% loam.',
      temperature: 'Protect from temperatures below approximately 10°C.',
      fertilizer: 'Apply a balanced 10-10-10 fertilizer every 4–6 weeks during active growth.'
    }
  },
  {
    id: 'leuenbergeria-marcanoi',
    commonName: "Marcano's Cactus",
    scientificName: 'Leuenbergeria marcanoi',
    subfamily: 'Leuenbergerioideae',
    growthHabitAndSize:
      'A slow-growing, relatively rare shrub typically reaching approximately 1–3 metres tall.',
    hardinessAndNativeRange:
      'Endemic to Hispaniola, particularly the Dominican Republic. Associated with warm climates corresponding to USDA zones 10–12.',
    specialTraits:
      'Has relatively small leaves and dense spines, with pale pink or white flowers. Its rarity makes conservation important.',
    care: {
      sunlight: 'Full sun.',
      watering: 'Water moderately during active growth and reduce watering in winter.',
      soilAndPotting: 'Use a well-draining mixture containing approximately 50% grit and 50% loam. A limestone-rich mix may be suitable.',
      temperature: 'Protect from temperatures below approximately 10°C.',
      fertilizer: 'Use diluted balanced fertilizer sparingly during active growth.'
    }
  },
  {
    id: 'leuenbergeria-portulacifolia',
    commonName: 'Portulaca-Leaf Cactus',
    scientificName: 'Leuenbergeria portulacifolia',
    subfamily: 'Leuenbergerioideae',
    growthHabitAndSize:
      'A relatively slow-growing woody shrub typically reaching approximately 2–4 metres tall.',
    hardinessAndNativeRange:
      'Reported from Haiti on Hispaniola. Associated with warm climates corresponding to USDA zones 10–12.',
    specialTraits:
      'Distinguished by fleshy, rounded leaves resembling purslane and pink or rose-coloured flowers. It is little known in cultivation.',
    care: {
      sunlight: 'Full sun.',
      watering: 'Water moderately during active growth, allowing the soil to drain well. The plant tolerates periods of drought.',
      soilAndPotting: 'Use a well-draining mixture of approximately 50% grit and 50% loam.',
      temperature: 'Protect from temperatures below approximately 10°C.',
      fertilizer: 'Apply a balanced 10-10-10 fertilizer approximately every 6 weeks during active growth.'
    }
  },
  {
    id: 'leuenbergeria-quisqueyana',
    commonName: 'Bayahíbe Rose',
    scientificName: 'Leuenbergeria quisqueyana',
    subfamily: 'Leuenbergerioideae',
    growthHabitAndSize:
      'A very slow-growing shrub or small tree typically reaching approximately 2–5 metres tall.',
    hardinessAndNativeRange:
      'Endemic to the Dominican Republic, especially the Bayahíbe area. It is critically endangered and requires conservation.',
    specialTraits:
      'Known for large pale pink, rose-like flowers and thick glossy leaves. It is an important national symbol and a protected species.',
    care: {
      sunlight: 'Full sun, ideally at least 5 hours daily.',
      watering: 'Water moderately during active growth and avoid allowing the root zone to become completely dry. Reduce watering slightly in winter.',
      soilAndPotting: 'Use a well-draining mixture containing approximately 50% grit and 50% loam. Limestone-rich soil may be suitable.',
      temperature: 'Protect from temperatures below approximately 10°C.',
      fertilizer: 'Use diluted flowering-plant fertilizer sparingly during active growth.'
    }
  },
  {
    id: 'leuenbergeria-zinniiflora',
    commonName: 'Zinnia-Flowered Cactus',
    scientificName: 'Leuenbergeria zinniiflora',
    subfamily: 'Leuenbergerioideae',
    growthHabitAndSize:
      'A woody shrub typically growing approximately 2–4 metres tall.',
    hardinessAndNativeRange:
      'Reported from Cuba, particularly dry coastal regions. Associated with warm climates corresponding to USDA zones 10–12.',
    specialTraits:
      'Features bright green foliage and showy pink or red flowers resembling zinnias.',
    care: {
      sunlight: 'Full sun.',
      watering: 'Water moderately during active growth and reduce watering in winter.',
      soilAndPotting: 'Use a well-draining mixture containing approximately 50% grit and 50% loam. Limestone-rich soil may be suitable.',
      temperature: 'Protect from temperatures below approximately 10°C.',
      fertilizer: 'Apply a balanced 10-10-10 fertilizer approximately every 6 weeks during active growth.'
    }
  },



  
  {
    id: 'trichocereus-grandiflorus',
    commonName: 'Red Torch Cactus',
    scientificName: 'Trichocereus grandiflorus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A clumping columnar cactus with ribbed green stems, generally growing low and spreading as offsets develop.',
    hardinessAndNativeRange: 'Native to Argentina. Protect from frost and prolonged cold, and verify local hardiness before outdoor planting.',
    specialTraits: 'Known for large, vivid red to orange funnel-shaped flowers.',
    care: {
      sunlight: 'Provide bright light with several hours of gentle to direct sun after gradual acclimation.',
      watering: 'Water thoroughly during active growth once the growing medium has dried; reduce watering in cool weather.',
      soilAndPotting: 'Use a gritty, fast-draining cactus mix and a pot with drainage holes.',
      temperature: 'Prefer warm growing conditions; protect from frost.',
      fertilizer: 'Apply diluted cactus fertilizer during active growth according to the product label.'
    }
  },
  {
    id: 'trichocereus-huascha',
    commonName: 'Golden Torch Cactus',
    scientificName: 'Trichocereus huascha',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A branching, shrubby cactus with upright ribbed stems that may form dense clumps.',
    hardinessAndNativeRange: 'Native to Argentina. Needs excellent drainage and protection from prolonged freezing conditions.',
    specialTraits: 'Produces bright yellow, orange, or red flowers depending on the form.',
    care: {
      sunlight: 'Grow in full sun to bright light, acclimating gradually.',
      watering: 'Water deeply when the soil has dried during active growth; water less in winter.',
      soilAndPotting: 'Use a mineral-rich, well-draining cactus substrate.',
      temperature: 'Prefers warm conditions; protect from hard frost.',
      fertilizer: 'Feed lightly with diluted cactus fertilizer during the growing season.'
    }
  },
  {
    id: 'trichocereus-schickendantzii',
    commonName: 'Schickendantz Cactus',
    scientificName: 'Trichocereus schickendantzii',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A clustering cactus with stout, ribbed cylindrical stems.',
    hardinessAndNativeRange: 'Native to northwestern Argentina. Avoid prolonged cold and waterlogged soil.',
    specialTraits: 'Produces large, pale flowers that open around the flowering season.',
    care: {
      sunlight: 'Provide bright light and several hours of sun where conditions allow.',
      watering: 'Allow the substrate to dry between waterings.',
      soilAndPotting: 'Use a porous cactus mix with excellent drainage.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Use a diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinopsis-aurea',
    commonName: 'Golden Echinopsis',
    scientificName: 'Echinopsis aurea',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small, globular to short-columnar cactus that may form offsets.',
    hardinessAndNativeRange: 'Native to Argentina. Provide a dry winter rest and protect from excessive cold and moisture.',
    specialTraits: 'Known for yellow flowers and a compact body with prominent spines.',
    care: {
      sunlight: 'Provide bright light and some direct sun after acclimation.',
      watering: 'Water during active growth after the mix dries thoroughly.',
      soilAndPotting: 'Use a gritty cactus mix in a pot with drainage.',
      temperature: 'Prefer warm growing conditions; protect from frost.',
      fertilizer: 'Feed sparingly with diluted cactus fertilizer during growth.'
    }
  },
  {
    id: 'echinopsis-calochlora',
    commonName: 'Green-Flowered Echinopsis',
    scientificName: 'Echinopsis calochlora',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small globular cactus that can produce offsets and form a cluster.',
    hardinessAndNativeRange: 'Native to Brazil. Protect from frost and prolonged wet conditions.',
    specialTraits: 'Recognized for flowers that may have greenish tones.',
    care: {
      sunlight: 'Provide bright filtered light or gentle direct sun after acclimation.',
      watering: 'Water thoroughly when the soil has dried during active growth.',
      soilAndPotting: 'Use a porous, fast-draining cactus substrate.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Apply diluted cactus fertilizer occasionally during active growth.'
    }
  },
  {
    id: 'echinopsis-subdenudata',
    commonName: 'Domino Cactus',
    scientificName: 'Echinopsis subdenudata',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small, nearly spherical cactus with rounded ribs and sparse short spines.',
    hardinessAndNativeRange: 'Native to South America, especially Bolivia and Paraguay. Protect from freezing conditions.',
    specialTraits: 'Often has small white woolly areoles and large fragrant white flowers.',
    care: {
      sunlight: 'Provide bright light with gentle direct sun.',
      watering: 'Water when the substrate dries during the growing season; reduce in winter.',
      soilAndPotting: 'Use a well-draining cactus mix and a pot with drainage holes.',
      temperature: 'Prefer warm conditions and avoid frost.',
      fertilizer: 'Use diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinopsis-bruchii',
    commonName: 'Bruch Cactus',
    scientificName: 'Echinopsis bruchii',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A globular to short-columnar cactus with strong ribs and dense spines.',
    hardinessAndNativeRange: 'Native to Argentina. Needs drainage and protection from prolonged cold and dampness.',
    specialTraits: 'Mature plants can produce striking red flowers.',
    care: {
      sunlight: 'Provide bright light and direct sun after acclimation.',
      watering: 'Water during active growth after the mix dries.',
      soilAndPotting: 'Use a gritty, mineral-rich cactus mix.',
      temperature: 'Protect from hard frost, especially when the soil is wet.',
      fertilizer: 'Feed lightly with diluted cactus fertilizer during growth.'
    }
  },
  {
    id: 'echinopsis-formosa',
    commonName: 'Formosa Barrel Cactus',
    scientificName: 'Echinopsis formosa',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A globular to barrel-shaped cactus that may become more columnar with age.',
    hardinessAndNativeRange: 'Native to the Andes of Argentina and neighboring regions. Requires excellent drainage.',
    specialTraits: 'Has prominent ribs and spines, with yellow flowers reported in cultivation.',
    care: {
      sunlight: 'Provide strong light and sun after gradual acclimation.',
      watering: 'Water thoroughly only after the growing medium dries.',
      soilAndPotting: 'Use a gritty mineral cactus mix.',
      temperature: 'Keep in warm conditions and protect from frost.',
      fertilizer: 'Fertilize sparingly during active growth.'
    }
  },
  {
    id: 'armatocereus-laetus',
    commonName: 'Laetus Tree Cactus',
    scientificName: 'Armatocereus laetus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A branching columnar cactus that develops sturdy upright stems.',
    hardinessAndNativeRange: 'Associated with Peru. Needs warm conditions and excellent drainage.',
    specialTraits: 'Has ribbed stems with spiny areoles and nocturnal cactus flowers.',
    care: {
      sunlight: 'Provide full sun or very bright light.',
      watering: 'Water during active growth and allow the soil to dry between waterings.',
      soilAndPotting: 'Use a mineral, fast-draining cactus substrate.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Use diluted cactus fertilizer during the growing season.'
    }
  },
  {
    id: 'armatocereus-matucanensis',
    commonName: 'Matucana Tree Cactus',
    scientificName: 'Armatocereus matucanensis',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A tall branching cactus with ribbed cylindrical stems.',
    hardinessAndNativeRange: 'Native to Peru. Avoid frost and prolonged dampness.',
    specialTraits: 'Its tree-like habit and stout spines distinguish it from many smaller cacti.',
    care: {
      sunlight: 'Provide full sun to bright light.',
      watering: 'Allow the substrate to dry thoroughly between waterings.',
      soilAndPotting: 'Use a well-draining mineral cactus mix.',
      temperature: 'Prefer warm temperatures; protect from frost.',
      fertilizer: 'Apply diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'armatocereus-rauhii',
    commonName: 'Rauhs Tree Cactus',
    scientificName: 'Armatocereus rauhii',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A columnar, branching cactus with ribbed stems.',
    hardinessAndNativeRange: 'Associated with Peru. Its exact hardiness should be checked against the local form.',
    specialTraits: 'A less commonly cultivated member of the tree-cactus genus Armatocereus.',
    care: {
      sunlight: 'Provide bright light and ample sun.',
      watering: 'Water when the substrate is dry, reducing watering in cool weather.',
      soilAndPotting: 'Use a porous cactus mix with excellent drainage.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'pilosocereus-leucocephalus',
    commonName: 'White-Crowned Pilosocereus',
    scientificName: 'Pilosocereus leucocephalus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A branching columnar cactus that can develop tall, tree-like stems.',
    hardinessAndNativeRange: 'Native to Mexico and parts of Central America. Sensitive to frost.',
    specialTraits: 'Mature stems may develop woolly, bristly flowering zones near the tips.',
    care: {
      sunlight: 'Provide full sun to very bright light.',
      watering: 'Water during warm active growth after the soil dries.',
      soilAndPotting: 'Use a gritty, well-draining cactus substrate.',
      temperature: 'Keep warm and protect from cold.',
      fertilizer: 'Apply diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'stenocereus-gummosus',
    commonName: 'Sour Pitaya',
    scientificName: 'Stenocereus gummosus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A branching cactus with sprawling or upright ribbed stems.',
    hardinessAndNativeRange: 'Native to the Baja California region of Mexico. Adapted to dry environments.',
    specialTraits: 'Produces edible fruits that are traditionally known as sour pitaya.',
    care: {
      sunlight: 'Provide full sun and good airflow.',
      watering: 'Water deeply during active growth after the substrate dries.',
      soilAndPotting: 'Use a mineral-rich, fast-draining cactus mix.',
      temperature: 'Protect from frost and prolonged cold.',
      fertilizer: 'Feed lightly during the growing season.'
    }
  },
  {
    id: 'stenocereus-queretaroensis',
    commonName: 'Queretaro Organ Pipe Cactus',
    scientificName: 'Stenocereus queretaroensis',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A tall, branching columnar cactus with multiple upright stems.',
    hardinessAndNativeRange: 'Native to Mexico. Best suited to warm, dry conditions.',
    specialTraits: 'Produces edible fruits and is cultivated in parts of Mexico.',
    care: {
      sunlight: 'Provide full sun or strong direct light.',
      watering: 'Water during warm growth periods and allow the soil to dry fully.',
      soilAndPotting: 'Use a gritty cactus mix and excellent drainage.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Use diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'lemaireocereus-marginatus',
    commonName: 'Mexican Fence Post Cactus',
    scientificName: 'Lemaireocereus marginatus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A tall, upright columnar cactus that branches with age.',
    hardinessAndNativeRange: 'Native to Mexico. Requires warm conditions and well-drained soil.',
    specialTraits: 'Green columnar stems often show a distinctive line of spines along each rib margin.',
    care: {
      sunlight: 'Provide full sun for strong, healthy growth.',
      watering: 'Water thoroughly when the soil is dry; reduce in cool weather.',
      soilAndPotting: 'Use a gritty, well-draining cactus mix.',
      temperature: 'Protect from frost.',
      fertilizer: 'Feed lightly with cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinocereus-viridiflorus',
    commonName: 'Green-Flowered Hedgehog Cactus',
    scientificName: 'Echinocereus viridiflorus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small, globular to short cylindrical cactus, often growing in clusters.',
    hardinessAndNativeRange: 'Native to the central United States and northern Mexico. Cold tolerance varies by population and growing conditions.',
    specialTraits: 'Known for greenish to yellow-green flowers.',
    care: {
      sunlight: 'Provide bright light and direct sun after acclimation.',
      watering: 'Water during active growth and let the soil dry between waterings.',
      soilAndPotting: 'Use a mineral-rich, sharply draining cactus mix.',
      temperature: 'Check the hardiness of the specific population; keep container plants dry in cold weather.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-reichenbachii',
    commonName: 'Lace Hedgehog Cactus',
    scientificName: 'Echinocereus reichenbachii',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus with dense, often comb-like spines.',
    hardinessAndNativeRange: 'Native to the south-central United States and northern Mexico.',
    specialTraits: 'Produces large pink to purple flowers and attractive spine patterns.',
    care: {
      sunlight: 'Provide full sun or very bright light.',
      watering: 'Water during the growing season after the soil dries.',
      soilAndPotting: 'Use a gritty mineral cactus mix with excellent drainage.',
      temperature: 'Some populations tolerate cold, but keep potted plants dry and protect them from severe frost.',
      fertilizer: 'Use diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinocereus-pectinatus',
    commonName: 'Rainbow Hedgehog Cactus',
    scientificName: 'Echinocereus pectinatus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus with closely arranged comb-like spines.',
    hardinessAndNativeRange: 'Native to the southwestern United States and Mexico.',
    specialTraits: 'Its colorful, banded spines and large flowers make it a popular ornamental cactus.',
    care: {
      sunlight: 'Provide strong light and direct sun after acclimation.',
      watering: 'Allow the substrate to dry fully between waterings.',
      soilAndPotting: 'Use a mineral cactus mix in a pot with drainage.',
      temperature: 'Protect from frost and excessive winter moisture.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-triglochidiatus',
    commonName: 'Claret Cup Cactus',
    scientificName: 'Echinocereus triglochidiatus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A clustering cylindrical cactus that can form large colonies.',
    hardinessAndNativeRange: 'Native to the southwestern United States and northern Mexico; hardiness varies among forms.',
    specialTraits: 'Known for vivid scarlet to orange-red flowers.',
    care: {
      sunlight: 'Provide full sun to bright light.',
      watering: 'Water during active growth and allow the soil to dry between waterings.',
      soilAndPotting: 'Use a gritty, fast-draining cactus substrate.',
      temperature: 'Check the hardiness of the local form; keep containers well drained in winter.',
      fertilizer: 'Apply diluted cactus fertilizer during growth.'
    }
  },
  {
    id: 'echinocereus-coccineus',
    commonName: 'Scarlet Hedgehog Cactus',
    scientificName: 'Echinocereus coccineus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A clustering cactus with upright cylindrical stems.',
    hardinessAndNativeRange: 'Native to the southwestern United States and northern Mexico.',
    specialTraits: 'Produces bright red flowers that attract pollinators, including hummingbirds.',
    care: {
      sunlight: 'Provide full sun or strong light.',
      watering: 'Water when the growing medium has dried during active growth.',
      soilAndPotting: 'Use a mineral-rich, well-draining mix.',
      temperature: 'Cold tolerance varies; keep the root zone dry in cold conditions.',
      fertilizer: 'Feed sparingly during active growth.'
    }
  },
  {
    id: 'echinocereus-subinermis',
    commonName: 'Yellow-Flowered Hedgehog Cactus',
    scientificName: 'Echinocereus subinermis',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A low-growing globular to short cylindrical cactus, sometimes forming offsets.',
    hardinessAndNativeRange: 'Native to northwestern Mexico. Sensitive to frost and excess moisture.',
    specialTraits: 'Has relatively few short spines and produces large yellow flowers.',
    care: {
      sunlight: 'Provide bright light and some direct sun after acclimation.',
      watering: 'Water during active growth only after the substrate dries.',
      soilAndPotting: 'Use a fast-draining cactus mix.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Apply diluted cactus fertilizer during the growing season.'
    }
  },
  {
    id: 'echinocereus-brandegeei',
    commonName: 'Brandegee Hedgehog Cactus',
    scientificName: 'Echinocereus brandegeei',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus with spiny stems.',
    hardinessAndNativeRange: 'Associated with the Baja California region of Mexico; verify the accepted taxonomic treatment and range before publication.',
    specialTraits: 'A less commonly encountered Echinocereus species in cultivation.',
    care: {
      sunlight: 'Provide bright light and gentle direct sun after acclimation.',
      watering: 'Allow the substrate to dry between waterings.',
      soilAndPotting: 'Use a mineral-rich, well-draining cactus mix.',
      temperature: 'Protect from frost and prolonged dampness.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-fendleri',
    commonName: 'Fendler Hedgehog Cactus',
    scientificName: 'Echinocereus fendleri',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus that may grow singly or in clusters.',
    hardinessAndNativeRange: 'Native to the southwestern United States and northern Mexico.',
    specialTraits: 'Produces large pink to magenta flowers.',
    care: {
      sunlight: 'Provide full sun to bright light.',
      watering: 'Water during active growth after the soil dries.',
      soilAndPotting: 'Use a gritty cactus mix with excellent drainage.',
      temperature: 'Hardiness depends on the population; protect container plants from severe frost and winter wet.',
      fertilizer: 'Use diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinocereus-laui',
    commonName: 'Lau Hedgehog Cactus',
    scientificName: 'Echinocereus laui',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small clustering cactus with cylindrical stems and dense spines.',
    hardinessAndNativeRange: 'Native to Mexico. Requires careful watering and protection from frost.',
    specialTraits: 'Known for dense spination and colorful flowers.',
    care: {
      sunlight: 'Provide bright light, avoiding abrupt exposure to intense sun.',
      watering: 'Water sparingly when the substrate has dried completely.',
      soilAndPotting: 'Use a highly porous mineral cactus mix.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Feed lightly during the growing season.'
    }
  },
  {
    id: 'echinocereus-schmollii',
    commonName: 'Mexican Climbing Hedgehog Cactus',
    scientificName: 'Echinocereus schmollii',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A slender-stemmed cactus that may sprawl or form a loose cluster.',
    hardinessAndNativeRange: 'Native to Mexico. Protect from frost and prolonged wet conditions.',
    specialTraits: 'Noted for its slender stems and distinctive pink flowers.',
    care: {
      sunlight: 'Provide bright filtered light and gentle sun after acclimation.',
      watering: 'Water when the substrate dries during active growth.',
      soilAndPotting: 'Use a well-draining cactus mix.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Use diluted cactus fertilizer sparingly during growth.'
    }
  },
  {
    id: 'echinocereus-pentalophus',
    commonName: 'Lady Finger Cactus',
    scientificName: 'Echinocereus pentalophus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A low-growing cactus with long, slender stems that spread along the ground.',
    hardinessAndNativeRange: 'Native to southern Texas and northeastern Mexico.',
    specialTraits: 'Produces large pink flowers relative to its stem size.',
    care: {
      sunlight: 'Provide bright light and some direct sun after acclimation.',
      watering: 'Water during active growth after the substrate dries.',
      soilAndPotting: 'Use a gritty, fast-draining cactus mix.',
      temperature: 'Protect from frost and cold, wet soil.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-stolonifer',
    commonName: 'Stoloniferous Hedgehog Cactus',
    scientificName: 'Echinocereus stolonifer',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A low-growing cactus that can spread through offsets or stolon-like stems.',
    hardinessAndNativeRange: 'Native range and accepted taxonomic status should be verified before publication.',
    specialTraits: 'Its spreading growth habit is reflected in the species name.',
    care: {
      sunlight: 'Provide bright light and moderate direct sun after acclimation.',
      watering: 'Allow the substrate to dry between waterings.',
      soilAndPotting: 'Use a porous cactus mix with drainage holes.',
      temperature: 'Protect from frost until species-specific tolerance is verified.',
      fertilizer: 'Apply diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'wilcoxia-poselgeri',
    commonName: 'Queen of the Night Cactus',
    scientificName: 'Wilcoxia poselgeri',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A slender-stemmed cactus with a sprawling or climbing growth habit.',
    hardinessAndNativeRange: 'Native to southern Texas and northeastern Mexico. Protect from frost.',
    specialTraits: 'Produces large, showy flowers; this taxon is also known as Echinocereus poselgeri in some classifications.',
    care: {
      sunlight: 'Provide bright light and gentle direct sun after acclimation.',
      watering: 'Water during active growth after the soil dries.',
      soilAndPotting: 'Use a gritty, fast-draining substrate.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-enneacanthus',
    commonName: 'Strawberry Hedgehog Cactus',
    scientificName: 'Echinocereus enneacanthus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A clustering cylindrical cactus that can form broad groups of stems.',
    hardinessAndNativeRange: 'Native to southern Texas and northeastern Mexico.',
    specialTraits: 'Produces edible red fruits and colorful flowers.',
    care: {
      sunlight: 'Provide full sun to bright light.',
      watering: 'Water during active growth after the substrate dries.',
      soilAndPotting: 'Use a mineral-rich, well-draining cactus mix.',
      temperature: 'Protect from severe frost and winter wet.',
      fertilizer: 'Apply diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinocereus-dasyphyllus',
    commonName: 'Hairy Hedgehog Cactus',
    scientificName: 'Echinocereus dasyphyllus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus with dense spines or hair-like coverings.',
    hardinessAndNativeRange: 'Verify its accepted name and native range against a current botanical source before publication.',
    specialTraits: 'The species name refers to a hairy or densely covered appearance.',
    care: {
      sunlight: 'Provide bright light and gradual sun exposure.',
      watering: 'Allow the substrate to dry between waterings.',
      soilAndPotting: 'Use a porous cactus mix.',
      temperature: 'Protect from frost until specific hardiness is verified.',
      fertilizer: 'Feed sparingly during active growth.'
    }
  },
  {
    id: 'echinocereus-chloranthus',
    commonName: 'Green-Flowered Hedgehog Cactus',
    scientificName: 'Echinocereus chloranthus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus that can grow in clusters.',
    hardinessAndNativeRange: 'Native to the southwestern United States and northern Mexico.',
    specialTraits: 'Produces greenish flowers, as indicated by the species name.',
    care: {
      sunlight: 'Provide full sun or strong light.',
      watering: 'Water during active growth after the soil dries.',
      soilAndPotting: 'Use a gritty, fast-draining cactus mix.',
      temperature: 'Protect from prolonged cold and excess winter moisture.',
      fertilizer: 'Use diluted cactus fertilizer during growth.'
    }
  },
  {
    id: 'echinocereus-knippelianus',
    commonName: 'Knippel Hedgehog Cactus',
    scientificName: 'Echinocereus knippelianus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small globular cactus that may produce offsets.',
    hardinessAndNativeRange: 'Native to Mexico. Protect from frost and prolonged wet soil.',
    specialTraits: 'Has a compact body and showy flowers.',
    care: {
      sunlight: 'Provide bright light and gentle sun after acclimation.',
      watering: 'Water when the substrate dries during active growth.',
      soilAndPotting: 'Use a mineral-rich cactus mix with excellent drainage.',
      temperature: 'Keep warm and protect from frost.',
      fertilizer: 'Feed lightly during the growing season.'
    }
  },
  {
    id: 'echinocereus-pulchellus',
    commonName: 'Dwarf Hedgehog Cactus',
    scientificName: 'Echinocereus pulchellus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small, low-growing cactus with a globular body.',
    hardinessAndNativeRange: 'Native to Mexico. Exact hardiness varies by form and growing conditions.',
    specialTraits: 'Known for its compact form and disproportionately large flowers.',
    care: {
      sunlight: 'Provide bright light with gentle direct sun.',
      watering: 'Water carefully during active growth after the soil dries.',
      soilAndPotting: 'Use a highly draining mineral cactus substrate.',
      temperature: 'Protect from frost and winter moisture.',
      fertilizer: 'Apply diluted cactus fertilizer sparingly during growth.'
    }
  },
  {
    id: 'echinocereus-gentryi',
    commonName: 'Gentry Hedgehog Cactus',
    scientificName: 'Echinocereus gentryi',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A cylindrical cactus with spiny stems.',
    hardinessAndNativeRange: 'Verify its current accepted taxonomic name and native range before publication.',
    specialTraits: 'A less commonly encountered name in the Echinocereus group.',
    care: {
      sunlight: 'Provide bright light and gradual sun exposure.',
      watering: 'Let the growing medium dry between waterings.',
      soilAndPotting: 'Use a fast-draining cactus mix.',
      temperature: 'Protect from frost until its specific hardiness is verified.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-ledingii',
    commonName: 'Leding Hedgehog Cactus',
    scientificName: 'Echinocereus ledingii',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus with spiny stems.',
    hardinessAndNativeRange: 'Verify its current taxonomic treatment and geographic range before publication.',
    specialTraits: 'A rare or less commonly cultivated name within the hedgehog cactus group.',
    care: {
      sunlight: 'Provide bright light and gradual exposure to direct sun.',
      watering: 'Allow the substrate to dry between waterings.',
      soilAndPotting: 'Use a porous, well-draining cactus substrate.',
      temperature: 'Protect from frost pending verification of its hardiness.',
      fertilizer: 'Apply diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinocereus-nicholii',
    commonName: 'Nichol Hedgehog Cactus',
    scientificName: 'Echinocereus nicholii',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A clustering cylindrical cactus with strongly spined stems.',
    hardinessAndNativeRange: 'Native to the Sonoran Desert region of the United States and Mexico.',
    specialTraits: 'Adapted to arid desert habitats and known for its robust spination.',
    care: {
      sunlight: 'Provide full sun and good airflow.',
      watering: 'Water deeply during active growth, allowing the substrate to dry fully.',
      soilAndPotting: 'Use a gritty mineral cactus mix.',
      temperature: 'Protect potted plants from severe frost and winter wet.',
      fertilizer: 'Feed sparingly during active growth.'
    }
  },
  {
    id: 'echinocereus-pacificus',
    commonName: 'Pacific Hedgehog Cactus',
    scientificName: 'Echinocereus pacificus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus; verify the accepted taxonomic treatment before publication.',
    hardinessAndNativeRange: 'Native range and current species status require verification.',
    specialTraits: 'Taxonomic usage of this name should be confirmed with a current botanical reference.',
    care: {
      sunlight: 'Provide bright light and gradual sun exposure.',
      watering: 'Allow the substrate to dry between waterings.',
      soilAndPotting: 'Use a fast-draining cactus mix.',
      temperature: 'Protect from frost until species-specific hardiness is verified.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-parkeri',
    commonName: 'Parker Hedgehog Cactus',
    scientificName: 'Echinocereus parkeri',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus; confirm the currently accepted name before publication.',
    hardinessAndNativeRange: 'Verify its accepted taxonomic status and native range before publication.',
    specialTraits: 'Identification should be confirmed with a reliable botanical reference.',
    care: {
      sunlight: 'Provide bright light and acclimate gradually to direct sun.',
      watering: 'Water when the substrate has dried during active growth.',
      soilAndPotting: 'Use a porous cactus mix.',
      temperature: 'Protect from frost until hardiness is confirmed.',
      fertilizer: 'Apply diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinocereus-stramineus',
    commonName: 'Strawberry Hedgehog Cactus',
    scientificName: 'Echinocereus stramineus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A clustering cylindrical cactus that can form large colonies.',
    hardinessAndNativeRange: 'Native to the southwestern United States and northern Mexico.',
    specialTraits: 'Produces large flowers and edible red fruits.',
    care: {
      sunlight: 'Provide full sun to strong light.',
      watering: 'Water during active growth after the soil dries.',
      soilAndPotting: 'Use a mineral-rich, well-draining cactus mix.',
      temperature: 'Protect from prolonged cold and winter wet.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-viereckii',
    commonName: 'Viereck Hedgehog Cactus',
    scientificName: 'Echinocereus viereckii',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A cylindrical cactus that may form clumps.',
    hardinessAndNativeRange: 'Native range and accepted taxonomic treatment should be verified before publication.',
    specialTraits: 'Known within the Echinocereus group; confirm identification against a botanical reference.',
    care: {
      sunlight: 'Provide bright light and gradual sun exposure.',
      watering: 'Allow the soil to dry between waterings.',
      soilAndPotting: 'Use a fast-draining cactus mix.',
      temperature: 'Protect from frost until species-specific tolerance is verified.',
      fertilizer: 'Use diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinocereus-waldei',
    commonName: 'Walde Hedgehog Cactus',
    scientificName: 'Echinocereus waldei',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus; verify the current accepted name before publication.',
    hardinessAndNativeRange: 'Native range and taxonomic status need confirmation from a current botanical source.',
    specialTraits: 'Species-level identification should be verified before presenting detailed traits.',
    care: {
      sunlight: 'Provide bright light and gradual sun exposure.',
      watering: 'Let the growing medium dry between waterings.',
      soilAndPotting: 'Use a porous cactus substrate.',
      temperature: 'Protect from frost pending verification.',
      fertilizer: 'Feed lightly during active growth.'
    }
  },
  {
    id: 'echinocereus-websterianus',
    commonName: 'Webster Hedgehog Cactus',
    scientificName: 'Echinocereus websterianus',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus; verify the currently accepted taxonomic name before publication.',
    hardinessAndNativeRange: 'Native range and taxonomic status require confirmation.',
    specialTraits: 'Use a reliable botanical source to verify this name and its distinguishing features.',
    care: {
      sunlight: 'Provide bright light and acclimate gradually to direct sun.',
      watering: 'Water after the substrate has dried.',
      soilAndPotting: 'Use a fast-draining mineral cactus mix.',
      temperature: 'Protect from frost until hardiness is verified.',
      fertilizer: 'Apply diluted cactus fertilizer during active growth.'
    }
  },
  {
    id: 'echinocereus-yavapaiensis',
    commonName: 'Yavapai Hedgehog Cactus',
    scientificName: 'Echinocereus yavapaiensis',
    subfamily: 'Cactoideae',
    growthHabitAndSize: 'A small cylindrical cactus; verify the accepted taxonomic status and mature dimensions.',
    hardinessAndNativeRange: 'The name suggests an association with Yavapai County, Arizona, but the range should be confirmed before publication.',
    specialTraits: 'Verify the species identity and diagnostic features using a current botanical reference.',
    care: {
      sunlight: 'Provide bright light and gradual sun exposure.',
      watering: 'Allow the substrate to dry between waterings.',
      soilAndPotting: 'Use a porous, fast-draining cactus mix.',
      temperature: 'Protect from frost until the specific population tolerance is verified.',
      fertilizer: 'Feed sparingly during active growth.'
    }
  },
  
    {
    id: "melocactus-azureus",
    commonName: "Turk's Cap Cactus",
    scientificName: "Melocactus azureus",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing, globular cactus with a distinctive blue-green body, usually around 15–25 cm wide. Mature plants develop a woolly, bristly cephalium at the crown.",
    hardinessAndNativeRange:
      "Native to Bahia in northeastern Brazil. It thrives in warm conditions and requires excellent drainage.",
    specialTraits:
      "Its striking turquoise body contrasts with the reddish cephalium. Small pink flowers emerge from the cephalium, followed by colourful fruits.",
    care: {
      sunlight: "Provide strong sunlight and acclimate gradually to intense direct sun.",
      watering: "Water thoroughly during warm growth, then allow the soil to dry. Keep drier during cool weather.",
      soilAndPotting: "Use a fast-draining mix containing about 70% mineral grit and 30% suitable soil. Choose a shallow pot with drainage.",
      temperature: "Prefers warm conditions and should be protected from cold temperatures.",
      fertilizer: "Apply dilute cactus fertilizer occasionally during active growth."
    }
  },
  {
    id: "melocactus-matanzanus",
    commonName: "Dwarf Turk's Cap",
    scientificName: "Melocactus matanzanus",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A small, slow-growing globular cactus, generally around 8–12 cm wide, with a compact body and a prominent reddish cephalium at maturity.",
    hardinessAndNativeRange:
      "Native to Cuba, including the Matanzas region. It requires warm growing conditions and is sensitive to cold and prolonged moisture.",
    specialTraits:
      "Its glossy green body and compact red cephalium make it popular among collectors. Pink flowers emerge from the cephalium.",
    care: {
      sunlight: "Provide bright light and some direct sun after gradual acclimation.",
      watering: "Water when the substrate has dried, then reduce watering during cooler periods.",
      soilAndPotting: "Use a highly draining mineral cactus mix, with approximately 75% grit and 25% suitable soil.",
      temperature: "Keep warm, ideally above 10°C, and protect from cold drafts.",
      fertilizer: "Feed sparingly with diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "melocactus-concinnus",
    commonName: "Elegant Turk's Cap",
    scientificName: "Melocactus concinnus",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing, globular cactus that commonly reaches around 10–15 cm wide. Mature specimens develop a woolly cephalium.",
    hardinessAndNativeRange:
      "Native to Brazil, particularly northeastern regions. It is adapted to warm environments and well-drained growing conditions.",
    specialTraits:
      "The symmetrical dark green body has prominent ribs and short spines. The cephalium produces small pink flowers and colourful fruits.",
    care: {
      sunlight: "Provide strong light with protection from sudden exposure to intense midday sun.",
      watering: "Water during active growth and let the soil dry between waterings. Reduce watering in cool weather.",
      soilAndPotting: "Use a gritty, fast-draining cactus substrate with approximately 75% mineral material.",
      temperature: "Keep warm and protect from frost and cold, wet conditions.",
      fertilizer: "Use dilute cactus fertilizer occasionally during active growth."
    }
  },
  {
    id: "aztekium-ritteri",
    commonName: "Aztec Cactus",
    scientificName: "Aztekium ritteri",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "An extremely slow-growing, small cactus with a flattened grey-green body, commonly only a few centimetres wide.",
    hardinessAndNativeRange:
      "Native to northeastern Mexico, where it grows in specialised rocky habitats, including limestone cliffs. It requires excellent drainage.",
    specialTraits:
      "Deep grooves and intricate ridges create a sculpted appearance. Small pale pink or whitish flowers may appear at the crown.",
    care: {
      sunlight: "Provide bright filtered light or gentle morning sun; avoid sudden exposure to intense sunlight.",
      watering: "Water very sparingly and only when the growing medium is completely dry. Avoid water collecting around the crown.",
      soilAndPotting: "Use a predominantly mineral limestone-based substrate and a shallow pot with drainage.",
      temperature: "Prefer warm conditions and protect from cold, damp weather.",
      fertilizer: "Use very dilute cactus fertilizer infrequently during active growth."
    }
  },
  {
    id: "aztekium-hintonii",
    commonName: "Hinton's Aztec",
    scientificName: "Aztekium hintonii",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "An extremely slow-growing, solitary globular cactus that can reach approximately 6–12 cm wide, with pronounced sculpted ribs.",
    hardinessAndNativeRange:
      "Native to northeastern Mexico, particularly Nuevo León and Tamaulipas. It grows in dry, rocky habitats and needs mineral-rich, sharply drained soil.",
    specialTraits:
      "Its grey-green body has broad, deeply sculpted ribs. Pink to magenta flowers provide contrast against the body.",
    care: {
      sunlight: "Provide bright filtered light or gentle morning sun and avoid harsh sudden exposure.",
      watering: "Water cautiously after the substrate dries completely. Keep nearly dry during cool conditions.",
      soilAndPotting: "Use a highly mineral substrate with limestone grit and a shallow pot with excellent drainage.",
      temperature: "Prefers warm conditions and should be protected from frost and prolonged dampness.",
      fertilizer: "Feed very sparingly with dilute cactus fertilizer during active growth."
    }
  },
  {
    id: "geohintonia-mexicana",
    commonName: "Mexican Gem",
    scientificName: "Geohintonia mexicana",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "An extremely slow-growing, solitary cactus with a flattened to rounded grey-green body, generally around 4–8 cm wide.",
    hardinessAndNativeRange:
      "Native to a restricted limestone habitat in Nuevo León, northeastern Mexico. It requires warm conditions and excellent drainage.",
    specialTraits:
      "Prominent vertical ribs and a silvery, stone-like surface give it a distinctive appearance. Pink flowers can emerge near the crown.",
    care: {
      sunlight: "Provide bright filtered light and gradually introduce gentle direct sunlight.",
      watering: "Water sparingly only after the substrate dries thoroughly. Excess moisture can cause rot.",
      soilAndPotting: "Use a very mineral limestone-based mix in a shallow pot with drainage holes.",
      temperature: "Maintain warm conditions and protect from cold, wet weather.",
      fertilizer: "Use very dilute fertilizer infrequently during active growth."
    }
  },
  {
    id: "gymnocalycium-mihanovichii",
    commonName: "Moon Cactus",
    scientificName: "Gymnocalycium mihanovichii",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A small, flattened globular cactus, commonly around 5–8 cm wide. Many brightly coloured horticultural forms are grafted onto another cactus.",
    hardinessAndNativeRange:
      "Native to parts of South America, including Paraguay and Argentina. It grows best in warm conditions with good drainage.",
    specialTraits:
      "The species has ribbed green to brownish bodies and pale flowers. Popular red, orange, pink and yellow grafted forms often lack sufficient chlorophyll to survive independently.",
    care: {
      sunlight: "Provide bright indirect light, particularly for brightly coloured grafted forms.",
      watering: "Water thoroughly after the substrate dries, reducing watering during cooler weather.",
      soilAndPotting: "Use a well-draining cactus mix containing mineral grit.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Apply dilute cactus fertilizer occasionally during active growth."
    }
  },
  {
    id: "gymnocalycium-baldianum",
    commonName: "Dwarf Chin Cactus",
    scientificName: "Gymnocalycium baldianum",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A compact, flattened globular cactus that generally grows around 6–8 cm wide, with distinct ribs and short spines.",
    hardinessAndNativeRange:
      "Native to Catamarca and neighbouring areas of Argentina. It grows in rocky habitats and benefits from seasonal moisture followed by drier conditions.",
    specialTraits:
      "Its compact body and vivid scarlet to reddish flowers make it a popular flowering cactus. Flowers may appear near the crown during the growing season.",
    care: {
      sunlight: "Provide bright light with gentle direct sun; protect from excessive heat in containers.",
      watering: "Water during active growth after the soil has partially dried. Reduce watering in winter.",
      soilAndPotting: "Use a free-draining cactus mix with mineral grit.",
      temperature: "Tolerates some cool conditions when dry, but protect container plants from severe frost.",
      fertilizer: "Feed lightly with dilute cactus fertilizer during active growth."
    }
  },
  {
    id: "gymnocalycium-saglionis",
    commonName: "Giant Chin Cactus",
    scientificName: "Gymnocalycium saglionis",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing, large globular cactus that may reach approximately 20–30 cm wide. It develops a broad ribbed body and stout curved spines.",
    hardinessAndNativeRange:
      "Native to northern Argentina and nearby South American regions. It grows in dry, open habitats with excellent soil drainage.",
    specialTraits:
      "The large grey-green globe and long curved spines make mature specimens distinctive. Flowers are generally whitish to pale pink.",
    care: {
      sunlight: "Provide full sun or strong light, with gradual acclimation.",
      watering: "Water thoroughly during growth and allow the substrate to dry between waterings.",
      soilAndPotting: "Use a gritty, well-draining cactus mix and a stable pot suited to its broad root system.",
      temperature: "Tolerates some cool conditions when dry; protect from frost combined with moisture.",
      fertilizer: "Apply dilute cactus fertilizer occasionally during active growth."
    }
  },
  {
    id: "turbinicarpus-pseudopectinatus",
    commonName: "False Pectinate Cactus",
    scientificName: "Turbinicarpus pseudopectinatus",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A miniature, flattened globular cactus that usually reaches around 3–5 cm wide. It develops a tapering root and grows very slowly.",
    hardinessAndNativeRange:
      "Native to arid regions of northeastern and central Mexico, where it grows in rocky, often limestone-rich habitats.",
    specialTraits:
      "Fine, comb-like spines give the small body a pale appearance. Pink to lavender flowers may appear near the crown.",
    care: {
      sunlight: "Provide strong light and gentle direct sun after gradual acclimation.",
      watering: "Water very carefully after the substrate dries completely. Avoid persistent moisture around the root.",
      soilAndPotting: "Use a highly mineral limestone-rich substrate and a relatively deep, narrow pot for the root.",
      temperature: "Keep dry during cold periods and protect from prolonged cold and dampness.",
      fertilizer: "Use dilute cactus fertilizer very sparingly during active growth."
    }
  },
  {
    id: "turbinicarpus-schmiedickeanus",
    commonName: "Schmiedicke's Turbine",
    scientificName: "Turbinicarpus schmiedickeanus",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A miniature, slow-growing globular cactus, commonly around 3–6 cm wide, with a tapering root and variable spination.",
    hardinessAndNativeRange:
      "Native to northern and central Mexico, where it occurs in dry, rocky habitats.",
    specialTraits:
      "Its small grey-green body and variable short spines distinguish the species and its horticultural forms. Flowers are often white to pinkish.",
    care: {
      sunlight: "Provide strong light and some gentle direct sun.",
      watering: "Water sparingly once the substrate is dry; keep drier during winter.",
      soilAndPotting: "Use a mineral-rich, fast-draining mix and a pot deep enough for its root.",
      temperature: "Protect from cold, wet conditions, particularly in winter.",
      fertilizer: "Feed infrequently with a dilute cactus fertilizer during active growth."
    }
  },
  {
    id: "turbinicarpus-valdezianus",
    commonName: "Valdez's Turbine",
    scientificName: "Turbinicarpus valdezianus",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A very small, flattened cactus, generally around 2–4 cm wide, with a compact body and tapering root.",
    hardinessAndNativeRange:
      "Native to northeastern Mexico, including parts of Coahuila and Nuevo León. It is adapted to dry, rocky environments.",
    specialTraits:
      "Dense, fine white spines can make the body resemble a tiny snowball. Flowers are commonly pink to lavender.",
    care: {
      sunlight: "Provide strong light to maintain compact growth and healthy spination.",
      watering: "Water cautiously only after the substrate has dried completely.",
      soilAndPotting: "Use a very gritty mineral mix and a deep, narrow pot for the root.",
      temperature: "Keep dry during cold periods and avoid frost with wet soil.",
      fertilizer: "Apply very dilute cactus fertilizer infrequently during active growth."
    }
  },
  {
    id: "eriosyce-ceratistes",
    commonName: "Chilenito",
    scientificName: "Eriosyce ceratistes",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing globular to somewhat elongated cactus that can develop into a larger solitary specimen with age.",
    hardinessAndNativeRange:
      "Native to arid regions of Chile. It is adapted to dry habitats and requires strong light and excellent drainage in cultivation.",
    specialTraits:
      "The ribbed body is covered in prominent golden to yellowish spines. Flowers may be yellowish or reddish depending on the plant.",
    care: {
      sunlight: "Provide full sun after gradual acclimation.",
      watering: "Water during active growth and allow the substrate to dry completely between waterings.",
      soilAndPotting: "Use a mineral-rich cactus mix with excellent drainage.",
      temperature: "Keep drier during cool weather and protect from prolonged cold, wet conditions.",
      fertilizer: "Feed sparingly with diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "eriosyce-subgibbosa",
    commonName: "Cob Cactus",
    scientificName: "Eriosyce subgibbosa",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing globular cactus that may become elongated with age. It has a ribbed body and dense spines.",
    hardinessAndNativeRange:
      "Native to Chile, including coastal areas with seasonally dry conditions and fog influence.",
    specialTraits:
      "Its dark green body and greyish to reddish spines create a dramatic appearance. Flowers are commonly pink to reddish.",
    care: {
      sunlight: "Provide full sun or strong light, with protection from sudden intense exposure.",
      watering: "Water during active growth and let the substrate dry between waterings. Reduce watering in winter.",
      soilAndPotting: "Use a fast-draining mineral cactus substrate.",
      temperature: "Protect from severe frost and prolonged cold, wet conditions.",
      fertilizer: "Use dilute cactus fertilizer sparingly during active growth."
    }
  },
  {
    id: "eriosyce-sandillonii",
    commonName: "Sandillon",
    scientificName: "Eriosyce sandillonii",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing globular cactus that can become a substantial solitary specimen, with a broad ribbed body and robust spines.",
    hardinessAndNativeRange:
      "Associated with arid regions of Chile. Confirm the currently accepted taxonomic treatment before publishing species-specific distribution details.",
    specialTraits:
      "The grey-green body and dense golden or silvery spines create a striking appearance. Flower colour and form should be verified against a reliable species reference.",
    care: {
      sunlight: "Provide strong light and gradually acclimate to full sun.",
      watering: "Water cautiously during active growth and allow the soil to dry thoroughly.",
      soilAndPotting: "Use a very well-draining mineral cactus mix.",
      temperature: "Keep dry during cool periods and protect from prolonged cold and dampness.",
      fertilizer: "Feed lightly with dilute cactus fertilizer during active growth."
    }
  },
  {
    id: "parodia-formosa",
    commonName: "Beautiful Ball Cactus",
    scientificName: "Parodia formosa",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A small globular cactus that develops a ribbed body and dense spines, generally remaining compact in cultivation.",
    hardinessAndNativeRange:
      "The accepted status and native distribution of this name should be verified against a current botanical taxonomic source before publication.",
    specialTraits:
      "Parodia species commonly produce colourful spines and showy flowers, often yellow. Confirm species-specific traits for this name before displaying them as established facts.",
    care: {
      sunlight: "Provide bright light and some direct sun after acclimation.",
      watering: "Water during active growth and let the substrate dry between waterings.",
      soilAndPotting: "Use a well-draining cactus mix with a generous mineral component.",
      temperature: "Protect from frost and cold, waterlogged soil.",
      fertilizer: "Apply dilute cactus fertilizer during active growth."
    }
  },
  {
    id: "parodia-mutabilis",
    commonName: "Changeable Ball Cactus",
    scientificName: "Parodia mutabilis",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A compact globular cactus with a ribbed body and spines that may change in appearance as they mature.",
    hardinessAndNativeRange:
      "Verify the accepted status and native range of this botanical name before publication, as taxonomic treatments within Parodia have changed.",
    specialTraits:
      "Parodia species often have colourful spines and bright flowers. Any claim that this species has a specific age-related spine colour change should be confirmed against a reliable reference.",
    care: {
      sunlight: "Provide bright light and gradually acclimate to direct sun.",
      watering: "Water during active growth after the substrate has dried sufficiently.",
      soilAndPotting: "Use a fast-draining cactus mix with mineral grit.",
      temperature: "Protect from frost and prolonged cold, wet conditions.",
      fertilizer: "Feed sparingly with dilute cactus fertilizer during active growth."
    }
  },
  {
    id: "browningia-hertlingiana",
    commonName: "Blue Cereus",
    scientificName: "Browningia hertlingiana",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A slow-growing, columnar cactus that can develop into a large, branching plant several metres tall in suitable outdoor conditions.",
    hardinessAndNativeRange:
      "Native to Peru, particularly Andean regions. It prefers strong sunlight, warm conditions and sharply drained soil.",
    specialTraits:
      "Its striking powdery blue stems contrast with pale spines. Mature plants may produce flowers near the stem tips.",
    care: {
      sunlight: "Provide full sun and good airflow to maintain healthy growth and blue stem colour.",
      watering: "Water thoroughly during warm growth and allow the soil to dry between waterings.",
      soilAndPotting: "Use a mineral-rich, fast-draining cactus mix. Large plants need a stable container and room to grow.",
      temperature: "Prefers warm conditions and should be protected from frost.",
      fertilizer: "Use dilute cactus fertilizer occasionally during active growth."
    }
  },
  {
    id: "browningia-candelaris",
    commonName: "Candleholder Cactus",
    scientificName: "Browningia candelaris",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A very slow-growing columnar cactus that develops a thick trunk and, with maturity, a distinctive crown of branching stems.",
    hardinessAndNativeRange:
      "Native to the arid regions of southern Peru and northern Chile, including areas near the Atacama Desert. It is adapted to dry conditions.",
    specialTraits:
      "Mature plants have an unusual candleholder-like silhouette, with a thick trunk and branches concentrated near the crown. Spines and flowering behaviour vary with age.",
    care: {
      sunlight: "Provide full sun and strong airflow.",
      watering: "Water sparingly, allowing the substrate to dry completely. Avoid frequent watering in cool weather.",
      soilAndPotting: "Use a highly mineral, fast-draining substrate and a deep, stable container for young plants.",
      temperature: "Keep warm and protect from frost and prolonged dampness.",
      fertilizer: "Feed lightly during active growth, avoiding excess nitrogen."
    }
  },
  {
    id: "matucana-aurantiaca",
    commonName: "Orange Ball Cactus",
    scientificName: "Matucana aurantiaca",
    subfamily: "Cactoideae",
    growthHabitAndSize:
      "A compact globular to short-columnar cactus that may grow singly or form small clumps. It has a ribbed green body and prominent spines.",
    hardinessAndNativeRange:
      "Matucana species are native to Peru, often in Andean habitats. Verify the accepted status and precise distribution of this species name before publication.",
    specialTraits:
      "Matucana cacti are known for their colourful tubular flowers, which can be orange or reddish in some species. Confirm the flower colour and other traits for this particular name.",
    care: {
      sunlight: "Provide bright light to gentle direct sun, with protection from sudden extreme heat.",
      watering: "Water during active growth, allowing the substrate to dry partially between waterings. Reduce watering in cool conditions.",
      soilAndPotting: "Use a well-draining cactus mix with mineral grit.",
      temperature: "Protect from frost and prolonged cold, wet conditions.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },

    {
    id: "melocactus-ernestii",
    commonName: "Melocactus ernestii",
    scientificName: "Melocactus ernestii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus with a ribbed green body that can develop a cephalium at maturity.",
    hardinessAndNativeRange: "Native to Brazil. Confirm the precise distribution and cold tolerance before publication.",
    specialTraits: "Mature plants may develop a woolly, bristly cephalium from which small flowers emerge.",
    care: {
      sunlight: "Provide bright light and gradually introduce direct sunlight.",
      watering: "Water during active growth and allow excess water to drain.",
      soilAndPotting: "Use a porous, well-draining cactus mix.",
      temperature: "Protect from frost and prolonged cold, wet conditions.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "melocactus-glaucescens",
    commonName: "Melocactus glaucescens",
    scientificName: "Melocactus glaucescens",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A compact, globular cactus with a bluish-green body and prominent ribs.",
    hardinessAndNativeRange: "Native to Brazil, where it occurs in specialized rocky habitats. Verify its current conservation status before publication.",
    specialTraits: "Its glaucous body and mature cephalium distinguish it from many other globular cacti.",
    care: {
      sunlight: "Provide bright light and gentle direct sun with gradual acclimation.",
      watering: "Water carefully during growth and avoid leaving the roots wet.",
      soilAndPotting: "Use a mineral-rich, sharply draining substrate.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Use a diluted cactus fertilizer sparingly during active growth."
    }
  },
  {
    id: "melocactus-zehntneri",
    commonName: "Melocactus zehntneri",
    scientificName: "Melocactus zehntneri",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular to slightly elongated cactus with distinct ribs and spines.",
    hardinessAndNativeRange: "Associated with northeastern Brazil. Confirm its exact distribution and accepted taxonomic status.",
    specialTraits: "Mature plants can produce a cephalium bearing small flowers and fruits.",
    care: {
      sunlight: "Provide bright light and some direct sun after acclimation.",
      watering: "Water during warm growing periods and avoid waterlogged soil.",
      soilAndPotting: "Use a well-draining cactus mix with mineral components.",
      temperature: "Protect from frost and prolonged cold.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "discocactus-placentiformis",
    commonName: "Discocactus placentiformis",
    scientificName: "Discocactus placentiformis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A flattened to globular cactus with a ribbed body and a woolly flowering region at maturity.",
    hardinessAndNativeRange: "Native range and accepted taxonomic status should be verified using a current botanical reference.",
    specialTraits: "Discocactus species are notable for their fragrant, often night-opening flowers and cephalium.",
    care: {
      sunlight: "Provide bright filtered light or gentle direct sun.",
      watering: "Water carefully during growth and allow excess water to drain.",
      soilAndPotting: "Use a porous substrate that drains quickly.",
      temperature: "Keep warm and protect from cold, wet conditions.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "discocactus-hartmannii",
    commonName: "Discocactus hartmannii",
    scientificName: "Discocactus hartmannii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A compact, rounded cactus with ribs and a woolly crown as it matures.",
    hardinessAndNativeRange: "Verify the accepted name and native distribution before publication.",
    specialTraits: "Discocactus species are known for their conspicuous cephalium and fragrant flowers.",
    care: {
      sunlight: "Provide bright light while protecting from sudden intense midday sun.",
      watering: "Water when appropriate for the growing season and avoid standing water.",
      soilAndPotting: "Use a mineral-rich, fast-draining cactus substrate.",
      temperature: "Maintain warm conditions and protect from frost.",
      fertilizer: "Use a diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "uebelmannia-pectinifera",
    commonName: "Uebelmannia pectinifera",
    scientificName: "Uebelmannia pectinifera",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A solitary globular to short-columnar cactus with a ribbed body and closely arranged spines.",
    hardinessAndNativeRange: "Native to Brazil, particularly rocky habitats in Minas Gerais.",
    specialTraits: "Its dark green to purplish body and comb-like spine arrangement are distinctive.",
    care: {
      sunlight: "Provide bright light and introduce direct sun gradually.",
      watering: "Water carefully during active growth and keep the roots well aerated.",
      soilAndPotting: "Use a very porous mineral cactus mix.",
      temperature: "Keep warm and avoid cold, damp conditions.",
      fertilizer: "Apply a weak cactus fertilizer during active growth."
    }
  },
  {
    id: "uebelmannia-gummifera",
    commonName: "Uebelmannia gummifera",
    scientificName: "Uebelmannia gummifera",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slow-growing, globular cactus with pronounced ribs and a distinctive spiny surface.",
    hardinessAndNativeRange: "Associated with Brazil. Verify its precise native range and accepted status.",
    specialTraits: "Uebelmannia species are appreciated for their unusual rib patterns and dark, often glossy bodies.",
    care: {
      sunlight: "Provide bright light and carefully acclimated direct sunlight.",
      watering: "Water during growth but avoid prolonged moisture around the roots.",
      soilAndPotting: "Use a mineral-rich, fast-draining substrate.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Fertilize lightly during active growth."
    }
  },
  {
    id: "armatocereus-procerus",
    commonName: "Armatocereus procerus",
    scientificName: "Armatocereus procerus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A columnar cactus that may develop a tall, branching growth habit.",
    hardinessAndNativeRange: "Armatocereus species are native to western South America. Verify this species' exact range.",
    specialTraits: "The genus is characterized by ribbed stems, prominent spines, and large flowers.",
    care: {
      sunlight: "Provide abundant light and ample space for growth.",
      watering: "Water thoroughly during growth, allowing the soil to dry appropriately between waterings.",
      soilAndPotting: "Use a well-draining cactus mix in a sturdy pot.",
      temperature: "Protect from frost and prolonged cold.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "armatocereus-matucanensis",
    commonName: "Armatocereus matucanensis",
    scientificName: "Armatocereus matucanensis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A columnar cactus with ribbed stems and strong spines.",
    hardinessAndNativeRange: "Associated with Peru. Verify its current accepted name and precise distribution.",
    specialTraits: "Its columnar growth and defensive spines are characteristic of Armatocereus.",
    care: {
      sunlight: "Provide bright light and gradually acclimate to full sun.",
      watering: "Water during active growth and avoid saturated soil.",
      soilAndPotting: "Use a fast-draining cactus substrate.",
      temperature: "Protect from frost and excessive cold moisture.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "parodia-haselbergii",
    commonName: "Brasilicactus haselbergii",
    scientificName: "Parodia haselbergii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus with dense pale spines and a rounded body.",
    hardinessAndNativeRange: "Native to southern Brazil. Formerly known as Brasilicactus haselbergii.",
    specialTraits: "Its dense, light-coloured spines contrast with its green body, and it can produce colourful flowers.",
    care: {
      sunlight: "Provide bright light and gentle direct sun.",
      watering: "Water during growth and allow the substrate to dry appropriately between waterings.",
      soilAndPotting: "Use a porous cactus mix with excellent drainage.",
      temperature: "Protect from frost and prolonged cold, wet conditions.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "parodia-magnifica",
    commonName: "Parodia magnifica",
    scientificName: "Parodia magnifica",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular to short-columnar cactus with pronounced ribs and pale spines.",
    hardinessAndNativeRange: "Native to southern Brazil. Previously associated with the name Eriocactus magnificus.",
    specialTraits: "Its blue-green body and yellow flowers make it a popular ornamental cactus.",
    care: {
      sunlight: "Provide bright light and some gentle direct sun.",
      watering: "Water during active growth and avoid waterlogging.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Protect from frost and prolonged cold.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "parodia-leninghausii",
    commonName: "Parodia leninghausii",
    scientificName: "Parodia leninghausii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A columnar cactus that can grow upright and form clumps as it matures.",
    hardinessAndNativeRange: "Native to southern Brazil. Formerly widely known as Notocactus leninghausii.",
    specialTraits: "Dense golden-yellow spines and yellow flowers are characteristic features.",
    care: {
      sunlight: "Provide bright light and gradually increase direct sun exposure.",
      watering: "Water during growth and let excess water drain.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Protect from frost, especially when the soil is wet.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "parodia-scopa",
    commonName: "Parodia scopa",
    scientificName: "Parodia scopa",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular to cylindrical cactus with numerous fine spines.",
    hardinessAndNativeRange: "Native to southern South America. Formerly known as Notocactus scopa.",
    specialTraits: "Its dense, hair-like spines can give the body a pale or silvery appearance.",
    care: {
      sunlight: "Provide bright light and some gentle direct sun.",
      watering: "Water during active growth and avoid standing water.",
      soilAndPotting: "Use a porous, fast-draining cactus mix.",
      temperature: "Protect from frost and prolonged cold.",
      fertilizer: "Fertilize lightly during active growth."
    }
  },
  {
    id: "parodia-concinna",
    commonName: "Parodia concinna",
    scientificName: "Parodia concinna",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus with ribs, areoles, and spines.",
    hardinessAndNativeRange: "Verify its current accepted taxonomic name and native distribution; Malacocarpus concinnus is a historical name.",
    specialTraits: "Parodia species vary in spine arrangement and flower colour; verify identifying details for this taxon.",
    care: {
      sunlight: "Provide bright light and gentle direct sun.",
      watering: "Water during growth and allow excess water to drain.",
      soilAndPotting: "Use a well-draining cactus substrate.",
      temperature: "Protect from frost and prolonged cold moisture.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "parodia-erinacea",
    commonName: "Parodia erinacea",
    scientificName: "Parodia erinacea",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small cactus with a rounded body, ribs, and prominent spines.",
    hardinessAndNativeRange: "Verify the accepted name and precise native range; Wigginsia erinacea is a historical name.",
    specialTraits: "The historical genus Wigginsia has been associated with Parodia in cactus taxonomy.",
    care: {
      sunlight: "Provide bright light and gradual acclimation to direct sun.",
      watering: "Water carefully during active growth and avoid waterlogged soil.",
      soilAndPotting: "Use a porous cactus mix.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },

  // Set 12 — Species 246–260
  {
    id: "copiapoa-cinerea",
    commonName: "Copiapoa cinerea",
    scientificName: "Copiapoa cinerea",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slow-growing globular cactus that may form clumps with age.",
    hardinessAndNativeRange: "Native to the arid coastal region of northern Chile.",
    specialTraits: "Its grey to chalky-white appearance is a notable adaptation to its extremely dry habitat.",
    care: {
      sunlight: "Provide very bright light and gradually acclimate to direct sun.",
      watering: "Water sparingly during suitable growing conditions and keep the roots dry in cold weather.",
      soilAndPotting: "Use a highly mineral, fast-draining substrate.",
      temperature: "Protect from frost and prolonged dampness.",
      fertilizer: "Fertilize sparingly during active growth."
    }
  },
  {
    id: "copiapoa-coquimbana",
    commonName: "Copiapoa coquimbana",
    scientificName: "Copiapoa coquimbana",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus that may produce multiple heads and clumps.",
    hardinessAndNativeRange: "Native to Chile's arid coastal areas. Verify its precise distribution.",
    specialTraits: "It belongs to a genus adapted to extremely dry conditions and often has strongly ribbed stems.",
    care: {
      sunlight: "Provide abundant light with gradual acclimation.",
      watering: "Water cautiously and avoid keeping the roots continuously moist.",
      soilAndPotting: "Use a very porous, mineral-rich cactus mix.",
      temperature: "Protect from frost and prolonged cold, wet conditions.",
      fertilizer: "Apply a weak fertilizer sparingly during active growth."
    }
  },
  {
    id: "copiapoa-hypogaea",
    commonName: "Copiapoa hypogaea",
    scientificName: "Copiapoa hypogaea",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, often partly buried globular cactus with a subdued profile.",
    hardinessAndNativeRange: "Native to northern Chile. Verify the precise range and accepted taxonomic treatment.",
    specialTraits: "Its tendency to sit partly below the soil surface is reflected in its species name.",
    care: {
      sunlight: "Provide bright light while avoiding abrupt exposure to intense sun.",
      watering: "Water very cautiously and ensure the root zone dries appropriately.",
      soilAndPotting: "Use a highly mineral substrate with excellent drainage.",
      temperature: "Keep warm and dry in cool weather.",
      fertilizer: "Fertilize very sparingly during active growth."
    }
  },
  {
    id: "copiapoa-humilis",
    commonName: "Copiapoa humilis",
    scientificName: "Copiapoa humilis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus that may form clusters of low-growing heads.",
    hardinessAndNativeRange: "Native to arid regions of northern Chile.",
    specialTraits: "Its compact growth and variability make it a recognizable member of the Copiapoa genus.",
    care: {
      sunlight: "Provide bright light and gradual acclimation to direct sun.",
      watering: "Water sparingly during growth and avoid persistent moisture.",
      soilAndPotting: "Use a mineral-rich cactus substrate.",
      temperature: "Protect from frost and cold, damp conditions.",
      fertilizer: "Apply diluted fertilizer sparingly during active growth."
    }
  },
  {
    id: "frailea-pumila",
    commonName: "Frailea pumila",
    scientificName: "Frailea pumila",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, low-growing globular cactus with ribs and relatively short spines.",
    hardinessAndNativeRange: "Frailea species occur in parts of South America. Verify this species' precise distribution.",
    specialTraits: "Frailea cacti are known for their small size and cleistogamous flowers in some species.",
    care: {
      sunlight: "Provide bright light and some gentle direct sun.",
      watering: "Water lightly during growth and avoid prolonged saturation.",
      soilAndPotting: "Use a well-draining, fine mineral cactus mix.",
      temperature: "Protect from frost and cold, wet soil.",
      fertilizer: "Use diluted cactus fertilizer sparingly."
    }
  },
  {
    id: "frailea-castanea",
    commonName: "Frailea castanea",
    scientificName: "Frailea castanea",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, flattened to globular cactus with a brownish-green body.",
    hardinessAndNativeRange: "Native range and current taxonomic status should be verified with a botanical reference.",
    specialTraits: "Its compact size and muted body colour distinguish it from many larger ornamental cacti.",
    care: {
      sunlight: "Provide bright light without sudden exposure to intense heat.",
      watering: "Water carefully during growth and avoid waterlogged soil.",
      soilAndPotting: "Use a porous, fast-draining cactus substrate.",
      temperature: "Protect from frost and prolonged dampness.",
      fertilizer: "Fertilize lightly during active growth."
    }
  },
  {
    id: "gymnocalycium-friedrichii",
    commonName: "Gymnocalycium friedrichii",
    scientificName: "Gymnocalycium friedrichii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, flattened globular cactus with broad ribs and relatively short spines.",
    hardinessAndNativeRange: "Associated with Paraguay and nearby regions; verify the accepted name and exact distribution.",
    specialTraits: "Some forms have attractive dark or reddish-green bodies and large flowers.",
    care: {
      sunlight: "Provide bright filtered light or gentle morning sun.",
      watering: "Water during active growth and let excess water drain.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Protect from frost and prolonged cold.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "gymnocalycium-horstii",
    commonName: "Gymnocalycium horstii",
    scientificName: "Gymnocalycium horstii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus with broad ribs and a relatively smooth green body.",
    hardinessAndNativeRange: "Native range and accepted taxonomic details should be verified before publication.",
    specialTraits: "It can produce large, showy flowers relative to its compact body.",
    care: {
      sunlight: "Provide bright filtered light and gentle morning sun.",
      watering: "Water during growth and avoid waterlogged soil.",
      soilAndPotting: "Use a porous cactus mix with good drainage.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Use diluted fertilizer during active growth."
    }
  },
  {
    id: "parodia-aureispina",
    commonName: "Parodia aureispina",
    scientificName: "Parodia aureispina",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A compact globular cactus with ribs and yellowish spines.",
    hardinessAndNativeRange: "Verify the current accepted name and native range.",
    specialTraits: "The species name refers to golden spines, but the exact identification should be checked.",
    care: {
      sunlight: "Provide bright light and gradual acclimation to direct sun.",
      watering: "Water during growth and allow the soil to drain well.",
      soilAndPotting: "Use a porous cactus substrate.",
      temperature: "Protect from frost and prolonged cold moisture.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "parodia-rutilans",
    commonName: "Parodia rutilans",
    scientificName: "Parodia rutilans",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small cactus with a rounded body, ribs, and spines.",
    hardinessAndNativeRange: "Verify the current accepted taxonomic status and precise distribution.",
    specialTraits: "Confirm the identifying spine and flower characteristics for this name before publication.",
    care: {
      sunlight: "Provide bright light and some gentle direct sun.",
      watering: "Water during active growth and avoid waterlogging.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Protect from frost and prolonged dampness.",
      fertilizer: "Fertilize lightly during active growth."
    }
  },
  {
    id: "eriosyce-napina",
    commonName: "Eriosyce napina",
    scientificName: "Eriosyce napina",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, flattened globular cactus that can sit partly buried in the soil.",
    hardinessAndNativeRange: "Native to Chile. Verify the precise distribution and conservation status.",
    specialTraits: "Its compact, often subterranean growth is characteristic of this specialized group.",
    care: {
      sunlight: "Provide bright light with protection from abrupt extreme heat.",
      watering: "Water cautiously during suitable growing conditions and keep dry in cold weather.",
      soilAndPotting: "Use a highly mineral substrate with excellent drainage.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Fertilize sparingly during active growth."
    }
  },
  {
    id: "eriosyce-islayensis",
    commonName: "Eriosyce islayensis",
    scientificName: "Eriosyce islayensis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus adapted to arid landscapes, with ribs and spines.",
    hardinessAndNativeRange: "Associated with the arid coastal region of Peru. Verify the accepted name and exact range.",
    specialTraits: "Its natural habitat is extremely dry, so cultivation requires careful moisture management.",
    care: {
      sunlight: "Provide bright light and gradually acclimate to direct sun.",
      watering: "Water cautiously and allow the substrate to dry appropriately.",
      soilAndPotting: "Use a mineral-rich, sharply draining cactus mix.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Apply very dilute fertilizer sparingly."
    }
  },
  {
    id: "acanthocalycium-spiniflorum",
    commonName: "Acanthocalycium spiniflorum",
    scientificName: "Acanthocalycium spiniflorum",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus with ribs and strong spines.",
    hardinessAndNativeRange: "Native to Argentina. Confirm the precise distribution and cold tolerance.",
    specialTraits: "It is known for its spiny body and conspicuous flowers.",
    care: {
      sunlight: "Provide bright light and some direct sun after acclimation.",
      watering: "Water during active growth and avoid prolonged saturation.",
      soilAndPotting: "Use a well-draining cactus substrate.",
      temperature: "Protect from severe frost and cold, wet soil.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "acanthocalycium-thionanthum",
    commonName: "Acanthocalycium thionanthum",
    scientificName: "Acanthocalycium thionanthum",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular to short-columnar cactus with ribs and prominent spines.",
    hardinessAndNativeRange: "Native to Argentina. Verify the exact range and current taxonomic treatment.",
    specialTraits: "Its flowers can be yellowish, although colour and appearance vary across forms.",
    care: {
      sunlight: "Provide bright light and gradually introduce direct sun.",
      watering: "Water during growth and allow excess water to drain.",
      soilAndPotting: "Use a porous cactus mix.",
      temperature: "Protect from frost and prolonged cold moisture.",
      fertilizer: "Fertilize lightly during active growth."
    }
  },
  {
    id: "lobivia-bruchii",
    commonName: "Lobivia bruchii",
    scientificName: "Lobivia bruchii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small globular cactus that may form clumps with age.",
    hardinessAndNativeRange: "Associated with South American, particularly Andean, habitats. Verify the accepted name and precise distribution.",
    specialTraits: "Lobivia-type cacti are known for colourful flowers that can be large relative to the plant.",
    care: {
      sunlight: "Provide bright light and some direct sun after acclimation.",
      watering: "Water during active growth and avoid standing water.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Protect from frost and prolonged dampness.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },

  // Set 13 — Species 261–275
  {
    id: "hylocereus-undatus",
    commonName: "Dragon Fruit Cactus",
    scientificName: "Selenicereus undatus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A climbing or sprawling cactus with long, three-angled stems that may develop aerial roots.",
    hardinessAndNativeRange: "Originates from tropical America and is widely cultivated in tropical and subtropical regions.",
    specialTraits: "Produces large night-blooming flowers and edible dragon fruit under suitable conditions.",
    care: {
      sunlight: "Provide bright light and partial sun, with protection from extreme heat.",
      watering: "Water during active growth while allowing excess water to drain.",
      soilAndPotting: "Use a well-draining, organic-mineral mix and provide a sturdy support.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Feed during active growth using a balanced fertilizer suitable for fruiting cacti."
    }
  },
  {
    id: "hylocereus-costaricensis",
    commonName: "Costa Rican Dragon Fruit Cactus",
    scientificName: "Selenicereus costaricensis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A climbing cactus with long, trailing or climbing stems.",
    hardinessAndNativeRange: "Associated with Central America and cultivated in tropical regions. Verify the accepted name and native distribution.",
    specialTraits: "Known in cultivation for its colourful fruit, often with red flesh.",
    care: {
      sunlight: "Provide bright light with some protection from intense midday heat.",
      watering: "Water during growth while maintaining good drainage.",
      soilAndPotting: "Use a well-draining mix and sturdy climbing support.",
      temperature: "Maintain warm conditions and protect from frost.",
      fertilizer: "Apply balanced fertilizer during active growth."
    }
  },
  {
    id: "selenicereus-grandiflorus",
    commonName: "Queen of the Night Cactus",
    scientificName: "Selenicereus grandiflorus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A climbing cactus with long, slender, trailing stems.",
    hardinessAndNativeRange: "Native range includes parts of the Caribbean and tropical America; verify the precise distribution.",
    specialTraits: "Famous for its very large, fragrant flowers that open at night and are short-lived.",
    care: {
      sunlight: "Provide bright filtered light or gentle morning sun.",
      watering: "Water during active growth and avoid leaving roots saturated.",
      soilAndPotting: "Use a well-draining mix with support for climbing stems.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Use diluted fertilizer during active growth."
    }
  },
  {
    id: "selenicereus-pteranthus",
    commonName: "Selenicereus pteranthus",
    scientificName: "Selenicereus pteranthus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A climbing or trailing cactus with elongated stems.",
    hardinessAndNativeRange: "Verify the accepted name and precise native range before publication.",
    specialTraits: "Selenicereus species are climbing cacti known for their large, often night-opening flowers.",
    care: {
      sunlight: "Provide bright filtered light and avoid abrupt exposure to harsh sun.",
      watering: "Water during growth and allow excess water to drain.",
      soilAndPotting: "Use a well-draining mix and provide support if grown vertically.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Apply diluted fertilizer during active growth."
    }
  },
  {
    id: "epiphyllum-oxypetalum",
    commonName: "Queen of the Night",
    scientificName: "Epiphyllum oxypetalum",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with long, flattened, leaf-like stems.",
    hardinessAndNativeRange: "Native to tropical regions of the Americas; verify the precise natural distribution.",
    specialTraits: "Produces very large, fragrant white flowers that generally open at night.",
    care: {
      sunlight: "Provide bright indirect light or gentle morning sun.",
      watering: "Water when the upper growing medium begins to dry, without allowing prolonged saturation.",
      soilAndPotting: "Use an airy, well-draining epiphytic cactus mix.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    }
  },
  {
    id: "epiphyllum-ackermannii",
    commonName: "Epiphyllum ackermannii",
    scientificName: "Epiphyllum ackermannii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with flattened or elongated stems.",
    hardinessAndNativeRange: "Check the current accepted name and native distribution; this name has a complicated history in cultivation.",
    specialTraits: "Plants sold under this name are associated with colourful, showy flowers; confirm the identification.",
    care: {
      sunlight: "Provide bright filtered light.",
      watering: "Keep the mix lightly moist during active growth but never waterlogged.",
      soilAndPotting: "Use an airy epiphytic cactus substrate.",
      temperature: "Protect from frost and cold drafts.",
      fertilizer: "Feed lightly during active growth."
    }
  },
  {
    id: "epiphyllum-anguliger",
    commonName: "Fishbone Cactus",
    scientificName: "Disocactus anguliger",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with flattened stems and deeply notched edges.",
    hardinessAndNativeRange: "Native to Mexico. Formerly widely known as Epiphyllum anguliger.",
    specialTraits: "Its zigzag, fishbone-like stems make it popular as an indoor ornamental plant.",
    care: {
      sunlight: "Provide bright indirect light.",
      watering: "Water when the upper mix begins to dry and avoid standing water.",
      soilAndPotting: "Use an airy, well-draining epiphytic cactus mix.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    }
  },
  {
    id: "disocactus-flagelliformis",
    commonName: "Rat Tail Cactus",
    scientificName: "Disocactus flagelliformis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A trailing cactus with long, slender stems covered in small spines.",
    hardinessAndNativeRange: "Native to Mexico.",
    specialTraits: "Its cascading stems and bright pink to reddish flowers make it a popular hanging-basket plant.",
    care: {
      sunlight: "Provide bright light and some gentle direct sun.",
      watering: "Water during active growth and allow excess water to drain.",
      soilAndPotting: "Use a well-draining cactus mix suitable for trailing growth.",
      temperature: "Protect from frost and prolonged cold.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "disocactus-phyllanthoides",
    commonName: "Disocactus phyllanthoides",
    scientificName: "Disocactus phyllanthoides",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with flattened stems and a branching growth habit.",
    hardinessAndNativeRange: "Associated with Mexico and cultivated widely; verify the precise native range.",
    specialTraits: "It is known for showy flowers and is associated with horticultural orchid-cactus hybrids.",
    care: {
      sunlight: "Provide bright filtered light.",
      watering: "Water during growth while allowing the mix to drain freely.",
      soilAndPotting: "Use an airy epiphytic cactus substrate.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Use diluted fertilizer during active growth."
    }
  },
  {
    id: "schlumbergera-truncata",
    commonName: "Thanksgiving Cactus",
    scientificName: "Schlumbergera truncata",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with arching stems made up of flattened, toothed segments.",
    hardinessAndNativeRange: "Native to southeastern Brazil, where it grows in humid forest habitats.",
    specialTraits: "Often flowers around late autumn and winter; its pointed segment edges distinguish it from some relatives.",
    care: {
      sunlight: "Provide bright indirect light.",
      watering: "Water when the surface of the mix begins to dry, avoiding waterlogging.",
      soilAndPotting: "Use a light, airy, well-draining epiphytic mix.",
      temperature: "Protect from frost and extreme heat.",
      fertilizer: "Feed lightly during active growth."
    }
  },
  {
    id: "schlumbergera-bridgesii",
    commonName: "Christmas Cactus",
    scientificName: "Schlumbergera russelliana",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with arching stems composed of flattened segments.",
    hardinessAndNativeRange: "Native to southeastern Brazil. Schlumbergera bridgesii is a historical name often used in horticulture.",
    specialTraits: "It is associated with the Christmas cactus group and can produce colourful seasonal flowers.",
    care: {
      sunlight: "Provide bright indirect light.",
      watering: "Water when the upper mix begins to dry and avoid standing water.",
      soilAndPotting: "Use an airy epiphytic cactus mix.",
      temperature: "Protect from frost and sudden temperature extremes.",
      fertilizer: "Apply diluted fertilizer during active growth."
    }
  },
  {
    id: "schlumbergera-gaertneri",
    commonName: "Easter Cactus",
    scientificName: "Schlumbergera gaertneri",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with flattened, jointed stems and a branching habit.",
    hardinessAndNativeRange: "Native to southeastern Brazil.",
    specialTraits: "Typically flowers in spring and has star-shaped flowers with pointed petals.",
    care: {
      sunlight: "Provide bright indirect light.",
      watering: "Water when the upper growing medium begins to dry.",
      soilAndPotting: "Use an airy, well-draining epiphytic mix.",
      temperature: "Protect from frost and prolonged cold.",
      fertilizer: "Feed lightly during active growth."
    }
  },
  {
    id: "rhipsalis-baccifera",
    commonName: "Mistletoe Cactus",
    scientificName: "Rhipsalis baccifera",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with long, thin, branching stems that hang from trees or containers.",
    hardinessAndNativeRange: "Occurs in tropical regions of the Americas and also in parts of Africa and nearby islands.",
    specialTraits: "Produces small pale flowers followed by rounded, berry-like fruits.",
    care: {
      sunlight: "Provide bright indirect light or light shade.",
      watering: "Water when the mix begins to dry slightly; avoid prolonged drought and waterlogging.",
      soilAndPotting: "Use an airy, moisture-retentive but well-draining epiphytic mix.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Apply diluted balanced fertilizer during active growth."
    }
  },
  {
    id: "rhipsalis-cereuscula",
    commonName: "Rice Cactus",
    scientificName: "Rhipsalis cereuscula",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with many short, cylindrical, branching stems.",
    hardinessAndNativeRange: "Native to South America. Verify the precise distribution before publication.",
    specialTraits: "Its clusters of short stems can resemble grains of rice, especially in young growth.",
    care: {
      sunlight: "Provide bright indirect light.",
      watering: "Water when the upper mix begins to dry without leaving roots waterlogged.",
      soilAndPotting: "Use an airy, well-draining epiphytic mix.",
      temperature: "Protect from frost and cold drafts.",
      fertilizer: "Apply diluted fertilizer during active growth."
    }
  },
  {
    id: "lepismium-cruciforme",
    commonName: "Lepismium cruciforme",
    scientificName: "Lepismium cruciforme",
    subfamily: "Cactoideae",
    growthHabitAndSize: "An epiphytic cactus with branching, flattened or angled stems that can trail.",
    hardinessAndNativeRange: "Native to South America; verify its precise distribution.",
    specialTraits: "Its segmented stems and epiphytic habit distinguish it from desert-dwelling cacti.",
    care: {
      sunlight: "Provide bright filtered light or light shade.",
      watering: "Water when the upper mix begins to dry, maintaining airflow around the roots.",
      soilAndPotting: "Use a light, airy epiphytic cactus mix.",
      temperature: "Keep warm and protect from frost.",
      fertilizer: "Fertilize lightly during active growth."
    }
  },

  // Set 14 — Species 276–290
  {
    id: "ariocarpus-fissuratus",
    commonName: "Living Rock Cactus",
    scientificName: "Ariocarpus fissuratus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slow-growing, flattened cactus with broad, triangular tubercles.",
    hardinessAndNativeRange: "Native to parts of the southwestern United States and northern Mexico.",
    specialTraits: "Its rough, rock-like appearance helps it blend into its natural habitat.",
    care: {
      sunlight: "Provide bright light and gradually acclimate to direct sun.",
      watering: "Water cautiously during warm growth periods and keep nearly dry in cool conditions.",
      soilAndPotting: "Use a highly mineral substrate with excellent drainage.",
      temperature: "Protect from frost when the soil is wet.",
      fertilizer: "Fertilize very sparingly during active growth."
    }
  },
  {
    id: "ariocarpus-retusus",
    commonName: "Ariocarpus retusus",
    scientificName: "Ariocarpus retusus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slow-growing, flattened to rounded cactus with broad, triangular tubercles.",
    hardinessAndNativeRange: "Native to northeastern Mexico.",
    specialTraits: "Its sculptural body and seasonal flowers make it a sought-after collector's cactus.",
    care: {
      sunlight: "Provide bright light with careful acclimation to direct sun.",
      watering: "Water sparingly during active growth and avoid winter moisture.",
      soilAndPotting: "Use a very mineral, fast-draining substrate.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Apply a weak fertilizer sparingly during growth."
    }
  },
  {
    id: "ariocarpus-trigonus",
    commonName: "Ariocarpus trigonus",
    scientificName: "Ariocarpus trigonus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A slow-growing cactus with a flattened body and elongated triangular tubercles.",
    hardinessAndNativeRange: "Native to Mexico. Verify the precise range and conservation status.",
    specialTraits: "Its raised triangular tubercles give the plant a distinctive geometric appearance.",
    care: {
      sunlight: "Provide bright light and gradual acclimation to direct sun.",
      watering: "Water cautiously during growth and keep dry in cold conditions.",
      soilAndPotting: "Use a mineral-rich, sharply draining substrate.",
      temperature: "Protect from frost and prolonged dampness.",
      fertilizer: "Fertilize sparingly during active growth."
    }
  },
  {
    id: "astrophytum-asterias",
    commonName: "Sand Dollar Cactus",
    scientificName: "Astrophytum asterias",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A small, flattened, spineless cactus with a round body divided into distinct ribs.",
    hardinessAndNativeRange: "Native to southern Texas and northeastern Mexico; populations are conservation-sensitive.",
    specialTraits: "Its star-shaped outline and white flecks make it readily recognizable.",
    care: {
      sunlight: "Provide bright light and avoid sudden exposure to intense sun.",
      watering: "Water carefully during warm growth periods and avoid waterlogged soil.",
      soilAndPotting: "Use a very porous, mineral-rich cactus mix.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Apply diluted cactus fertilizer sparingly."
    }
  },
  {
    id: "astrophytum-myriostigma",
    commonName: "Bishop's Cap Cactus",
    scientificName: "Astrophytum myriostigma",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A usually spineless globular cactus with prominent ribs and a gradually columnar form in some plants.",
    hardinessAndNativeRange: "Native to northeastern and central Mexico.",
    specialTraits: "Its ribbed body and white speckling create a bishop's-cap-like shape.",
    care: {
      sunlight: "Provide bright light and gradually introduce direct sun.",
      watering: "Water during active growth and allow the substrate to dry appropriately.",
      soilAndPotting: "Use a well-draining mineral cactus mix.",
      temperature: "Protect from frost and prolonged dampness.",
      fertilizer: "Fertilize lightly during active growth."
    }
  },
  {
    id: "astrophytum-ornatum",
    commonName: "Monk's Hood Cactus",
    scientificName: "Astrophytum ornatum",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A ribbed cactus that can develop a tall, columnar shape with age.",
    hardinessAndNativeRange: "Native to Mexico.",
    specialTraits: "Its white flecks, prominent ribs, and long spines are characteristic features.",
    care: {
      sunlight: "Provide strong light and gradually acclimate to direct sun.",
      watering: "Water during growth and avoid standing water.",
      soilAndPotting: "Use a well-draining mineral substrate.",
      temperature: "Protect from frost and prolonged cold moisture.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "astrophytum-capricorne",
    commonName: "Goat's Horn Cactus",
    scientificName: "Astrophytum capricorne",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular to short-columnar cactus with long, curved spines.",
    hardinessAndNativeRange: "Native to northern Mexico.",
    specialTraits: "Its twisted, horn-like spines and yellow flowers with reddish centres are distinctive.",
    care: {
      sunlight: "Provide bright light and gradual acclimation to direct sun.",
      watering: "Water during active growth and allow excess water to drain.",
      soilAndPotting: "Use a porous cactus mix.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "thelocactus-bicolor",
    commonName: "Thelocactus bicolor",
    scientificName: "Thelocactus bicolor",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular to short-columnar cactus with pronounced ribs and strong spines.",
    hardinessAndNativeRange: "Native to northern Mexico and parts of Texas.",
    specialTraits: "Its spines can show contrasting colours, and it produces conspicuous flowers.",
    care: {
      sunlight: "Provide bright light and some direct sun after acclimation.",
      watering: "Water during growth and allow the substrate to drain thoroughly.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Protect from frost and prolonged cold moisture.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "thelocactus-hexaedrophorus",
    commonName: "Thelocactus hexaedrophorus",
    scientificName: "Thelocactus hexaedrophorus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A compact globular cactus with tubercle-like ribs and prominent spines.",
    hardinessAndNativeRange: "Native to Mexico. Verify its precise distribution.",
    specialTraits: "Its geometric tubercles and conspicuous flowers are characteristic of the genus.",
    care: {
      sunlight: "Provide bright light and gradual acclimation to direct sun.",
      watering: "Water during active growth and avoid waterlogged soil.",
      soilAndPotting: "Use a porous mineral cactus substrate.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Fertilize lightly during active growth."
    }
  },
  {
    id: "thelocactus-rinconensis",
    commonName: "Thelocactus rinconensis",
    scientificName: "Thelocactus rinconensis",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular cactus with pronounced ribs, tubercles, and prominent spines.",
    hardinessAndNativeRange: "Associated with northern Mexico; verify the accepted name and exact distribution.",
    specialTraits: "Its rib structure and spines provide useful identification features.",
    care: {
      sunlight: "Provide bright light and gradually acclimate to direct sun.",
      watering: "Water during growth and allow the soil to drain well.",
      soilAndPotting: "Use a well-draining cactus mix.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "ferocactus-glaucescens",
    commonName: "Blue Barrel Cactus",
    scientificName: "Ferocactus glaucescens",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A globular to barrel-shaped cactus with a blue-green body and strong spines.",
    hardinessAndNativeRange: "Native to Mexico.",
    specialTraits: "Its bluish epidermis, prominent ribs, and yellow flowers are distinctive.",
    care: {
      sunlight: "Provide abundant light and gradually acclimate to direct sun.",
      watering: "Water thoroughly during active growth and allow the substrate to dry.",
      soilAndPotting: "Use a mineral-rich cactus mix with excellent drainage.",
      temperature: "Protect from frost and prolonged dampness.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "ferocactus-latispinus",
    commonName: "Devil's Tongue Barrel Cactus",
    scientificName: "Ferocactus latispinus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A barrel-shaped cactus with broad, flattened central spines.",
    hardinessAndNativeRange: "Native to Mexico.",
    specialTraits: "Its wide, hooked central spines and colourful flowers are characteristic.",
    care: {
      sunlight: "Provide abundant light and acclimate gradually to full sun.",
      watering: "Water during growth and avoid prolonged soil moisture.",
      soilAndPotting: "Use a well-draining mineral cactus mix.",
      temperature: "Protect from frost and cold, wet conditions.",
      fertilizer: "Use diluted cactus fertilizer during active growth."
    }
  },
  {
    id: "ferocactus-cylindraceus",
    commonName: "California Barrel Cactus",
    scientificName: "Ferocactus cylindraceus",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A barrel cactus that can become cylindrical and grow substantially taller with age.",
    hardinessAndNativeRange: "Native to the southwestern United States and northwestern Mexico.",
    specialTraits: "It has strong, often hooked spines and is adapted to desert conditions.",
    care: {
      sunlight: "Provide full sun after gradual acclimation.",
      watering: "Water during warm growth periods and let the substrate dry thoroughly.",
      soilAndPotting: "Use a fast-draining mineral substrate.",
      temperature: "Protect from frost when grown in containers, especially in wet soil.",
      fertilizer: "Fertilize sparingly during active growth."
    }
  },
  {
    id: "ferocactus-wislizeni",
    commonName: "Fishhook Barrel Cactus",
    scientificName: "Ferocactus wislizeni",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A large barrel-shaped cactus with pronounced ribs and curved central spines.",
    hardinessAndNativeRange: "Native to the southwestern United States and northern Mexico.",
    specialTraits: "Its hooked spines and tendency to lean toward the sun make it distinctive.",
    care: {
      sunlight: "Provide full sun after gradual acclimation.",
      watering: "Water during active growth and allow the substrate to dry thoroughly.",
      soilAndPotting: "Use a mineral-rich, well-draining cactus mix.",
      temperature: "Protect container-grown plants from severe frost and cold, wet soil.",
      fertilizer: "Apply diluted cactus fertilizer sparingly during active growth."
    }
  },
  {
    id: "echinocactus-grusonii",
    commonName: "Golden Barrel Cactus",
    scientificName: "Echinocactus grusonii",
    subfamily: "Cactoideae",
    growthHabitAndSize: "A rounded barrel cactus that can become large and develop numerous ribs.",
    hardinessAndNativeRange: "Native to Mexico; its natural populations are conservation-sensitive.",
    specialTraits: "Dense golden-yellow spines give it its familiar name and distinctive appearance.",
    care: {
      sunlight: "Provide abundant light and gradually acclimate to direct sun.",
      watering: "Water thoroughly during active growth and allow the soil to dry between waterings.",
      soilAndPotting: "Use a fast-draining mineral cactus mix and a pot with drainage holes.",
      temperature: "Protect from frost and prolonged cold, wet conditions.",
      fertilizer: "Apply diluted cactus fertilizer during active growth."
    }
  },
];

export default cactusSpecies;
