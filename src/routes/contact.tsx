import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BranchMap } from "@/components/site/BranchMap";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Taruchi Logistics" },
      { name: "description", content: "Contact Taruchi Logistics. Email info@taruchilogistics.com or call +263 77 413 6153. Branches in Zimbabwe, Zambia, South Africa and China." },
      { property: "og:title", content: "Contact — Taruchi Logistics" },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(5).max(2000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) { setErr(parsed.error.issues[0]?.message ?? "Please fill all fields."); return; }
    const d = parsed.data;
    const body = `Name: ${d.name}\nEmail: ${d.email}\n\n${d.message}`;
    window.location.href = `mailto:info@taruchilogistics.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-bold">Get in touch</span>
          <h1 className="text-4xl sm:text-6xl font-bold mt-3 mb-4 max-w-3xl">Let's talk logistics.</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">Our team is ready to help with quotes, tracking and customs questions across all four branches.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
        {[
          { i: Mail, t: "Email", v: "info@taruchilogistics.com", href: "mailto:info@taruchilogistics.com" },
          { i: Phone, t: "Phone", v: "+263 77 413 6153", href: "tel:+263774136153" },
          { i: MapPin, t: "Headquarters", v: "Zimbabwe", href: undefined },
        ].map(({ i: Icon, t, v, href }) => (
          <a key={t} href={href} className="bg-card border border-border rounded-xl p-7 hover:shadow-elegant hover:-translate-y-1 transition block">
            <div className="h-12 w-12 rounded-md bg-gradient-gold flex items-center justify-center mb-4 shadow-gold"><Icon className="h-6 w-6 text-primary" /></div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{t}</div>
            <div className="font-display text-xl font-bold mt-1 break-words">{v}</div>
          </a>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Send us a message</h2>
          <p className="text-muted-foreground mb-6">We typically respond within one business day.</p>
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-elegant">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Email opening…</h3>
                <p className="text-sm text-muted-foreground">If nothing happens, email <a className="text-gold font-semibold" href="mailto:info@taruchilogistics.com">info@taruchilogistics.com</a> directly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <Input name="name" label="Name" />
                <Input name="email" label="Email" type="email" />
                <Input name="subject" label="Subject" />
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Message</label>
                  <textarea name="message" required rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                {err && <div className="text-sm text-destructive">{err}</div>}
                <button className="inline-flex items-center gap-2 bg-gold text-primary font-semibold px-6 py-3 rounded-md shadow-gold hover:opacity-90 transition w-fit">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Find us</h2>
          <p className="text-muted-foreground mb-6 flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Mon–Sat · 24/7 operations support</p>
          <BranchMap />
        </div>
      </section>
    </SiteLayout>
  );
}

function Input({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5">{label}</label>
      <input name={name} type={type} required
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
