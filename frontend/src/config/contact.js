// ─── SUKHMAN PROPERTY — CENTRALIZED CONTACT CONFIGURATION ───────────────────

export const CONTACT = {
  // Primary phone (also WhatsApp) — Maninder Singh Saluja
  phone: '+91-9990002278',
  phoneDisplay: '+91 99900 02278',
  phoneRaw: '+919990002278', // no spaces/dashes — used for tel: links

  // Secondary phone
  phone2: '+91-9891515113',
  phone2Display: '+91 98915 15113',
  phone2Raw: '+919891515113',

  // WhatsApp number (include country code, no + or spaces)
  whatsappNumber: '919990002278',

  // Proprietor
  proprietor: 'Maninder Singh Saluja',

  // Email
  email: 'sukhman.properties31@gmail.com',

  // Office address
  address: 'Shop No. 244, 1st Floor, Sec. 79, OMAX World Street, Faridabad',
  addressShort: 'Sec. 79, Faridabad',

  // Working hours
  hours: 'Mon – Sun: 11:00 AM – 7:00 PM',

  // Social
  facebook: 'https://facebook.com/sukhman.properties',
  instagram: 'https://instagram.com/sukhman.properties',
  youtube: '',
  website: 'https://www.sukhmanproperty.com',
};

// ─── Helper: generate WhatsApp deep-link ────────────────────────────────────
export function whatsappLink(message = '') {
  const encoded = encodeURIComponent(message || 'Hi, I would like to inquire about a property listed by Sukhman Property.');
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}

// ─── Helper: property-specific WhatsApp link ────────────────────────────────
export function propertyWhatsappLink(propertyName) {
  const message = `Hi, I am interested in "${propertyName}" listed by Sukhman Property. Please share more details.`;
  return whatsappLink(message);
}

export default CONTACT;
