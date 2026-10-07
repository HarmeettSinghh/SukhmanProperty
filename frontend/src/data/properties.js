// ─── SUKHMAN PROPERTY — PROPERTY DATA ───────────────────────────────────────
// Replace with real data or connect to a backend API later.
// Unsplash images used as placeholders — replace with actual photos.

export const PROPERTY_CATEGORIES = [
  { id: 'plots',       label: 'Plots & Land' },
  { id: 'residential', label: 'Flats & Residential' },
  { id: 'commercial',  label: 'Commercial' },
  { id: 'rental',      label: 'Rental' },
];

export const PROPERTIES = [
  {
    id: 5,
    slug: 'amolik-residency-plot-30-sector-86-greater-faridabad',
    title: 'Amolik Residency — Plot No. 30',
    location: 'Plot No. 30, Sector 86, Greater Faridabad',
    city: 'Faridabad',
    category: 'plots',
    type: 'buy',
    price: 'Price on Request',
    priceValue: 8500000,
    area: 'Plot No. 30',
    beds: null,
    baths: null,
    parking: null,
    featured: true,
    new: true,
    image: '/images/amolik-residency.jpg',
    images: [
      '/images/amolik-residency.jpg',
    ],
    description: 'Prime residential plot No. 30 in Amolik Residency, Sector 86, Greater Faridabad. Situated inside a fully developed, secure gated community with landscaped surroundings and modern civic amenities. Excellently connected — situated close to Accord Super Speciality Hospital, Delhi-Mumbai Expressway, renowned schools, and bustling retail markets. Perfect for constructing your bespoke luxury family home or securing a prime land asset in Greater Faridabad.',
    amenities: [
      'Plot No. 30',
      'Near Accord Hospital',
      'Near Delhi-Mumbai Expressway',
      'Near Famous Schools',
      'Near Market & Shopping',
      'Fully Developed Society',
      'Gated Community & 24/7 Security',
      'Wide Roads & Green Belts',
    ],
  },
  {
    id: 4,
    slug: 'rasa-phase-2-palwal',
    title: 'RASA Phase 2 — Plots',
    location: 'Sector 10, Sohna Road, Palwal',
    city: 'Palwal',
    category: 'plots',
    type: 'buy',
    price: 'From ₹28.5K/sq yd',
    priceValue: 5000000,
    area: 'Multiple sizes',
    beds: null,
    baths: null,
    parking: null,
    featured: true,
    new: true,
    image: '/images/rasa-phase2.jpg',
    images: [
      '/images/rasa-phase2.jpg',
    ],
    description: 'RASA Phase 2 — a premium plotted development by Rasa Enclave in Palwal Sector 10, Sohna Road. Residential plots starting at ₹50,000/sq yd and Industrial plots at ₹28,500/sq yd. Strategically located near KMP Expressway, Jewar Airport, and Palwal Market — one of the fastest-appreciating micro-markets in Delhi NCR.',
    amenities: ['Residential Plots @ ₹50K/sq yd', 'Industrial Plots @ ₹28.5K/sq yd', 'Near KMP Expressway', 'Close to Jewar Airport', 'Near Palwal Market', 'Excellent Connectivity'],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajveer Singh Bhatia',
    role: 'Purchased 4BHK Villa, Faridabad',
    text: 'Sukhman Property made our dream home a reality. Their team was professional, patient, and understood exactly what we were looking for. We found our perfect home in just three weeks!',
    avatar: 'RS',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'Sold Commercial Space, Noida',
    text: 'Exceptional service from start to finish. They got us the best price for our Sector 62 office in a very short time. Highly recommended for commercial real estate.',
    avatar: 'PM',
    rating: 5,
  },
  {
    id: 3,
    name: 'Harpreet Kaur',
    role: 'Rented apartment, Gurugram',
    text: 'Found a beautiful apartment within my budget quickly. The team is trustworthy and transparent — no hidden charges, everything was as discussed. Great experience overall!',
    avatar: 'HK',
    rating: 5,
  },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Residential Sales',
    description: 'Premium homes, apartments, villas and builder floors across Delhi NCR. We match you with the perfect home for your lifestyle and budget.',
  },
  {
    id: 2,
    title: 'Commercial Properties',
    description: 'Office spaces, retail showrooms, SCOs, and commercial plots in prime business locations across the region.',
  },
  {
    id: 3,
    title: 'Rental Services',
    description: 'Residential and commercial rental solutions for tenants and landlords. We handle agreements, vetting, and documentation.',
  },
  {
    id: 4,
    title: 'Plots & Land',
    description: 'HUDA and private residential plots, agricultural land, and commercial plots in developing sectors and urban extensions.',
  },
  {
    id: 5,
    title: 'Property Valuation',
    description: 'Accurate, unbiased market valuation for residential and commercial properties to help you make informed decisions.',
  },
  {
    id: 6,
    title: 'Documentation Help',
    description: 'End-to-end legal paperwork assistance including sale deeds, registry, mutation, and NOC processing.',
  },
];

export const LOCATIONS = [
  { name: 'Faridabad', count: 48, image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80' },
  { name: 'Delhi NCR', count: 64, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80' },
  { name: 'Gurugram',  count: 32, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80' },
  { name: 'Noida',     count: 27, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80' },
];

export default PROPERTIES;
