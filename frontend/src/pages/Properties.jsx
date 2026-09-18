import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES, PROPERTY_CATEGORIES } from '../data/properties';

const CITIES = ['All', 'Faridabad', 'Delhi NCR', 'Gurugram', 'Noida'];
const PRICE_RANGES = [
  { label: 'Any price',       min: 0,        max: Infinity },
  { label: 'Up to 50 Lakh',  min: 0,        max: 5000000 },
  { label: '50L – 1 Cr',     min: 5000000,  max: 10000000 },
  { label: '1 Cr – 2 Cr',    min: 10000000, max: 20000000 },
  { label: 'Above 2 Cr',     min: 20000000, max: Infinity },
];

export default function Properties() {
  const [params] = useSearchParams();
  const [showF, setShowF] = useState(false);

  const [filters, setFilters] = useState({
    search:   params.get('search')   || '',
    category: params.get('category') || 'all',
    city:     params.get('city')     || 'All',
    type:     params.get('type') === 'rent' ? 'rent' : 'all',
    price:    0,
  });

  const set = (k, v) => setFilters(f => ({ ...f, [k]: v }));

  const filtered = PROPERTIES.filter(p => {
    const q = filters.search.toLowerCase();
    if (q && !p.title.toLowerCase().includes(q) && !p.location.toLowerCase().includes(q) && !p.city.toLowerCase().includes(q)) return false;
    if (filters.category !== 'all' && p.category !== filters.category) return false;
    if (filters.city !== 'All' && p.city !== filters.city) return false;
    if (filters.type === 'buy' && p.type !== 'buy') return false;
    if (filters.type === 'rent' && p.type !== 'rent') return false;
    const pr = PRICE_RANGES[filters.price];
    if (p.priceValue < pr.min || p.priceValue > pr.max) return false;
    return true;
  });

  return (
    <main className="min-h-screen bg-ivory">
      {/* Header */}
      <div className="bg-ink text-white pt-32 pb-16">
        <div className="container">
          <p className="eyebrow !mb-4">
            <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>Browse listings
          </p>
          <h1 className="text-white">
            Properties
          </h1>
        </div>
      </div>

      <div className="container section-padding">
        {/* Search + filter */}
        <div className="mb-10 border-b border-line pb-8">
          <form className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 flex items-center gap-3 border-b-2 border-gold bg-transparent">
              <Search size={18} className="text-muted flex-shrink-0" />
              <input
                type="text"
                placeholder="Location, sector, property type..."
                value={filters.search}
                onChange={e => set('search', e.target.value)}
                className="flex-1 py-4 text-base bg-transparent outline-none text-ink"
              />
              {filters.search && (
                <button type="button" onClick={() => set('search', '')}><X size={16} className="text-muted hover:text-ink" /></button>
              )}
            </div>
            <button
              type="button"
              onClick={() => setShowF(f => !f)}
              className={`flex items-center gap-2 px-6 py-4 border text-[11px] uppercase tracking-[0.14em] font-medium transition-all ${showF ? 'bg-ink text-white border-ink' : 'border-line text-ink hover:border-gold'}`}
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </form>

          {showF && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              {[
                {
                  label: 'Transaction', key: 'type',
                  opts: [{ v:'all', l:'Buy or Rent' }, { v:'buy', l:'Buy' }, { v:'rent', l:'Rent' }],
                },
                {
                  label: 'Category', key: 'category',
                  opts: [{ v:'all', l:'All Categories' }, ...PROPERTY_CATEGORIES.map(c => ({ v:c.id, l:c.label }))],
                },
                {
                  label: 'City', key: 'city',
                  opts: CITIES.map(c => ({ v:c, l:c })),
                },
                {
                  label: 'Price Range', key: 'price',
                  opts: PRICE_RANGES.map((r, i) => ({ v:i, l:r.label })),
                },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-2">
                    {f.label}
                  </label>
                  <select
                    value={filters[f.key]}
                    onChange={e => set(f.key, f.key === 'price' ? parseInt(e.target.value) : e.target.value)}
                    className="input-field text-sm"
                  >
                    {f.opts.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-0 mb-10 border-b border-line">
          {[{ id: 'all', label: 'All' }, ...PROPERTY_CATEGORIES].map(cat => (
            <button
              key={cat.id}
              onClick={() => set('category', cat.id)}
              className={`px-5 py-3 text-[11px] uppercase tracking-[0.14em] font-medium border-b-2 transition-all -mb-px ${
                filters.category === cat.id
                  ? 'border-gold text-ink'
                  : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-8">
          <span className="text-ink font-display text-xl">
            {filtered.length}
          </span>
          &ensp;properties found
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="h-px w-12 bg-gold mx-auto mb-8" />
            <h2 className="text-3xl mb-3">
              No properties found
            </h2>
            <p className="text-sm text-muted mb-8">
              Try adjusting the search filters above.
            </p>
            <button
              onClick={() => setFilters({ search:'', category:'all', city:'All', type:'all', price:0 })}
              className="nav-link"
            >
              Clear all filters &rarr;
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
