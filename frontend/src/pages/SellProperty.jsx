import { useState } from 'react';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import CONTACT, { whatsappLink } from '../config/contact';

export default function SellProperty() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    propertyType: '', location: '', area: '',
    price: '', timeline: '', description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    console.log('Sell form:', form);
    setSubmitted(true);
  };

  return (
    <main>
      <div className="bg-ink text-white pt-32 pb-16">
        <div className="container">
          <p className="eyebrow !mb-4">
            <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>List with us
          </p>
          <h1 className="text-white">
            Sell your property
          </h1>
        </div>
      </div>

      {/* Why sell with us — editorial rows */}
      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-14 border-b border-line pb-8 fade-up">
            <span className="eyebrow !mb-0">
              <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>The advantage
            </span>
            <h2>Why sellers choose us</h2>
          </div>

          <div className="divide-y divide-line fade-up delay-100">
            {[
              { n: '01', t: 'Best price guaranteed',  d: 'Market research combined with smart pricing strategy to maximise your returns.' },
              { n: '02', t: 'Wide marketing reach',    d: 'Listed across property portals, social media, and our active buyer database.' },
              { n: '03', t: 'Verified buyers only',    d: 'We screen buyers to ensure only serious, financially capable enquiries reach you.' },
              { n: '04', t: 'End-to-end management',  d: 'From listing to registration — documentation and negotiations, fully handled.' },
            ].map((item, idx) => (
              <div
                key={item.n}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 py-8 items-start group"
              >
                <span className="font-display text-3xl text-gold">
                  {item.n}
                </span>
                <h3 className="text-2xl group-hover:text-gold transition-colors">
                  {item.t}
                </h3>
                <p className="text-base text-muted">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-stone border-t border-line">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start mb-14 fade-up">
            <span className="eyebrow !mb-0">
              <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>List your property
            </span>
            <h2>Tell us about your property</h2>
          </div>

          {submitted ? (
            <div className="py-20 text-center max-w-lg mx-auto fade-up">
              <div className="h-px w-12 bg-gold mx-auto mb-8" />
              <h3 className="text-3xl mb-4 text-ink">
                Property submitted.
              </h3>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                Our team will evaluate your listing and contact you within 24 to 48 hours with a valuation and next steps.
              </p>
              <a
                href={whatsappLink('Hi, I just submitted a property for sale. Please help with next steps.')}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link !text-gold"
              >
                Continue on WhatsApp &rarr;
              </a>
              <div className="h-px w-12 bg-gold mx-auto mt-8" />
            </div>
          ) : (
            <form onSubmit={onSubmit} className="max-w-3xl space-y-12 fade-up delay-100">
              {/* Owner details */}
              <div className="bg-white border border-line p-8 md:p-10 shadow-sm">
                <p className="eyebrow mb-8 pb-3 border-b border-line text-ink">
                  Your details
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { n:'name',  l:'Full name *',  t:'text',  p:'Your full name',       req:true },
                    { n:'phone', l:'Phone *',      t:'tel',   p:'+91 XXXXX XXXXX',      req:true },
                    { n:'email', l:'Email',        t:'email', p:'your@email.com',        req:false },
                  ].map(f => (
                    <div key={f.n}>
                      <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">
                        {f.l}
                      </label>
                      <input
                        type={f.t}
                        name={f.n}
                        value={form[f.n]}
                        onChange={set}
                        placeholder={f.p}
                        required={f.req}
                        className="input-field"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Property details */}
              <div className="bg-white border border-line p-8 md:p-10 shadow-sm">
                <p className="eyebrow mb-8 pb-3 border-b border-line text-ink">
                  Property details
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">Property type *</label>
                    <select name="propertyType" value={form.propertyType} onChange={set} required className="input-field bg-white">
                      <option value="">Select</option>
                      <option>Apartment / Flat</option>
                      <option>Independent House</option>
                      <option>Villa</option>
                      <option>Commercial Space</option>
                      <option>Plot / Land</option>
                      <option>Builder Floor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">Location / area *</label>
                    <input type="text" name="location" value={form.location} onChange={set} required placeholder="Sector, City" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">Size / area</label>
                    <input type="text" name="area" value={form.area} onChange={set} placeholder="e.g. 1500 sq ft" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">Expected price</label>
                    <input type="text" name="price" value={form.price} onChange={set} placeholder="e.g. 80 Lakh" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">Timeline to sell</label>
                    <select name="timeline" value={form.timeline} onChange={set} className="input-field bg-white">
                      <option value="">Select</option>
                      <option>Immediately</option>
                      <option>Within 1 month</option>
                      <option>1 to 3 months</option>
                      <option>3 to 6 months</option>
                      <option>No rush</option>
                    </select>
                  </div>
                </div>

                {/* Additional */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">Additional details</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={set}
                    rows={4}
                    placeholder="Share any additional details — amenities, condition, unique features..."
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-solid flex-1 justify-center">
                  Submit property
                </button>
                <a
                  href={whatsappLink('Hi, I want to sell/list my property with Sukhman Property. Can you help?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center !border-[#25D366] !text-[#25D366] hover:!bg-[#25D366] hover:!text-white"
                >
                  WhatsApp instead
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
