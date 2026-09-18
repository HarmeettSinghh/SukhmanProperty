import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone, MapPin } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import ContactForm from '../components/ContactForm';
import { PROPERTIES, TESTIMONIALS, SERVICES, LOCATIONS } from '../data/properties';
import CONTACT, { whatsappLink } from '../config/contact';

const Num = ({ n, label }) => (
  <p className="eyebrow mb-0">
    <span className="text-gold font-display mr-2 tracking-normal text-lg">{String(n).padStart(2,'0')} &mdash;</span>
    {label}
  </p>
);

const featured = PROPERTIES.filter(p => p.featured).slice(0, 6);

export default function Home() {
  const [q, setQ]         = useState('');
  const [tab, setTab]     = useState('buy');
  const navigate          = useNavigate();

  const search = e => {
    e.preventDefault();
    navigate(`/properties?search=${encodeURIComponent(q)}&type=${tab}`);
  };

  return (
    <main>
      {/* ══ 01 — HERO ════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-[80px] bg-ink overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1900&q=85"
            alt="Property exterior"
            className="w-full h-full object-cover origin-center transition-transform duration-[12000ms] ease-out hover:scale-[1.05]"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(20,18,16,.85) 0%, rgba(20,18,16,.5) 50%, rgba(20,18,16,.15) 100%)' }} />
        </div>

        <div className="container relative z-10 flex flex-col h-full justify-center pb-16 pt-16">
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6 fade-up">
              <div className="h-px w-8 bg-gold-light" />
              <span className="text-xs uppercase tracking-[0.14em] font-medium text-gold-light">
                01&ensp;&mdash;&ensp;Delhi NCR Property Consultancy
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white mb-6 fade-up delay-100">
              Property,<br/>
              found with<br/>
              <span className="italic text-gold-light">precision.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-white/80 text-lg mb-10 max-w-[520px] fade-up delay-200">
              Residential homes, commercial spaces, plots and rentals across Faridabad, Delhi NCR, Gurugram and Noida. Trusted by over five hundred families.
            </p>

            {/* Search block */}
            <form onSubmit={search} className="fade-up delay-300">
              <div className="flex gap-3 mb-3">
                {['buy','rent'].map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className="text-xs uppercase tracking-[0.14em] font-medium pb-1 relative"
                    style={{ color: tab === t ? 'var(--color-white)' : 'rgba(255,255,255,0.6)' }}
                  >
                    {t === 'buy' ? 'Buy' : 'Rent'}
                    {tab === t && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-light" />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row shadow-lg">
                <input
                  type="text"
                  value={q}
                  onChange={e => setQ(e.target.value)}
                  placeholder="Location, sector, property type..."
                  className="flex-1 h-[56px] px-6 text-base bg-white text-ink outline-none border-none rounded-none"
                />
                <button type="submit" className="btn-accent sm:w-auto w-full border-none h-[56px] !px-10 rounded-none">
                  <Search size={18} className="mr-2" /> Search
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Stats Row (Below hero content) */}
        <div className="relative z-10 w-full border-t border-white/20 mt-16 pb-8 pt-8">
          <div className="container">
            <div className="flex flex-wrap gap-8 sm:gap-16 fade-up delay-300">
              {[
                { n: '500+', l: 'Properties sold' },
                { n: '12+',  l: 'Years active' },
                { n: '4',    l: 'Cities covered' },
              ].map(s => (
                <div key={s.l}>
                  <p className="font-display text-4xl sm:text-5xl text-white mb-1 leading-none">{s.n}</p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/70 font-medium">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 02 — CATEGORIES ══════════════════════════════════════ */}
      <section className="section-padding bg-ivory border-t border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-14 fade-up">
            <Num n={2} label="Browse by type" />
            <div>
              <h2>
                What are you<br/>searching for?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up delay-100">
            {[
              { cat: 'residential', label: 'Residential', sub: 'Homes & apartments', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80', h: 'h-56 md:h-80' },
              { cat: 'commercial',  label: 'Commercial',  sub: 'Offices & retail',   img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80', h: 'h-56 md:h-64' },
              { cat: 'plots',       label: 'Plots & Land', sub: 'Build your vision', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80', h: 'h-56 md:h-64' },
              { cat: 'rental',      label: 'Rental',       sub: 'Tenant & landlord', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80', h: 'h-56 md:h-80' },
            ].map((c) => (
              <Link
                key={c.cat}
                to={`/properties?category=${c.cat}`}
                className={`card relative overflow-hidden flex flex-col justify-end group ${c.h}`}
              >
                <img
                  src={c.img}
                  alt={c.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent"
                />
                <div className="relative z-10 p-5">
                  <h3 className="text-white mb-1 text-2xl">{c.label}</h3>
                  <p className="text-xs text-white/70 tracking-wide font-medium">{c.sub}</p>
                  <span className="inline-block mt-3 text-xs uppercase tracking-[0.14em] text-gold opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Browse &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 03 — FEATURED PROPERTIES ══════════════════════════════ */}
      <section className="section-padding bg-stone">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-6 items-end mb-14 border-b border-line pb-8 fade-up">
            <Num n={3} label="Curated listings" />
            <h2>Featured properties</h2>
            <Link to="/properties" className="nav-link hidden md:inline-flex pb-1">
              All properties &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up delay-100">
            {featured.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>

          <div className="mt-10 md:hidden">
            <Link to="/properties" className="btn-outline w-full">All properties &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ══ 04 — WHY US ══════════════════════════════════════════ */}
      <section className="section-padding bg-ink text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <span className="eyebrow mb-6">
                <span className="text-gold font-display mr-2 tracking-normal text-lg">04 &mdash;</span>
                Why Sukhman Property
              </span>
              <h2 className="text-white mb-6">
                Trust earned over<br/>
                <span className="italic text-gold-light">twelve years of work.</span>
              </h2>
              <p className="text-white/70 mb-10 max-w-[48ch] text-lg">
                We have guided hundreds of families through one of the most important decisions of their lives. No pressure, no hidden charges — only transparent, expert property advice tailored to your situation.
              </p>

              <div className="space-y-6">
                {[
                  { n: '01', t: 'Market expertise',      d: 'Twelve years of deep local knowledge across the Delhi NCR real estate market.' },
                  { n: '02', t: 'Transparent dealings',  d: 'No hidden charges. Every transaction is clear, documented, and straightforward.' },
                  { n: '03', t: 'End-to-end support',    d: 'Legal guidance, RERA verification, documentation and registration — handled.' },
                  { n: '04', t: 'Verified buyer network', d: 'Sellers reach a qualified network of serious buyers and investors.' },
                ].map(p => (
                  <div key={p.n} className="grid grid-cols-[40px_1fr] gap-4 border-t border-white/20 pt-6">
                    <span className="font-display text-2xl text-gold-light">
                      {p.n}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white mb-1 uppercase tracking-[0.1em]">
                        {p.t}
                      </p>
                      <p className="text-sm text-white/60">
                        {p.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-10">
                <a href={`tel:${CONTACT.phoneRaw}`} className="btn-accent">Call us</a>
                <Link to="/about" className="btn-outline !border-white/40 !text-white hover:!border-gold hover:!text-white">About us</Link>
              </div>
            </div>

            <div className="relative fade-up delay-200">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
                alt="Sukhman Property consultation"
                className="w-full h-[500px] object-cover"
              />
              <blockquote className="absolute -bottom-6 -left-6 md:-left-10 bg-gold-light p-8 max-w-[320px] shadow-xl text-ink">
                <p className="font-display text-2xl italic mb-4 leading-tight">
                  "Found our dream home in three weeks. Completely smooth process."
                </p>
                <p className="text-xs uppercase tracking-[0.14em] font-medium">
                  &mdash; Rajveer Singh, Faridabad
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 05 — SERVICES ════════════════════════════════════════ */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-14 border-b border-line pb-8 fade-up">
            <Num n={5} label="What we offer" />
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2>Our services</h2>
              <Link to="/services" className="nav-link hidden md:block">All services &rarr;</Link>
            </div>
          </div>

          <div className="divide-y divide-line fade-up delay-100">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-6 py-10 items-start group"
              >
                <span className="font-display text-4xl text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-2xl mb-3 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted max-w-[55ch]">
                    {s.description}
                  </p>
                </div>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="nav-link opacity-0 group-hover:opacity-100 hidden md:inline-flex"
                >
                  Enquire &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 06 — TESTIMONIALS ════════════════════════════════════ */}
      <section className="section-padding bg-stone border-t border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-14 border-b border-line pb-8 fade-up">
            <Num n={6} label="Client voices" />
            <h2>Trusted by hundreds</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 fade-up delay-100">
            {TESTIMONIALS.map(t => (
              <figure key={t.id} className="card bg-white p-8 md:p-10 border border-line hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                <div className="font-display text-6xl text-gold leading-none mb-4">&ldquo;</div>
                <blockquote className="font-display text-2xl text-ink mb-8 leading-tight">
                  {t.text}
                </blockquote>
                <figcaption className="border-t border-line pt-6">
                  <p className="text-xs uppercase tracking-[0.14em] font-medium text-ink mb-1">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 07 — ENQUIRY ═════════════════════════════════════════ */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="fade-up">
              <span className="eyebrow mb-6">
                <span className="text-gold font-display mr-2 tracking-normal text-lg">07 &mdash;</span>
                Get in touch
              </span>
              <h2 className="mb-6">
                Let us find your<br/>
                <span className="italic text-gold">perfect property.</span>
              </h2>
              <p className="text-muted text-lg mb-10 max-w-[44ch]">
                Share your requirements and our team will respond within 24 hours with curated options suited to your budget and preferences.
              </p>

              <div className="space-y-6 border-t border-line pt-8">
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-6 group card">
                  <div className="w-12 h-12 flex items-center justify-center border border-line group-hover:border-gold group-hover:bg-gold transition-colors">
                    <Phone size={16} className="text-gold group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-1">Call us</p>
                    <p className="font-display text-xl">{CONTACT.phoneDisplay}</p>
                  </div>
                </a>

                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group card">
                  <div className="w-12 h-12 flex items-center justify-center border border-line group-hover:border-[#25D366] group-hover:bg-[#25D366] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" className="text-[#25D366] group-hover:text-white">
                      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.79.73 5.41 2.004 7.676L2 30l6.52-2.068A13.95 13.95 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.39 19.99c-.32.9-1.58 1.647-2.593 1.863-.69.146-1.59.262-4.62-.99-3.886-1.587-6.393-5.523-6.59-5.78-.19-.257-1.57-2.09-1.57-3.99 0-1.9.99-2.83 1.342-3.225.352-.395.768-.494 1.023-.494.256 0 .512.003.737.013.236.012.552-.09.864.66.32.77 1.09 2.66 1.185 2.854.097.196.163.426.033.686-.13.26-.194.42-.388.647-.193.226-.407.504-.58.677-.194.194-.396.404-.17.79.226.386.998 1.642 2.143 2.66 1.472 1.314 2.713 1.72 3.098 1.917.386.196.61.163.836-.098.226-.26.972-1.132 1.23-1.52.258-.386.515-.322.865-.193.352.13 2.235 1.054 2.622 1.247.386.194.645.29.74.452.097.16.097.924-.224 1.822z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-1">WhatsApp</p>
                    <p className="font-display text-xl">{CONTACT.phoneDisplay}</p>
                  </div>
                </a>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-line">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-1">Office</p>
                    <p className="text-base text-ink">{CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-line p-8 md:p-12 shadow-sm fade-up delay-200">
              <h3 className="text-3xl mb-2">Send an enquiry</h3>
              <p className="text-sm text-muted mb-8">We respond within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
