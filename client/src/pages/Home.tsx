import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

/**
 * DESIGN SYSTEM: Bespoke Studios by Swavy - Dark Luxury Redesign
 * Premium, minimalist barber studio with bold dark luxury aesthetic
 * Color Palette: Deep Black (#000000) + Warm Gold (#c9a961) + Charcoal (#1a1a1a)
 * Typography: Playfair Display (headings) + Inter (body)
 * Motion: Smooth, intentional scroll reveals and hover effects
 */

const BOOKSY_URL = 'https://booksy.com/en-gb/170447_bespoke-studios-by-swavy_barber_515951_middlesbrough?rwg_token=AFd1xnEPE4FoZS6fPkRgum78nYE66ttpbjQ00hMQGefRBCbH8SHSbUgvpUguMlwZGnhc2ott4jWB1_BCZGq_-uwfIdZKbMjKoA%3D%3D#ba_s=seo';

// Scroll reveal component
function ScrollReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* STICKY HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-background/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold tracking-wider">
              <span className="text-primary">BESPOKE</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors duration-300">Services</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors duration-300">Gallery</a>
            <a href="#location" className="text-sm font-medium hover:text-primary transition-colors duration-300">Location</a>
          </nav>

          {/* CTA */}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block btn-premium"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO SECTION - Full Screen Cinematic */}
      <section className="relative h-screen flex items-center justify-start pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/hero-barber-luxury-dark-n7i84n5UdtrJrx2fKfKkRD.webp"
            alt="Premium barber work"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              transition: 'transform 0.1s linear'
            }}
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 max-w-2xl">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl font-bold leading-tight animate-fade-in-up">
                Precision
                <span className="block text-primary">Grooming</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Bespoke Studios by Swavy. Middlesbrough's premier grooming destination.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="btn-secondary"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Badge */}
            <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
                <span className="text-gray-400">5.0 · 100+ Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="text-primary" size={28} />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container">
          <ScrollReveal className="mb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Premium Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Every service is a masterclass in precision grooming. From sharp fades to complete transformations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fade Cut', price: '£22', time: '45 min', desc: 'Precision fade with sharp line-ups and detailed finishing.' },
              { title: 'Beard Shaping', price: '£18', time: '30 min', desc: 'Expert beard sculpting and edge work for defined style.' },
              { title: 'Complete Refresh', price: '£35', time: '60 min', desc: 'Full cut, beard work, and styling consultation.' }
            ].map((service, i) => (
              <ScrollReveal key={i} className="group">
                <div className="card-premium h-full">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">{service.time}</span>
                  </div>
                  <p className="text-muted-foreground mb-8">{service.desc}</p>
                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-sm inline-block"
                  >
                    Book Service
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 md:py-32 bg-card border-t border-border">
        <div className="container">
          <ScrollReveal className="mb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Recent Work
              </h2>
              <p className="text-lg text-muted-foreground">
                A showcase of precision cuts and transformations. Every fade tells a story.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-fade-work-nHA8faKro8GLfxPhXJuKy2.webp',
              'https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-beard-finish-Y4gKfNvHLTpQZxJ8mNoPqR.webp',
              'https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-teen-cut-A2bCdEfGhIjKlMnOpQrStUv.webp',
              'https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/hero-barber-portrait-dark-gz3WoRifdhZu5kz6yDUn4G.webp',
              'https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/barber-detail-hands-h7WurvtKPbUZ6SL6G77GdC.webp',
              'https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/barber-studio-interior-ZzPpu57dQf7DgHzDQpHjSG.webp'
            ].map((img, i) => (
              <ScrollReveal key={i} className="gallery-item">
                <img
                  src={img}
                  alt="Gallery work"
                  className="w-full h-full object-cover"
                />
                <div className="gallery-overlay">
                  <span className="text-white text-sm font-semibold">Precision Work</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Crafted for Confidence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Bespoke Studios by Swavy is more than a barbershop. It's a space where precision meets artistry, where every cut reflects your personal style and confidence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a commitment to excellence, we deliver sharp fades, clean line-ups, and transformations that matter. Every client leaves looking and feeling their best.
              </p>
              <div className="mt-12 flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">5-Star Reviews</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/barber-studio-interior-ZzPpu57dQf7DgHzDQpHjSG.webp"
                alt="Studio interior"
                className="rounded-sm w-full h-96 object-cover glow-gold"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-24 md:py-32 bg-card border-t border-border">
        <div className="container">
          <ScrollReveal className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Visit Us</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <MapPin className="text-primary" size={24} />
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Middlesbrough, UK<br />
                    <span className="text-sm">Premium grooming studio</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Phone className="text-primary" size={24} />
                    Contact
                  </h3>
                  <p className="text-muted-foreground">
                    Book through Booksy for instant availability<br />
                    <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">
                      View on Booksy →
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Follow</h3>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-border rounded-sm hover:bg-primary hover:text-background transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="p-3 bg-border rounded-sm hover:bg-primary hover:text-background transition-colors">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-border rounded-sm h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-4" size={48} />
                  <p className="text-muted-foreground">
                    Middlesbrough, UK<br />
                    <span className="text-sm">Premium Grooming Studio</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready for Your Next Cut?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Book your appointment now and experience premium grooming at Bespoke Studios by Swavy.
            </p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-block mb-8"
            >
              Book on Booksy
            </a>
            <p className="text-sm text-muted-foreground">
              5.0 rated · 100+ verified reviews · Middlesbrough
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">
                <span className="text-primary">BESPOKE</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Premium grooming studio in Middlesbrough.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Booking</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Book on Booksy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Availability</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Bespoke Studios by Swavy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
