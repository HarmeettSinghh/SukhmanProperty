// ─── SUKHMAN PROPERTY — CENTRALIZED CONTACT CONFIGURATION ───────────────────
// Update these values with actual contact details before going live

export const CONTACT = {
  // Primary phone (also WhatsApp)
  phone: '+91-XXXXXXXXXX',
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneRaw: '+91XXXXXXXXXX', // no spaces/dashes — used for tel: links

  // WhatsApp number (include country code, no + or spaces)
  whatsappNumber: '91XXXXXXXXXX',

  // Email
  email: 'info@sukhmanproperty.com',

  // Office address
  address: 'SCO XX, Sector XX, Faridabad — 12100X, India',
  addressShort: 'Sector XX, Faridabad',

  // Working hours
  hours: 'Mon – Sat: 9:00 AM – 7:00 PM',

  // Social
  facebook: 'https://facebook.com/sukhmanproperty',
  instagram: 'https://instagram.com/sukhmanproperty',
  youtube: '',
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
