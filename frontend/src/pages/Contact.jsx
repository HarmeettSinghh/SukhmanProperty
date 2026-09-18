import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import CONTACT, { whatsappLink } from '../config/contact';

export default function Contact() {
  return (
    <main>
      <div className="bg-ink text-white pt-32 pb-16">
        <div className="container">
          <p className="eyebrow !mb-4">
            <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>We're here to help
          </p>
          <h1 className="text-white">
            Contact us
          </h1>
        </div>
      </div>

      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-[400px_1fr] gap-20">
            {/* Left: contact details */}
            <div className="fade-up">
              <span className="eyebrow mb-8">
                <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>Direct contact
              </span>

              <div className="divide-y divide-line">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-start gap-5 py-7 group"
                >
                  <div className="w-12 h-12 border border-line flex items-center justify-center flex-shrink-0 group-hover:border-gold group-hover:bg-gold transition-colors">
                    <Phone size={16} className="text-gold group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-1">
                      Call us
                    </p>
                    <p className="font-display text-2xl text-ink group-hover:text-gold transition-colors">
                      {CONTACT.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 py-7 group"
                >
                  <div className="w-12 h-12 border border-line flex items-center justify-center flex-shrink-0 group-hover:border-[#25D366] group-hover:bg-[#25D366] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" className="text-[#25D366] group-hover:text-white">
                      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.79.73 5.41 2.004 7.676L2 30l6.52-2.068A13.95 13.95 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.39 19.99c-.32.9-1.58 1.647-2.593 1.863-.69.146-1.59.262-4.62-.99-3.886-1.587-6.393-5.523-6.59-5.78-.19-.257-1.57-2.09-1.57-3.99 0-1.9.99-2.83 1.342-3.225.352-.395.768-.494 1.023-.494.256 0 .512.003.737.013.236.012.552-.09.864.66.32.77 1.09 2.66 1.185 2.854.097.196.163.426.033.686-.13.26-.194.42-.388.647-.193.226-.407.504-.58.677-.194.194-.396.404-.17.79.226.386.998 1.642 2.143 2.66 1.472 1.314 2.713 1.72 3.098 1.917.386.196.61.163.836-.098.226-.26.972-1.132 1.23-1.52.258-.386.515-.322.865-.193.352.13 2.235 1.054 2.622 1.247.386.194.645.29.74.452.097.16.097.924-.224 1.822z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-1">
                      WhatsApp
                    </p>
                    <p className="font-display text-2xl text-ink group-hover:text-[#25D366] transition-colors">
                      {CONTACT.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-5 py-7 group"
                >
                  <div className="w-12 h-12 border border-line flex items-center justify-center flex-shrink-0 group-hover:border-gold group-hover:bg-gold transition-colors">
                    <Mail size={16} className="text-gold group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-1">
                      Email
                    </p>
                    <p className="font-display text-xl text-ink break-all group-hover:text-gold transition-colors">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-5 py-7">
                  <div className="w-12 h-12 border border-line flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-1">
                      Office
                    </p>
                    <p className="text-base text-ink">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 py-7">
                  <div className="w-12 h-12 border border-line flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-muted mb-1">
                      Working hours
                    </p>
                    <p className="text-base text-ink">
                      {CONTACT.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="fade-up delay-200">
              <span className="eyebrow mb-8">
                <span className="text-gold font-display mr-2 tracking-normal text-lg">—</span>Send a message
              </span>
              <h2 className="text-3xl mb-2">
                We will respond within 24 hours.
              </h2>
              <p className="text-base mb-10 max-w-[45ch] text-muted">
                Fill in the form below and our team will reach out with the best options for your requirement.
              </p>
              
              <div className="bg-white border border-line p-8 md:p-10 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="h-64 flex flex-col items-center justify-center border-t border-line bg-stone">
        <MapPin size={24} className="text-gold" />
        <p className="mt-3 font-display text-2xl text-ink">
          {CONTACT.addressShort}
        </p>
        <p className="text-[11px] mt-2 uppercase tracking-[0.14em] text-muted font-medium">
          Google Maps embed
        </p>
      </div>
    </main>
  );
}
