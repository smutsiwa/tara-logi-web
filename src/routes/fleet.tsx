import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BranchMap } from "@/components/site/BranchMap";

export const Route = createFileRoute("/fleet")({
  component: Fleet,
  head: () => ({
    meta: [
      { title: "Fleet & Coverage — Taruchi Logistics" },
      { name: "description", content: "Modern fleet and live coverage map across Zimbabwe, Zambia, South Africa and China." },
      { property: "og:title", content: "Fleet & Coverage — Taruchi Logistics" },
    ],
  }),
});

const branches = [
  { flag: "🇿🇼", name: "Zimbabwe", city: "Harare (HQ)", role: "Headquarters & primary dispatch hub for Southern Africa." },
  { flag: "🇿🇲", name: "Zambia", city: "Lusaka", role: "Copperbelt operations and northern corridor gateway." },
  { flag: "🇿🇦", name: "South Africa", city: "Johannesburg", role: "Port access via Durban & Cape Town, regional distribution." },
  { flag: "🇨🇳", name: "China", city: "Shenzhen", role: "Sourcing, consolidation and outbound freight to Africa." },
];

const fleet = [
  { t: "Long-haul Trucks", n: "60+", d: "Mercedes-Benz Actros, Volvo FH, Scania R-series" },
  { t: "Refrigerated Units", n: "12", d: "Temperature-controlled, GPS-monitored" },
  { t: "Lowbeds & Abnormal", n: "18", d: "Heavy haul up to 100T payload" },
  { t: "Container Trailers", n: "40+", d: "20ft, 40ft, side-loaders & skeletals" },
];

function Fleet() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Fleet & coverage</span>
          <h1 className="text-4xl sm:text-6xl font-bold mt-3 mb-4 max-w-3xl">A modern fleet across <span className="text-gold">four countries</span>.</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">Track our network in real time. Every branch operates 24/7 to keep your cargo moving.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Live coverage map</h2>
        <p className="text-muted-foreground mb-8">Interactive map of our four branches and primary trade lanes.</p>
        <BranchMap />
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our branches</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((b) => (
            <div key={b.name} className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant hover:-translate-y-1 transition">
              <div className="text-4xl mb-3">{b.flag}</div>
              <h3 className="font-display text-xl font-bold">{b.name}</h3>
              <div className="text-gold text-sm font-semibold mb-3">{b.city}</div>
              <p className="text-sm text-muted-foreground">{b.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Fleet at a glance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((f) => (
              <div key={f.t} className="bg-card border border-border rounded-xl p-6">
                <div className="font-display text-4xl text-gold font-bold">{f.n}</div>
                <div className="font-semibold mt-2">{f.t}</div>
                <div className="text-sm text-muted-foreground mt-2">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
