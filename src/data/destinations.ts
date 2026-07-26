export interface LocalHost {
  id: string;
  name: string;
  role: string;
  location: string;
  story: string;
  impactNeeds: string;
  suggestedTipInr: number;
  suggestedTipUsd: number;
  avatarUrl: string;
  upiId: string;
  verified: boolean;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  state: string;
  coordinates: string;
  altitude: string;
  terrain: string;
  bestSeason: string;
  description: string;
  highlights: string[];
  safetyGrade: string;
  vettingScore: number;
  domesticPassRequired: boolean;
  ilpRequired: boolean;
  hosts: LocalHost[];
  imageUrl: string;
}

export const NEW_FOUND_DESTINATIONS: Destination[] = [
  {
    id: "ziro-valley",
    name: "Ziro Valley",
    region: "Sacred East / Frontier",
    state: "Arunachal Pradesh",
    coordinates: "27.5387° N, 93.8385° E",
    altitude: "1,560 m",
    terrain: "Pine Hills & Paddy Ponds",
    bestSeason: "Sept - April",
    description: "Home to the indigenous Apatani tribe known for sustainable wet-rice aquaculture, facial tattoos, and organic bamboo engineering.",
    highlights: ["Apatani Cultural Homestays", "Pine-clad Treks", "Organically Cultivated Paddy Fish", "Ancient Bamboo Architecture"],
    safetyGrade: "AA+ Verified",
    vettingScore: 98,
    domesticPassRequired: true,
    ilpRequired: true,
    imageUrl: "/nagaland-tribal-heritage.jpg",
    hosts: [
      {
        id: "host-ziro-1",
        name: "Kojin Apatani",
        role: "Village Eco-Guide & Weaver",
        location: "Hong Village, Ziro",
        story: "Preserves traditional Apatani handloom weaving and guides solo trekkers through sacred groves.",
        impactNeeds: "Funds organic cotton thread sets and bamboo loom repair.",
        suggestedTipInr: 250,
        suggestedTipUsd: 3,
        avatarUrl: "/nagaland-tribal-heritage.jpg",
        upiId: "kojin.apatani@upi",
        verified: true
      },
      {
        id: "host-ziro-2",
        name: "Tage Taku",
        role: "Fish-Paddy Agronomist Host",
        location: "Hari Village, Ziro",
        story: "Teaches solo travellers zero-chemical paddy cultivation and bamboo fish trapping.",
        impactNeeds: "Solar lantern for night farm monitoring.",
        suggestedTipInr: 350,
        suggestedTipUsd: 5,
        avatarUrl: "/nagaland-tribal-heritage.jpg",
        upiId: "tagetaku@upi",
        verified: true
      }
    ]
  },
  {
    id: "spiti-valley",
    name: "Spiti & Pin Valley",
    region: "High-Altitude Trans-Himalaya",
    state: "Himachal Pradesh",
    coordinates: "32.2461° N, 78.0349° E",
    altitude: "3,800 m",
    terrain: "Cold Desert & High Passes",
    bestSeason: "May - Oct",
    description: "A stark, high-altitude lunar land with thousand-year-old monasteries perched on crumbling cliffs and snow leopard trackers.",
    highlights: ["Key & Dhankar Monasteries", "Kibber Snow Leopard Trail", "Mud Village Trek", "High Pass Navigation"],
    safetyGrade: "A+ Verified",
    vettingScore: 94,
    domesticPassRequired: false,
    ilpRequired: false,
    imageUrl: "/ladakh-prayer-flags.jpg",
    hosts: [
      {
        id: "host-spiti-1",
        name: "Lobsang Dorje",
        role: "Monastic Guide & Tea Keeper",
        location: "Kibber Village, Spiti",
        story: "Monastery historian who provides warm butter tea and emergency shelter to solo trekkers.",
        impactNeeds: "Insulated thermal boots for winter guiding.",
        suggestedTipInr: 300,
        suggestedTipUsd: 4,
        avatarUrl: "/ladakh-prayer-flags.jpg",
        upiId: "lobsang.spiti@upi",
        verified: true
      },
      {
        id: "host-spiti-2",
        name: "Tenzin Chokey",
        role: "Wildlife Tracker & Yak Porter",
        location: "Langza Village",
        story: "Spiti native with 15 years tracking high-altitude fauna and assisting solo photographers.",
        impactNeeds: "GPS battery pack & cold-weather radio.",
        suggestedTipInr: 500,
        suggestedTipUsd: 6,
        avatarUrl: "/ladakh-prayer-flags.jpg",
        upiId: "tenzin.wildlife@upi",
        verified: true
      }
    ]
  },
  {
    id: "gurez-valley",
    name: "Gurez Valley",
    region: "Northern Borderland",
    state: "Jammu & Kashmir",
    coordinates: "34.6346° N, 74.8432° E",
    altitude: "2,400 m",
    terrain: "Alpine River Corridor",
    bestSeason: "June - Sept",
    description: "Tucked along the Kishanganga River beneath Habba Khatoon peak, Gurez is the heartland of the ancient Dard-Shina culture.",
    highlights: ["Habba Khatoon Pyramid Peak", "Kishanganga Angling & Kayaking", "Dardic Wooden Hamlets", "Borderland Silent Trails"],
    safetyGrade: "AA Verified",
    vettingScore: 96,
    domesticPassRequired: true,
    ilpRequired: false,
    imageUrl: "/kerala-backwaters-houseboat.jpg",
    hosts: [
      {
        id: "host-gurez-1",
        name: "Farooq Shina",
        role: "River Boatman & Cultural Storyteller",
        location: "Dawar, Gurez",
        story: "Guides solo wanderers along the pristine riverfront and shares oral Dardic poetry.",
        impactNeeds: "Life jackets & waterproof medical kit.",
        suggestedTipInr: 200,
        suggestedTipUsd: 2.5,
        avatarUrl: "/kerala-backwaters-houseboat.jpg",
        upiId: "farooq.gurez@upi",
        verified: true
      }
    ]
  },
  {
    id: "dawki-mawlynnong",
    name: "Dawki & Mawlynnong",
    region: "Khasi Hills Corridor",
    state: "Meghalaya",
    coordinates: "25.1878° N, 92.0169° E",
    altitude: "1,400 m",
    terrain: "Subtropical Rainforest & Canyon",
    bestSeason: "Oct - April",
    description: "The cleanest village in Asia paired with the transparent crystal waters of the Umngot River and living root suspension bridges.",
    highlights: ["Umngot Crystal Water Boat Navigation", "Living Root Bridges", "Khasi Matriarchal Homestays", "Bamboo Sky Walk"],
    safetyGrade: "AAA Pinnacle",
    vettingScore: 99,
    domesticPassRequired: false,
    ilpRequired: false,
    imageUrl: "/kerala-backwaters-houseboat.jpg",
    hosts: [
      {
        id: "host-dawki-1",
        name: "Bah Suklang",
        role: "Umngot Boatman & River Cleaner",
        location: "Dawki Riverfront",
        story: "Manually cleans the riverbed daily while rowing solo travellers across glass-like clear water.",
        impactNeeds: "Eco-friendly wood sealant for boat hull.",
        suggestedTipInr: 150,
        suggestedTipUsd: 2,
        avatarUrl: "/kerala-backwaters-houseboat.jpg",
        upiId: "suklang.boat@upi",
        verified: true
      },
      {
        id: "host-dawki-2",
        name: "Kong Pyntip",
        role: "Matriarchal Organic Homestay Host",
        location: "Mawlynnong",
        story: "Prepares wild herbal Khasi meals and maintains zero-waste sanitation protocols.",
        impactNeeds: "Rainwater filter system upgrade.",
        suggestedTipInr: 300,
        suggestedTipUsd: 4,
        avatarUrl: "/kerala-backwaters-houseboat.jpg",
        upiId: "kong.mawlynnong@upi",
        verified: true
      }
    ]
  },
  {
    id: "dholavira-rann",
    name: "Dholavira Citadel",
    region: "Great Rann of Kutch",
    state: "Gujarat",
    coordinates: "23.8864° N, 70.2185° E",
    altitude: "15 m",
    terrain: "White Salt Flats & Harappan Ruins",
    bestSeason: "Nov - Feb",
    description: "5,000-year-old Indus Valley metropolis with advanced water conservation reservoirs located inside the vast salt wilderness.",
    highlights: ["UNESCO Harappan Excavation Site", "Bhanjada Bet Salt Night Sky", "Fossil Park Treks", "Kutchi Hand-Embroidery"],
    safetyGrade: "AA Verified",
    vettingScore: 97,
    domesticPassRequired: false,
    ilpRequired: false,
    imageUrl: "/rajasthan-jewelled-hand.jpg",
    hosts: [
      {
        id: "host-dholavira-1",
        name: "Devji Bhai Rabari",
        role: "Desert Night Navigator & Historian",
        location: "Dholavira Village",
        story: "Rabari desert elder who navigates solo wanderers under star-filled salt flat skies.",
        impactNeeds: "Solar telescope lens maintenance & desert canteen.",
        suggestedTipInr: 250,
        suggestedTipUsd: 3,
        avatarUrl: "/rajasthan-jewelled-hand.jpg",
        upiId: "devjibhai.rann@upi",
        verified: true
      }
    ]
  },
  {
    id: "majuli-island",
    name: "Majuli Island",
    region: "Brahmaputra Riverine Basin",
    state: "Assam",
    coordinates: "26.9500° N, 94.1667° E",
    altitude: "84 m",
    terrain: "Riverine Wetland & Satras",
    bestSeason: "Oct - March",
    description: "The world's largest inhabited river island, famous for 15th-century Neo-Vaishnavite Satras, traditional clay masks, and migratory birding.",
    highlights: ["Satriya Mask Making Workshops", "Pottery without Wheels", "Brahmaputra Sunset Cycling", "Monastic Chanting Evenings"],
    safetyGrade: "AA+ Verified",
    vettingScore: 98,
    domesticPassRequired: false,
    ilpRequired: false,
    imageUrl: "/varanasi-sadhu-ghats.jpg",
    hosts: [
      {
        id: "host-majuli-1",
        name: "Hemchandra Goswami",
        role: "Traditional Mask Artisan & Guru",
        location: "Samaguri Satra, Majuli",
        story: "Master craftsman preserving 500-year-old bamboo-and-clay mask making techniques.",
        impactNeeds: "Natural pigment dyes & bamboo splitting tools.",
        suggestedTipInr: 400,
        suggestedTipUsd: 5,
        avatarUrl: "/varanasi-sadhu-ghats.jpg",
        upiId: "satramasks@upi",
        verified: true
      }
    ]
  },
  {
    id: "chembra-wayanad",
    name: "Chembra Hidden Trails",
    region: "Western Ghats Rainforest",
    state: "Kerala",
    coordinates: "11.5478° N, 76.0886° E",
    altitude: "2,100 m",
    terrain: "Mist-draped Rainforest & Tea Slopes",
    bestSeason: "Sept - May",
    description: "Heart-shaped mountain lake surrounded by dense evergreen canopy, pepper vines, and Kurichiya tribal tea gardens.",
    highlights: ["Heart-Shaped Lake Trek", "Kurichiya Indigenous Agro-Forestry", "Mist Canopy Solo Walks", "Spices & Organic Tea Tastings"],
    safetyGrade: "AAA Pinnacle",
    vettingScore: 99,
    domesticPassRequired: false,
    ilpRequired: false,
    imageUrl: "/kerala-backwaters-houseboat.jpg",
    hosts: [
      {
        id: "host-chembra-1",
        name: "Vellan Kurichiya",
        role: "Indigenous Forest Tracker & Herbalist",
        location: "Meppadi Slopes, Wayanad",
        story: "Tribal elder knowledgeable in rainforest medicinal flora and safe solo trail clearing.",
        impactNeeds: "Rain-gear & eco-friendly trail markers.",
        suggestedTipInr: 200,
        suggestedTipUsd: 2.5,
        avatarUrl: "/kerala-backwaters-houseboat.jpg",
        upiId: "vellan.wayanad@upi",
        verified: true
      }
    ]
  },
  {
    id: "shekhawati-corridor",
    name: "Shekhawati Fresco Haveli Corridor",
    region: "Royal Rajputana Frontier",
    state: "Rajasthan",
    coordinates: "27.6105° N, 75.1408° E",
    altitude: "420 m",
    terrain: "Arid Heritage Belt",
    bestSeason: "Oct - March",
    description: "The world's largest open-air art gallery featuring 19th-century merchant havelis painted with intricate vegetable-dye murals.",
    highlights: ["Nawalgarh & Mandawa Haveli Audits", "Fresco Restoration Techniques", "Camel Cart Twilight Safaris", "Heritage Gate Preservation"],
    safetyGrade: "AA+ Verified",
    vettingScore: 97,
    domesticPassRequired: false,
    ilpRequired: false,
    imageUrl: "/rajasthan-jewelled-hand.jpg",
    hosts: [
      {
        id: "host-shekhawati-1",
        name: "Ramswaroop Chitraka",
        role: "Haveli Fresco Restorer & Keyholder",
        location: "Nawalgarh, Shekhawati",
        story: "Third-generation fresco painter restoring decaying lime-mortar walls for solo heritage lovers.",
        impactNeeds: "Mineral pigments, natural oils, and scaffolding safety harness.",
        suggestedTipInr: 300,
        suggestedTipUsd: 4,
        avatarUrl: "/rajasthan-jewelled-hand.jpg",
        upiId: "ramswaroop.fresco@upi",
        verified: true
      }
    ]
  }
];
