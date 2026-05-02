import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Truck, Ship, Plane, FileCheck2, HardHat, Warehouse, ArrowRight } from "lucide-react";
import projectImg from "@/assets/service-projectcargo.jpg";
import customsImg from "@/assets/service-customs.jpg";
import truckImg from "@/assets/hero-trucks.jpg";
import shipImg from "@/assets/hero-shipping.jpg";
import airImg from "@/assets/hero-aircargo.jpg";
import warehouseImg from "@/assets/hero-warehouse.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Taruchi Logistics" },
      { name: "description", content: "Road freight, air & sea freight, customs clearing, warehousing and project cargo across Africa and China." },
      { property: "og:title", content: "Services — Taruchi Logistics" },
    ],
  }),
});

const services = [
  { icon: Truck, img: truckImg, title: "Road Freight", desc: "Cross-border trucking across the SADC region. FTL, LTL and refrigerated transport with GPS-tracked fleets and trained operators on every corridor." },
  { icon: Ship, img: shipImg, title: "Sea Freight", desc: "FCL and LCL ocean shipping linking China to African ports. Competitive consolidations, port-to-door delivery and full documentation." },
  { icon: Plane, img: airImg, title: "Air Freight", desc: "Time-critical and express air cargo. Charter capacity, perishables handling and global IATA partner network." },
  { icon: FileCheck2, img: customsImg, title: "Customs Clearing", desc: "Licensed clearing agents handling duties, permits, transit bonds and SADC certificates of origin — fast, compliant, transparent." },
  { icon: Warehouse, img: warehouseImg, title: "Warehousing & Distribution", desc: "Bonded and general warehousing with inventory management, order fulfilment and last-mile distribution." },
  { icon: HardHat, img: projectImg, title: "Project & Mining Cargo", desc: "Heavy-haul, abnormal loads, mining equipment relocation and turn-key project logistics planning." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Our capabilities</span>
          <h1 className="text-4xl sm:text-6xl font-bold mt-3 mb-4 max-w-3xl">Logistics services tailored to your trade.</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">Every shipment is unique. We combine our four service pillars to deliver the right solution at the right cost.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 space-y-16">
        {services.map((s, i) => (
          <div key={s.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute top-4 left-4 h-12 w-12 rounded-md bg-gradient-gold flex items-center justify-center shadow-gold">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.25em] font-bold">0{i + 1} / Service</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">{s.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{s.desc}</p>
              <Link to="/quote" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold">Request this service <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
