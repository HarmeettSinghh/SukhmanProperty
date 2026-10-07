// ─── SUKHMAN PROPERTY — BREVO TRANSACTIONAL MAILER ───────────────────────────
// Brevo (fka Sendinblue) SMTP API — called directly from the browser.
// NOTE: The API key is visible in client-side JS. This is acceptable for
// low-sensitivity transactional mail, but rotate the key if abused.

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || '';

const TO   = { email: 'sukhman.properties31@gmail.com', name: 'Maninder Singh Saluja' };
const FROM = { email: 'sukhman.properties31@gmail.com', name: 'Sukhman Property Website' };

// ── Shared fetch helper ───────────────────────────────────────────────────────
async function postToBrevo(subject, htmlContent, replyToUser) {
  const res = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'accept':       'application/json',
      'api-key':      BREVO_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender:      FROM,
      to:          [TO],
      replyTo:     replyToUser?.email ? { email: replyToUser.email, name: replyToUser.name || replyToUser.email } : FROM,
      subject,
      htmlContent,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error('Brevo API Error:', { status: res.status, error: err });
    const msg = err.message || `Brevo error ${res.status}`;
    throw new Error(msg);
  }
  return res.json();
}

// ── row helper ────────────────────────────────────────────────────────────────
const row = (label, value) =>
  value
    ? `<tr>
        <td style="padding:6px 16px 6px 0;font-size:13px;color:#888;white-space:nowrap;vertical-align:top">${label}</td>
        <td style="padding:6px 0;font-size:13px;color:#111">${value}</td>
       </tr>`
    : '';

// ─── 1. General enquiry / property enquiry ────────────────────────────────────
export async function sendEnquiry({ name, phone, email, type, message, propertyName }) {
  const subject = propertyName
    ? `New Enquiry — ${propertyName}`
    : 'New Property Enquiry — Sukhman Property';

  const htmlContent = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e5e5">
      <div style="background:#141210;padding:24px 32px">
        <p style="margin:0;font-size:20px;font-weight:600;color:#C9A84C;letter-spacing:0.05em">SUKHMAN PROPERTY</p>
        <p style="margin:4px 0 0;font-size:12px;color:#ffffff99;text-transform:uppercase;letter-spacing:0.1em">
          ${propertyName ? `Enquiry — ${propertyName}` : 'General Enquiry'}
        </p>
      </div>
      <div style="padding:32px">
        <table style="width:100%;border-collapse:collapse">
          ${row('Name',     name)}
          ${row('Phone',    phone)}
          ${row('Email',    email)}
          ${row('Looking for', type)}
          ${row('Property', propertyName)}
          ${row('Message',  message)}
        </table>
      </div>
      <div style="background:#f5f5f0;padding:16px 32px;font-size:11px;color:#999">
        Submitted via sukhmanproperty.com
      </div>
    </div>`;

  return postToBrevo(subject, htmlContent, { email, name });
}

// ─── 2. Sell / List property lead ─────────────────────────────────────────────
export async function sendSellLead({ name, phone, email, propertyType, location, area, price, timeline, description }) {
  const subject = `New Sell Lead — ${propertyType || 'Property'} in ${location || 'N/A'}`;

  const htmlContent = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e5e5">
      <div style="background:#141210;padding:24px 32px">
        <p style="margin:0;font-size:20px;font-weight:600;color:#C9A84C;letter-spacing:0.05em">SUKHMAN PROPERTY</p>
        <p style="margin:4px 0 0;font-size:12px;color:#ffffff99;text-transform:uppercase;letter-spacing:0.1em">New Sell / List Lead</p>
      </div>
      <div style="padding:32px">
        <table style="width:100%;border-collapse:collapse">
          ${row('Owner name',    name)}
          ${row('Phone',         phone)}
          ${row('Email',         email)}
          ${row('Property type', propertyType)}
          ${row('Location',      location)}
          ${row('Size / Area',   area)}
          ${row('Expected price',price)}
          ${row('Timeline',      timeline)}
          ${row('Details',       description)}
        </table>
      </div>
      <div style="background:#f5f5f0;padding:16px 32px;font-size:11px;color:#999">
        Submitted via sukhmanproperty.com — Sell Property form
      </div>
    </div>`;

  return postToBrevo(subject, htmlContent, { email, name });
}
