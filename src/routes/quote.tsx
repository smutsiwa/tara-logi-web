import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/quote")({
  component: Quote,
  head: () => ({
    meta: [
      { title: "Get a Quote — Taruchi Logistics" },
      { name: "description", content: "Request a freight quote from Taruchi Logistics. Road, sea, air, customs and project cargo." },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  service: z.string().min(1),
  origin: z.string().trim().min(2).max(120),
  destination: z.string().trim().min(2).max(120),
  cargo: z.string().trim().min(2).max(500),
  weight: z.string().trim().max(60).optional(),
});

function Quote() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);
    const f = new FormData(e.currentTarget);
    const data = Object.fromEntries(f.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please complete all required fields.");
      return;
    }
    const d = parsed.data;
    const body = `Name: ${d.name}\nCompany: ${d.company ?? "-"}\nEmail: ${d.email}\nPhone: ${d.phone}\nService: ${d.service}\nOrigin: ${d.origin}\nDestination: ${d.destination}\nCargo: ${d.cargo}\nWeight/Volume: ${d.weight ?? "-"}`;
    const mailto = `mailto:info@taruchilogistics.com?subject=${encodeURIComponent(`Quote request — ${d.service}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Request a quote</span>
          <h1 className="text-4xl sm:text-6xl font-bold mt-3 mb-4 max-w-3xl">Tell us about your shipment.</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">We'll come back to you with a tailored, all-inclusive quote within one business day.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-elegant">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="h-14 w-14 text-gold mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Your email is opening…</h2>
              <p className="text-muted-foreground">If nothing happens, email us directly at <a className="text-gold font-semibold" href="mailto:info@taruchilogistics.com">info@taruchilogistics.com</a></p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Full Name *" />
              <Field name="company" label="Company" />
              <Field name="email" label="Email *" type="email" />
              <Field name="phone" label="Phone *" type="tel" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold mb-1.5">Service *</label>
                <select name="service" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a service…</option>
                  <option>Road Freight</option>
                  <option>Sea Freight</option>
                  <option>Air Freight</option>
                  <option>Customs Clearing & Warehousing</option>
                  <option>Project / Mining Cargo</option>
                </select>
              </div>
              <Field name="origin" label="Origin *" />
              <Field name="destination" label="Destination *" />
              <Field name="weight" label="Weight / Volume" placeholder="e.g. 12 tons, 1x40ft" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold mb-1.5">Cargo description *</label>
                <textarea name="cargo" required rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              {err && <div className="sm:col-span-2 text-sm text-destructive">{err}</div>}
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center gap-2 bg-gold text-primary font-semibold px-6 py-3 rounded-md shadow-gold hover:opacity-90 transition">
                  <Send className="h-4 w-4" /> Send request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  const required = label.includes("*");
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
