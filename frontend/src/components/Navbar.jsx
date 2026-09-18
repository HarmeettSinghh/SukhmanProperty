import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CONTACT, { whatsappLink } from '../config/contact';

const NAV_LEFT = [
  { to: '/',           label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/services',   label: 'Services' },
];
const NAV_RIGHT = [
  { to: '/about',          label: 'About' },
  { to: '/contact',        label: 'Contact' },
  { to: '/sell-property',  label: 'List Property' },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();

  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'bg-ivory/90 backdrop-blur-sm shadow-sm' : 'bg-ivory'}
          border-b border-line h-[80px] flex items-center`}
      >
        <div className="container flex items-center justify-between">
          {/* Left nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LEFT.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Centre: wordmark */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <img src="/images/logo-full.png" alt="Sukhman Property" className="h-[46px] w-auto" />
          </Link>

          {/* Mobile: logo left */}
          <Link to="/" className="md:hidden">
            <img src="/images/logo-full.png" alt="Sukhman Property" className="h-[40px] w-auto" />
          </Link>

          {/* Right nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_RIGHT.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 text-ink"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[80px]" />

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'visible' : 'invisible pointer-events-none'}`}
      >
        <div
          className={`absolute inset-0 bg-ink/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div className={`absolute top-[80px] left-0 right-0 bg-ivory border-b border-line transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-4 opacity-0'}`}>
          <div className="px-6 py-6 space-y-1">
            {[...NAV_LEFT, ...NAV_RIGHT].map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `block py-3 border-b border-line last:border-0 nav-link ${isActive ? 'active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-5 flex flex-col gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn-solid"
              >
                Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
