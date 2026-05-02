import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { BranchMap } from "@/components/site/BranchMap";
import { Truck, Ship, FileCheck2, HardHat, ArrowRight, Globe2, ShieldCheck, Clock } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Taruchi Logistics — Freight Across Africa & China" },
      { name: "description", content: "End-to-end logistics: road, sea, air, customs clearing and project cargo across Zimbabwe, Zambia, South Africa and China." },
    ],
  }),
});

const services = [
  { icon: Truck, title: "Road Freight", desc: "Cross-border trucking and FTL/LTL across SADC corridors." },
  { icon: Ship, title: "Air & Sea Freight", desc: "International forwarding linking China and Africa." },
  { icon: FileCheck2, title: "Customs & Warehousing", desc: "Clearing, bonded warehousing and distribution." },
  { icon: HardHat, title: "Project & Mining Cargo", desc: "Heavy haul, abnormal loads and mining logistics." },
];

const stats = [
  { v: "4", l: "Country Branches" },
  { v: "10K+", l: "Shipments Delivered" },
  { v: "24/7", l: "Operations Support" },
  { v: "15+", l: "Years Experience" },
];

function Index() {
  return (
    <SiteLayout>
      <HeroSlideshow />

      {/* Stats strip */}
      <section className="bg-primary text-primary-foreground border-y border-gold/20">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl sm:text-4xl text-gold font-bold">{s.v}</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-primary-foreground/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mb-12">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">What we do</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 mb-4">End-to-end logistics, engineered for trade.</h2>
          <p className="text-muted-foreground text-lg">From a single pallet to oversized mining equipment, we handle every link of your supply chain.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-border rounded-xl p-7 hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-md bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold">Explore all services <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Coverage / Map */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 mb-10">
            <div className="lg:col-span-2">
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Global coverage</span>
              <h2 className="text-3xl sm:text-5xl font-bold mt-3 mb-4">A network built across <span className="text-gold">4 strategic hubs</span>.</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">Our offices in Zimbabwe, Zambia, South Africa and China give you a single trusted partner from origin to destination.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 content-center">
              {[{i:Globe2,t:"Global"},{i:ShieldCheck,t:"Insured"},{i:Clock,t:"On-time"},{i:Truck,t:"Tracked"}].map(({i:Icon,t})=>(
                <div key={t} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <BranchMap />
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-10 sm:p-16 text-center shadow-elegant">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">Ready to move your cargo?</h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">Tell us where it needs to go. We'll handle the rest — door to door.</p>
            <Link to="/quote" className="inline-flex items-center gap-2 bg-gold text-primary font-semibold px-8 py-3.5 rounded-md shadow-gold hover:opacity-90 transition">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
