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
  }
];

export default cactusSpecies;
