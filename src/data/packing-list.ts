import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const PUERTO_RICO_ESSENTIALS: PackingItem[] = [
  { id: 'pr-sunscreen', name: 'Reef-Safe Sunscreen', category: 'destination', description: 'Puerto Rico\'s marine reserves and bioluminescent bays ask for reef-safe sunscreen. La Parguera and Mosquito Bay are sensitive ecosystems — zinc oxide or titanium dioxide only in the water.', essential: true, amazonSearchFallback: 'reef+safe+mineral+sunscreen+zinc+oxide', affiliatePrice: '$12–22' },
  { id: 'pr-repellent', name: 'Insect Repellent (DEET)', category: 'destination', description: 'El Yunque rainforest mosquitoes are aggressive and dengue has been present. DEET-based repellent for any forest or inland activity.', essential: true, amazonSearchFallback: 'deet+insect+repellent+tropical', affiliatePrice: '$8–15' },
  { id: 'pr-hikeshoes', name: 'Trail Running Shoes / Hiking Shoes', category: 'destination', description: 'El Yunque rainforest trails are muddy and steep. Mosquito Bay kayaking requires solid footwear in and out of kayaks. Beach sandals won\'t cut it for anything beyond the resort.', essential: false, amazonSearchFallback: 'trail+running+shoes+waterproof+hiking' },
  { id: 'pr-drybag', name: 'Dry Bag (10–20L)', category: 'destination', description: 'Bioluminescent bay kayaking, snorkeling at Culebra, and boat trips to Vieques — your gear gets wet regularly in Puerto Rico. A dry bag is essential for protecting electronics.', essential: true, amazonSearchFallback: 'dry+bag+10l+20l+waterproof', affiliatePrice: '$15–30' },
];

export const PUERTO_RICO_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-pr-sunscreen', name: 'Reef-Safe Mineral Sunscreen', reason: 'Puerto Rico\'s bioluminescent bays (Mosquito Bay, La Parguera) and coral reefs are protected ecosystems. Reef-safe sunscreen isn\'t just recommended — it\'s the responsible choice that keeps these places open for swimming.', amazonSearchFallback: 'reef+safe+mineral+sunscreen+zinc+oxide', affiliatePrice: '~$16' },
  { id: 'gr-pr-repellent', name: 'DEET Insect Repellent', reason: 'El Yunque has aggressive mosquitoes year-round. Dengue has been documented in Puerto Rico. DEET every evening and on any rainforest excursion — it\'s the difference between enjoying El Yunque and suffering through it.', amazonSearchFallback: 'deet+insect+repellent+tropical+30+percent', affiliatePrice: '~$9' },
  { id: 'gr-pr-drybag', name: 'Dry Bag (20L)', reason: 'Culebra snorkeling, Vieques bio bay kayaking, and boat trips to Isla de Mona all put your electronics at water risk. A $20 dry bag protects a $1,000 camera every single time.', amazonSearchFallback: 'dry+bag+20l+waterproof+roll+top', affiliatePrice: '~$22' },
  { id: 'gr-pr-snorkel', name: 'Snorkel Mask (own, not rental)', reason: 'Culebra\'s Flamenco Beach and Vieques are world-class snorkeling. Your own mask fits better, seals properly, and you\'ll use it without hesitation instead of debating rental hygiene.', amazonSearchFallback: 'snorkel+mask+anti+fog+adult', affiliatePrice: '~$30' },
  { id: 'gr-pr-waterbottle', name: 'Insulated Water Bottle', reason: 'Puerto Rico\'s tropical heat combined with hiking El Yunque requires constant hydration. Puerto Rico has excellent municipal water — fill your bottle constantly and skip single-use plastic.', amazonSearchFallback: 'insulated+water+bottle+32oz', affiliatePrice: '~$25' },
];

export const PUERTO_RICO_CONFIG: PackingConfig = {
  sitePrefix: 'dpr',
  destination: 'Puerto Rico',
  climate: ['tropical', 'coastal'],
  currency: 'USD',
  plugType: 'Type A/B',
  plugVoltage: '120V',
  affiliateTag: 'discovermore-20',
  destinationEssentials: PUERTO_RICO_ESSENTIALS,
  gearRecommendations: PUERTO_RICO_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = PUERTO_RICO_CONFIG;

export const PUERTO_RICO_PACKING_FAQS = [
  { question: 'What should I pack for Puerto Rico?', answer: 'The essentials are reef-safe sunscreen (protecting the bioluminescent bays and coral reefs), DEET insect repellent (dengue risk in El Yunque), a dry bag for kayaking and snorkeling, and trail shoes for rainforest hikes. Puerto Rico is US territory — no passport or power adapter needed for Americans.' },
  { question: 'Do I need a passport to visit Puerto Rico?', answer: 'No — US citizens and residents travel to Puerto Rico without a passport, as it\'s a US territory. US dollars are the currency, the same plugs and voltage work (120V Type A/B), and no visa is required. Non-US citizens need the same documentation as entering the United States.' },
  { question: 'What power adapter do I need for Puerto Rico?', answer: 'None — Puerto Rico uses standard US Type A/B plugs at 120V/60Hz, identical to the continental US. All American devices work without modification.' },
  { question: 'Is the water safe to drink in Puerto Rico?', answer: 'Yes — Puerto Rico has municipal water infrastructure and tap water is generally safe to drink in San Juan and established tourist areas. The system was damaged in Hurricane Maria (2017) and has been substantially restored. However, if traveling to remote rural areas, carry a water bottle and check locally.' },
  { question: 'What should I pack for the bioluminescent bays in Puerto Rico?', answer: 'Dark-colored, reef-safe swimwear (light colors can affect the bio-luminescence), reef-safe sunscreen applied well before entry, water shoes if available, and a dry bag for your phone and camera. No sunscreen, lotions, or bug spray in the water. The bays are most spectacular on moonless nights.' },
  { question: 'What should I NOT bring to Puerto Rico?', answer: 'Skip chemical sunscreen (reef-safe is the right choice for bio bays and coral), heavy clothing (Puerto Rico is tropical year-round), and unnecessary electronics for beach days. Also leave bulky luggage — Culebra and Vieques island ferries have strict weight limits and small planes use weight-based ticketing.' },
];
