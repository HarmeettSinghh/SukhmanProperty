import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Car, Phone, MessageCircle, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import ContactForm from '../components/ContactForm';
import PropertyCard from '../components/PropertyCard';
import CONTACT, { propertyWhatsappLink } from '../config/contact';

export default function PropertyDetails() {
  const { slug }    = useParams();
  const [img, setImg] = useState(0);

  const p = PROPERTIES.find(x => x.slug === slug);

  if (!p) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ivory text-center px-5">
      <div className="h-px w-12 bg-gold mx-auto mb-8" />
      <h2 className="text-4xl mb-3">Property not found.</h2>
      <Link to="/properties" className="nav-link mt-4">Browse properties &rarr;</Link>
    </div>
  );

  const { title, location, price, area, beds, baths, parking, category, type, description, amenities, images, rera } = p;
  const related = PROPERTIES.filter(x => x.id !== p.id && x.category === category).slice(0, 3);

  return (
    <main className="min-h-screen bg-ivory pt-24">
      {/* Breadcrumb */}
      <div className="border-b border-line px-6 md:px-10 py-4 bg-white">
        <div className="container flex items-center gap-2">
          {[
            { to: '/',            label: 'Home' },
            { to: '/properties',  label: 'Properties' },
            { to: null,           label: title },
          ].map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-muted">/</span>}
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted hover:text-gold transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-ink truncate max-w-[200px]">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="container py-12 section-padding">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* ── Left ── */}
          <div className="space-y-10">
            {/* Image gallery */}
            <div>
              <div className="relative overflow-hidden bg-stone aspect-video">
                <img src={images[img]} alt={title} className="w-full h-full object-cover" />
                {/* Status */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 text-[10px] uppercase tracking-[0.14em] font-medium ${type === 'rent' ? 'bg-ink text-white' : 'bg-gold text-white'}`}>
                    {type === 'rent' ? 'To Let' : 'For Sale'}
                  </span>
                  <span className="px-3 py-1 text-[10px] uppercase tracking-[0.14em] font-medium bg-white text-ink">
                    {category}
                  </span>
                </div>
                {/* Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setImg(i => (i - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft size={18} className="text-ink" />
                    </button>
                    <button
                      onClick={() => setImg(i => (i + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                    >
                      <ChevronRight size={18} className="text-ink" />
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 mt-2 overflow-x-auto pb-2 scrollbar-hide">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setImg(i)}
                      className={`w-20 h-14 overflow-hidden flex-shrink-0 border-2 transition-all ${img === i ? 'border-gold' : 'border-transparent'}`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title block */}
            <div className="border-b border-line pb-8">
              <p className="eyebrow mb-3 text-gold">
                {category}
              </p>
              <div className="flex items-start justify-between gap-6 flex-wrap mb-4">
                <h1 className="text-4xl md:text-5xl leading-tight text-ink">
                  {title}
                </h1>
                <p className="font-display text-4xl text-gold flex-shrink-0">
                  {price}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} className="text-gold" />
                {location}
              </div>
            </div>

            {/* Specs row */}
            <div className="flex flex-wrap gap-12 py-2">
              {beds   != null && <div className="text-center"><p className="font-display text-4xl text-gold">{beds}</p><p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mt-2">Bedrooms</p></div>}
              {baths  != null && <div className="text-center"><p className="font-display text-4xl text-gold">{baths}</p><p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mt-2">Bathrooms</p></div>}
              {parking != null && <div className="text-center"><p className="font-display text-4xl text-gold">{parking}</p><p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mt-2">Parking</p></div>}
              <div className="text-center"><p className="font-display text-4xl text-gold">{area}</p><p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mt-2">Area</p></div>
            </div>

            {/* Quick actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-line">
              <a href={`tel:${CONTACT.phoneRaw}`} className="btn-solid flex-1 justify-center">
                <Phone size={16} className="mr-2" /> Call now
              </a>
              <a
                href={propertyWhatsappLink(title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 justify-center !border-[#25D366] !text-[#25D366] hover:!bg-[#25D366] hover:!text-white"
              >
                <MessageCircle size={16} className="mr-2" /> WhatsApp enquiry
              </a>
            </div>

            {/* Description */}
            <div className="border-t border-line pt-8">
              <p className="eyebrow mb-6 text-muted">
                About this property
              </p>
              <p className="text-lg max-w-[65ch] text-ink/80 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Amenities */}
            {amenities?.length > 0 && (
              <div className="border-t border-line pt-8">
                <p className="eyebrow mb-8 text-muted">
                  Amenities & features
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                  {amenities.map(a => (
                    <div key={a} className="flex items-center gap-3 text-base text-ink/80">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gold" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RERA */}
            {rera && (
              <div className="flex items-center gap-3 border border-line p-5 text-sm bg-white">
                <CheckCircle size={16} className="text-gold flex-shrink-0" />
                <span className="text-muted font-medium">RERA Registered:</span> <span className="text-ink">{rera}</span>
              </div>
            )}
          </div>

          {/* ── Right sidebar ── */}
          <div className="space-y-8">
            <div className="border border-line p-8 bg-white shadow-sm sticky top-24">
              <h3 className="text-2xl mb-2 text-ink">
                Request details
              </h3>
              <p className="text-sm text-muted mb-8">
                We respond within 24 hours.
              </p>
              <ContactForm propertyName={title} compact />
            </div>

            {/* Expert contact card */}
            <div className="bg-ink p-8 text-white shadow-sm">
              <p className="eyebrow !mb-4 text-gold">
                Talk to an expert
              </p>
              <p className="font-display text-2xl mb-6">
                Get personal guidance on this property.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold" /> {CONTACT.phoneDisplay}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-gold transition-colors truncate"
                >
                  <Mail size={16} className="text-gold" /> {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-line pt-16">
            <p className="eyebrow mb-8 text-muted">
              Similar properties
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
