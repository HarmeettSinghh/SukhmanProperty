import { Link } from 'react-router-dom';
import { Bed, Bath, Car, MapPin } from 'lucide-react';
import { propertyWhatsappLink } from '../config/contact';

export default function PropertyCard({ property, className = '' }) {
  const { slug, title, location, price, area, beds, baths, parking, category, type, featured, new: isNew, image } = property;

  return (
    <article className={`card bg-white border border-line overflow-hidden group ${className}`}>
      {/* Image */}
      <div className="relative overflow-hidden h-[220px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Status badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {isNew && (
            <span className="px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] font-medium bg-gold text-white">
              New
            </span>
          )}
          <span className={`px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] font-medium ${type === 'rent' ? 'bg-ink text-white' : 'bg-white text-ink'}`}>
            {type === 'rent' ? 'To Let' : 'For Sale'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category label */}
        <p className="eyebrow mb-2">
          {category}
        </p>

        {/* Title & price */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl leading-snug group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="font-display text-lg text-gold whitespace-nowrap flex-shrink-0 pt-0.5">
            {price}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs mb-5 text-muted">
          <MapPin size={12} className="flex-shrink-0" />
          <span>{location}</span>
        </div>

        {/* Hairline rule */}
        <div className="h-px w-full bg-line mb-5" />

        {/* Specs */}
        <div className="flex items-center gap-4 text-xs mb-6 text-muted">
          {beds != null && (
            <span className="flex items-center gap-1"><Bed size={12} /> {beds} bed</span>
          )}
          {baths != null && (
            <span className="flex items-center gap-1"><Bath size={12} /> {baths} bath</span>
          )}
          {parking != null && (
            <span className="flex items-center gap-1"><Car size={12} /> {parking} park</span>
          )}
          <span className="ml-auto text-ink">{area}</span>
        </div>

        {/* Typographic CTAs */}
        <div className="flex items-center justify-between">
          <Link to={`/properties/${slug}`} className="nav-link">
            View details &rarr;
          </Link>
          <a
            href={propertyWhatsappLink(title)}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link !text-gold"
          >
            Enquire &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
