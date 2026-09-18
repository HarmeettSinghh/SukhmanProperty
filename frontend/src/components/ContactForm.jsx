import { useState } from 'react';
import CONTACT, { whatsappLink } from '../config/contact';

export default function ContactForm({ propertyName = '', compact = false, className = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    message: propertyName
      ? `I am interested in "${propertyName}". Please share more details.`
      : '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    // TODO: wire to backend / EmailJS / Formspree
    console.log('Enquiry:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  if (submitted) {
    return (
      <div className={`py-12 text-center ${className}`}>
        <div className="h-px w-12 bg-gold mx-auto mb-8" />
        <h3 className="text-3xl mb-3">
          Enquiry received.
        </h3>
        <p className="text-sm text-muted">
          We will be in touch within 24 hours.
        </p>
        <div className="h-px w-12 bg-gold mx-auto mt-8" />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-6 ${className}`}>
      {propertyName && (
        <div className="border-l-2 border-gold pl-4 mb-2">
          <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-gold mb-1">
            Enquiring about
          </p>
          <p className="font-display text-xl text-ink">
            {propertyName}
          </p>
        </div>
      )}

      <div className={`grid gap-6 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">
            Full name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={set}
            placeholder="Your full name"
            required
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={set}
            placeholder="+91 XXXXX XXXXX"
            required
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={set}
          placeholder="your@email.com"
          className="input-field"
        />
      </div>

      {!compact && (
        <div>
          <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">
            Looking for
          </label>
          <select name="type" value={form.type} onChange={set} className="input-field bg-white">
            <option value="">Select property type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="plot">Plot or Land</option>
            <option value="rental">Rental</option>
            <option value="sell">Sell my property</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={set}
          placeholder="Tell us what you are looking for..."
          className="input-field"
        />
      </div>

      <div className={`flex ${compact ? 'flex-col gap-4' : 'flex-col sm:flex-row gap-4'}`}>
        <button type="submit" className="btn-solid flex-1">
          Send enquiry
        </button>
        <a
          href={form.name ? whatsappLink(`I am ${form.name}. ${form.message || 'I would like to enquire.'}`) : whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline flex-1"
        >
          WhatsApp instead
        </a>
      </div>

      <p className="text-xs text-center text-muted pt-2">
        Or call directly &mdash;{' '}
        <a href={`tel:${CONTACT.phoneRaw}`} className="text-gold hover:underline">
          {CONTACT.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
