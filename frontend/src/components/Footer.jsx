import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import CONTACT, { whatsappLink } from '../config/contact';

/* Ft4 — Dense colophon footer: horizontal rule top, two-column dense layout */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      {/* ── CTA band ────────────────────────────────────── */}
      <div className="border-b border-white/20">
        <div className="container py-16 grid md:grid-cols-2 gap-10 items-end">
          <div>
            <span className="eyebrow mb-4">
              <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>
              Begin Your Search
            </span>
            <h2 className="text-white">
              Find the right property.<br/>
              <span className="italic text-gold">Talk to us today.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a href={`tel:${CONTACT.phoneRaw}`} className="btn-accent">Call Now</a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-white/40 !text-white hover:!bg-gold hover:!border-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Dense colophon grid ──────────────────────── */}
      <div className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/">
            <img src="/images/logo-full.png" alt="Sukhman Property" className="h-12 w-auto mb-5 brightness-200 contrast-125" />
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Premium real estate consultancy serving Faridabad, Delhi NCR, Gurugram and Noida since over a decade.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <p className="eyebrow !mb-4 text-gold">Navigate</p>
          <ul className="space-y-3">
            {[
              { to: '/',               label: 'Home' },
              { to: '/properties',     label: 'Properties' },
              { to: '/services',       label: 'Services' },
              { to: '/about',          label: 'About' },
              { to: '/sell-property',  label: 'List Property' },
              { to: '/contact',        label: 'Contact' },
            ].map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[11px] text-white/60 uppercase tracking-[0.1em] hover:text-gold transition-colors font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Property types */}
        <div>
          <p className="eyebrow !mb-4 text-gold">We Deal In</p>
          <ul className="space-y-3">
            {[
              { to: '/properties?category=residential', label: 'Residential' },
              { to: '/properties?category=commercial',  label: 'Commercial' },
              { to: '/properties?category=plots',       label: 'Plots & Land' },
              { to: '/properties?category=rental',      label: 'Rental' },
            ].map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[11px] text-white/60 uppercase tracking-[0.1em] hover:text-gold transition-colors font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow !mb-4 text-gold">Reach Us</p>
          <ul className="space-y-4">
            <li>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-gold transition-colors"
              >
                <Phone size={14} className="flex-shrink-0 text-gold" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-gold transition-colors break-all"
              >
                <Mail size={14} className="flex-shrink-0 text-gold" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/60">
              <MapPin size={14} className="flex-shrink-0 mt-0.5 text-gold" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="text-[11px] text-white/50 tracking-[0.06em]">
              {CONTACT.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* ── Colophon bottom rule ─────────────────────── */}
      <div className="border-t border-white/20">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 tracking-[0.08em]">
            &copy; {year} Sukhman Property. All rights reserved.
          </p>
          <p className="text-xs text-white/40 text-center sm:text-right tracking-[0.08em]">
            Faridabad &middot; Delhi NCR &middot; Gurugram &middot; Noida
          </p>
        </div>
      </div>
    </footer>
  );
}
