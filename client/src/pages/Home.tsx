import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, Facebook, Instagram, ChevronDown } from 'lucide-react';

/**
 * DESIGN SYSTEM: Bespoke Studios by Swavy
 * Premium minimalist barber studio with bold visual impact
 * Color Palette: Dark charcoal (#0f0f0f) + Champagne Gold (#d4af37) + Electric Teal (#00d9ff)
 * Typography: Playfair Display (headings) + Poppins (body)
 * Motion: Smooth scroll reveals, hover animations, premium transitions
 */

const BOOKSY_URL = 'https://booksy.com/en-gb/170447_bespoke-studios-by-swavy_barber_515951_middlesbrough?rwg_token=AFd1xnEPE4FoZS6fPkRgum78nYE66ttpbjQ00hMQGefRBCbH8SHSbUgvpUguMlwZGnhc2ott4jWB1_BCZGq_-uwfIdZKbMjKoA%3D%3D#ba_s=seo';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* STICKY PREMIUM HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">S</span>
            </div>
            <span className="hidden sm:block font-bold text-lg tracking-tight">Bespoke</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Work</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
            <a href="#location" className="text-sm font-medium hover:text-primary transition-colors">Location</a>
          </nav>

          {/* CTA Button */}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block btn-premium text-sm"
          >
            Book directly here
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="container py-4 flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Work</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
              <a href="#location" className="text-sm font-medium hover:text-primary transition-colors">Location</a>
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="btn-premium text-sm text-center">
                Book directly here
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background with gradient and image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/hero-barber-abstract-BueFsuESigoXjuUyqAEokV.webp"
            alt="Premium barber background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Precision grooming,
                <span className="gradient-text"> built around your image.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Sharp fades. Clean line-ups. Bespoke style.
              </p>
            </div>

            {/* Hero Subtext */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Bespoke Studios by Swavy is a Middlesbrough grooming studio for men and boys who want a clean cut, sharp finish, and a look that feels intentional.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0 Rating</span>
              </div>
              <div className="text-sm font-semibold text-muted-foreground">
                100 verified reviews
              </div>
              <div className="text-sm font-semibold text-muted-foreground">
                Middlesbrough studio
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-center"
              >
                Book directly here
              </a>
              <a
                href="#services"
                className="btn-secondary text-center"
              >
                View services
              </a>
            </div>

            {/* Trust Message */}
            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              ✓ Use this page to book directly — the old Google website link may not load correctly.
            </p>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block relative">
            <div className="relative z-10">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/hero-barber-portrait-dark-gz3WoRifdhZu5kz6yDUn4G.webp"
                alt="Premium barber cut"
                className="w-full rounded-2xl shadow-2xl glow-primary"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronDown className="text-primary" size={24} />
          </div>
        </div>
      </section>

      {/* BOOKING FIX BANNER */}
      <section className="bg-card border-y border-border py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book without the broken link.</h2>
              <p className="text-muted-foreground text-lg">
                The old website link may trigger a browser warning. This page sends you straight to the live Booksy booking page.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                Open live booking page
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Precision grooming tailored to your style. Every service is crafted with attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="card-premium">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">Adult Hair Cut</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">£25</span>
                  <span className="text-muted-foreground">40 min</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Sharp, tailored cuts finished with precision.
              </p>
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="btn-premium w-full text-center text-sm">
                Book this service
              </a>
            </div>

            {/* Service Card 2 - Featured */}
            <div className="card-premium md:scale-105 md:shadow-2xl md:shadow-primary/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                FEATURED
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">Adult Hair & Beard</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">£30</span>
                  <span className="text-muted-foreground">40 min</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                A complete grooming finish — hair, beard, shape and detail.
              </p>
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="btn-premium w-full text-center text-sm">
                Book this service
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="card-premium">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">Teen Hair Cut</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">£17</span>
                  <span className="text-muted-foreground">40 min</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Clean, confident cuts for young men and boys.
              </p>
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="btn-premium w-full text-center text-sm">
                Book this service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / WORK SECTION */}
      <section id="gallery" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A lookbook of precision grooming. Each cut tells a story of style and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* Gallery Item 1 */}
            <div className="gallery-item group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-fade-work-nHA8faKro8GLfxPhXJuKy2.webp"
                alt="Fade work"
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">
                <p className="text-white font-semibold">Fade work</p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="gallery-item group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-beard-finish-e82SYMViP8o5UKq9ZP89An.webp"
                alt="Beard finish"
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">
                <p className="text-white font-semibold">Beard finish</p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="gallery-item group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-teen-cut-FYFPdhmAXKJ.webp"
                alt="Teen cut"
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">
                <p className="text-white font-semibold">Teen cut</p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="gallery-item group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-fade-work-nHA8faKro8GLfxPhXJuKy2.webp"
                alt="Sharp line-up"
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">
                <p className="text-white font-semibold">Sharp line-up</p>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="gallery-item group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-beard-finish-e82SYMViP8o5UKq9ZP89An.webp"
                alt="Afro-textured hair"
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">
                <p className="text-white font-semibold">Afro-textured hair</p>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="gallery-item group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663668560240/i6d5BfHNDxKVKrxeaWtBm7/gallery-teen-cut-FYFPdhmAXKJ.webp"
                alt="Clean studio finish"
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">
                <p className="text-white font-semibold">Clean studio finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Clients</h2>
            <p className="text-muted-foreground text-lg">100 verified reviews on Booksy</p>
          </div>

          {/* Main Stats */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border mb-12 text-center">
            <div className="text-6xl md:text-7xl font-bold gradient-text mb-4">5.0</div>
            <p className="text-2xl font-semibold mb-2">100 verified reviews</p>
            <p className="text-muted-foreground text-lg">Built on precision, consistency and trust.</p>
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Top Barber',
              'Really pleased with the results',
              'Best in the game',
              'Great service, 100% recommend',
              'Excellent Service',
              'Serious cut'
            ].map((review, i) => (
              <div key={i} className="card-premium">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg font-semibold mb-4">{review}</p>
                <p className="text-xs text-muted-foreground">Verified Booksy client</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / BRAND SECTION */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Changing perspectives through bespoke grooming precision.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Bespoke Studios by Swavy is built around precision, image and consistency. Whether it's a fresh fade, a teen cut, beard work or a complete refresh, the focus is simple: a clean finish that suits you.
              </p>
              <p className="text-muted-foreground italic">
                "Every cut is a reflection of your confidence. We're here to make sure it's sharp."
              </p>
            </div>
            <div className="relative hidden md:block">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">EST. 2020</div>
                  <p className="text-muted-foreground">Middlesbrough's premium grooming studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="location" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Visit Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Location Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Bespoke Studios by Swavy</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">21a Hartington Road</p>
                      <p className="text-muted-foreground">Middlesbrough, TS1 5ED</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.google.com/maps/search/21a+Hartington+Road+Middlesbrough+TS1+5ED"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Get directions
                </a>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium text-center"
                >
                  Book before you arrive
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/swavygrooming/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Facebook size={20} className="text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-card rounded-lg hover:bg-primary/10 transition-colors opacity-50 cursor-not-allowed"
                  >
                    <Instagram size={20} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">21a Hartington Road</p>
                <p className="text-muted-foreground">Middlesbrough, TS1 5ED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for the next cut?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book directly through Swavy's live Booksy page.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-block mb-8"
          >
            Book directly here
          </a>
          <p className="text-sm text-muted-foreground">
            5.0 rated · 100 Booksy reviews · Middlesbrough
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-sm">S</span>
                </div>
                <span className="font-bold">Bespoke</span>
              </div>
              <p className="text-sm text-muted-foreground">Premium grooming studio in Middlesbrough.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">21a Hartington Road</p>
              <p className="text-sm text-muted-foreground">Middlesbrough, TS1 5ED</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/swavygrooming/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>Bookings are managed securely through Booksy.</p>
            <p className="mt-2">© 2024 Bespoke Studios by Swavy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background border-t border-border p-4 z-40">
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium w-full text-center"
        >
          Book directly here
        </a>
      </div>

      {/* Mobile CTA Padding */}
      <div className="md:hidden h-20"></div>
    </div>
  );
}
