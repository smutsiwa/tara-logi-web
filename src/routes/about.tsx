import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Target, Eye, Heart } from "lucide-react";
import warehouse from "@/assets/hero-warehouse.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us — Taruchi Logistics" },
      { name: "description", content: "Taruchi Logistics — a trusted freight and logistics partner moving cargo across Africa and China." },
      { property: "og:title", content: "About — Taruchi Logistics" },
    ],
  }),
});

function About() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Our story</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-3 mb-4">Built on trust. <span className="text-gold">Driven by trade.</span></h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">Taruchi Logistics was founded to bridge African producers with global markets. Today we operate four strategic branches across Zimbabwe, Zambia, South Africa and China, moving everything from a single pallet to mining equipment.</p>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
            <img src={warehouse} alt="Taruchi warehouse" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid md:grid-cols-3 gap-6">
        {[
          { i: Target, t: "Mission", d: "To deliver world-class logistics that empower African and Chinese trade — every shipment, on time, in full." },
          { i: Eye, t: "Vision", d: "To be the most trusted cross-border logistics partner across Africa and the China-Africa corridor." },
          { i: Heart, t: "Values", d: "Integrity, accountability and an obsession with the customer's outcome on every load we move." },
        ].map(({ i: Icon, t, d }) => (
          <div key={t} className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition">
            <div className="h-12 w-12 rounded-md bg-gradient-gold flex items-center justify-center mb-5 shadow-gold"><Icon className="h-6 w-6 text-primary" /></div>
            <h3 className="font-display text-2xl font-bold mb-3">{t}</h3>
            <p className="text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's move what matters.</h2>
          <Link to="/contact" className="inline-block bg-gold text-primary font-semibold px-8 py-3.5 rounded-md shadow-gold hover:opacity-90 transition">Talk to us</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
