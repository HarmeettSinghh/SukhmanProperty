import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { SERVICES } from '../data/properties';
import CONTACT from '../config/contact';

export default function Services() {
  return (
    <main>
      <div className="bg-ink text-white pt-32 pb-16">
        <div className="container">
          <p className="eyebrow !mb-4">
            <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>What we offer
          </p>
          <h1 className="text-white">
            Our services
          </h1>
        </div>
      </div>

      {/* Services as editorial list */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="divide-y divide-line">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className="grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-6 py-12 items-start group fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="font-display text-5xl text-gold leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="text-3xl mb-4 group-hover:text-gold transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-base text-muted max-w-[55ch] leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="nav-link opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline-flex"
                >
                  Enquire &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-stone">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-16 border-b border-line pb-8 fade-up">
            <span className="eyebrow !mb-0">
              <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>How it works
            </span>
            <h2>A simple process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 fade-up delay-100">
            {[
              { n: '01', t: 'Share requirements', d: 'Tell us your budget, preferred location, and property type.' },
              { n: '02', t: 'We shortlist',        d: 'We curate a list of matching properties from our active database.' },
              { n: '03', t: 'Site visits',          d: 'Schedule visits at your convenience with our property expert.' },
              { n: '04', t: 'Close the deal',       d: 'We handle negotiations, paperwork, and documentation.' },
            ].map((step) => (
              <div key={step.n} className="relative">
                <p className="font-display text-6xl text-gold mb-5 leading-none">
                  {step.n}
                </p>
                <h3 className="text-xl mb-3">
                  {step.t}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-center px-6 text-white fade-up">
        <p className="eyebrow !mb-6 !text-gold justify-center">
          Ready to begin?
        </p>
        <h2 className="text-white mb-8 mx-auto max-w-[20ch]">
          Find your property with expert guidance.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href={`tel:${CONTACT.phoneRaw}`} className="btn-accent"><Phone size={16} className="mr-2" /> Call now</a>
          <Link to="/contact" className="btn-outline !border-white/40 !text-white hover:!bg-gold hover:!border-gold">Send enquiry</Link>
        </div>
      </section>
    </main>
  );
}
