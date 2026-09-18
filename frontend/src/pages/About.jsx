import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { TESTIMONIALS } from '../data/properties';
import CONTACT from '../config/contact';

export default function About() {
  return (
    <main>
      <div className="bg-ink text-white pt-32 pb-16">
        <div className="container">
          <p className="eyebrow !mb-4">
            <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>Our story
          </p>
          <h1 className="text-white">
            About Sukhman Property
          </h1>
        </div>
      </div>

      {/* Story section — asymmetric two-column */}
      <section className="section-padding bg-ivory">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="fade-up">
            <span className="eyebrow mb-6">
              <span className="text-gold font-display mr-2 tracking-normal text-lg">01 &mdash;</span>Who we are
            </span>
            <h2 className="mb-8">
              Delhi NCR's trusted<br/>
              <span className="italic text-gold">property consultants.</span>
            </h2>
            <div className="space-y-5 max-w-[52ch] text-muted text-lg">
              <p>
                Sukhman Property is a premier real estate consultancy based in Faridabad, serving the entire Delhi NCR region including Gurugram and Noida.
              </p>
              <p>
                With over a decade of hands-on market experience, we have helped hundreds of families find their dream homes and investors secure valuable assets.
              </p>
              <p>
                We specialise in residential properties, commercial spaces, plots and land — offering a personalised, transparent, and professional service that has made us one of the most trusted names in the local property market.
              </p>
            </div>
            <div className="flex gap-4 mt-10">
              <a href={`tel:${CONTACT.phoneRaw}`} className="btn-solid"><Phone size={16} className="mr-2" /> Speak to us</a>
              <Link to="/properties" className="btn-outline">Browse properties</Link>
            </div>
          </div>

          {/* Large photo with pull-stat */}
          <div className="relative fade-up delay-200">
            <div className="overflow-hidden h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
                alt="Sukhman Property"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-0 md:-right-6 p-8 shadow-xl bg-gold text-white text-center min-w-[200px]">
              <p className="font-display text-5xl mb-1">
                12+
              </p>
              <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-white/90">
                Years of practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-ink py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
          {[
            { v: '500+', l: 'Properties sold' },
            { v: '12+',  l: 'Years in business' },
            { v: '98%',  l: 'Client satisfaction' },
            { v: '4',    l: 'Cities covered' },
          ].map((s, idx) => (
            <div key={s.l} className="text-center py-8 px-4 fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <p className="font-display text-5xl text-gold mb-2 leading-none">
                {s.v}
              </p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/70 font-medium mt-3">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-14 border-b border-line pb-8 fade-up">
            <span className="eyebrow !mb-0">
              <span className="text-gold font-display mr-2 tracking-normal text-lg">02 &mdash;</span>Our principles
            </span>
            <h2>What we stand for</h2>
          </div>

          <div className="divide-y divide-line fade-up delay-100">
            {[
              { n: '01', t: 'Integrity',          d: 'Every transaction is handled with complete honesty and transparency. No hidden costs, no surprises.' },
              { n: '02', t: 'Expertise',           d: 'Deep local market knowledge built over 12+ years of active work in the Delhi NCR real estate ecosystem.' },
              { n: '03', t: 'Client-first',        d: "Your needs, timeline, and budget are always our top priority. We serve, we don't sell." },
              { n: '04', t: 'Transparency',        d: 'Clear pricing, fair valuations, and straightforward legal guidance at every step.' },
              { n: '05', t: 'Speed and efficiency', d: 'From enquiry to deal closure, we streamline the entire process to save you time.' },
              { n: '06', t: 'Long-term trust',     d: 'Most of our business comes through referrals — a testament to the trust our clients place in us.' },
            ].map(v => (
              <div
                key={v.n}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 py-8 items-start group"
              >
                <span className="font-display text-3xl text-gold">
                  {v.n}
                </span>
                <h3 className="text-2xl group-hover:text-gold transition-colors">
                  {v.t}
                </h3>
                <p className="text-muted text-base">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-stone border-t border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-14 border-b border-line pb-8 fade-up">
            <span className="eyebrow !mb-0">
              <span className="text-gold font-display mr-2 tracking-normal text-lg">03 &mdash;</span>Client voices
            </span>
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
                  <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-ink mb-1">
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
    </main>
  );
}
