import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import truck from "@/assets/hero-trucks.jpg";
import ship from "@/assets/hero-shipping.jpg";
import warehouse from "@/assets/hero-warehouse.jpg";
import air from "@/assets/hero-aircargo.jpg";

const slides = [
  { img: truck, eyebrow: "Road Freight", title: "Cross-Border Trucking", sub: "Reliable overland delivery across Southern Africa." },
  { img: ship, eyebrow: "Sea Freight", title: "Global Ocean Shipping", sub: "Container solutions linking China to Africa." },
  { img: warehouse, eyebrow: "Warehousing", title: "Secure Distribution Hubs", sub: "Bonded storage and last-mile distribution." },
  { img: air, eyebrow: "Air Cargo", title: "Express Air Freight", sub: "Time-critical shipments, anywhere in the world." },
];

export function HeroSlideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <img src={s.img} alt={s.title} className="h-full w-full object-cover" loading={idx === 0 ? "eager" : "lazy"} width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}
      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-block text-gold uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 border-b border-gold/40 pb-2">{slides[i].eyebrow}</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">{slides[i].title}</h1>
            <p className="text-lg sm:text-xl text-primary-foreground/85 mb-8 max-w-xl">{slides[i].sub}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/quote" className="inline-flex items-center gap-2 bg-gold text-primary font-semibold px-6 py-3 rounded-md shadow-gold hover:opacity-90 transition">Get a Quote <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-gold/60 text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-gold/10 transition">Our Services</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gold" : "w-5 bg-primary-foreground/40"}`} />
        ))}
      </div>
    </section>
  );
}
