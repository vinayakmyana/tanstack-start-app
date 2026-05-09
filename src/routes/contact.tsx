import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Request a Quote | Rekha Graphics" },
      { name: "description", content: "Contact Rekha Graphics for industrial stickers, labels and printing solutions. Call +91 93701 47921 or email contact@rekhagraphics.com." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", requirement: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.requirement.trim()) return;
    const subject = encodeURIComponent(`Quote request from ${form.name} (${form.company || "-"})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nRequirement:\n${form.requirement}`
    );
    window.location.href = `mailto:contact@rekhagraphics.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value.slice(0, 1000) });

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Contact</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Request <span className="gradient-text">industrial sticker</span> solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us about your application — we'll respond within 24 hours with a tailored quote.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <form onSubmit={submit} className="lg:col-span-3 glass rounded-2xl p-8 shadow-elevated space-y-5">
              {sent && (
                <div className="flex items-center gap-2 p-3 rounded-md bg-cyan/10 border border-cyan text-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan" />
                  Opening your email client to send the request…
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name *">
                  <input required maxLength={100} value={form.name} onChange={set("name")} className={inputCls} placeholder="Your name" />
                </Field>
                <Field label="Company">
                  <input maxLength={100} value={form.company} onChange={set("company")} className={inputCls} placeholder="Company name" />
                </Field>
                <Field label="Phone">
                  <input maxLength={20} value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+91 ..." />
                </Field>
                <Field label="Email *">
                  <input required type="email" maxLength={255} value={form.email} onChange={set("email")} className={inputCls} placeholder="you@company.com" />
                </Field>
              </div>
              <Field label="Requirement *">
                <textarea required maxLength={1000} value={form.requirement} onChange={set("requirement")} rows={5} className={`${inputCls} resize-none`} placeholder="Describe your sticker / label requirement, sizes, quantity..." />
              </Field>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md gradient-cyan text-cyan-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform">
                Send Request <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              <InfoCard icon={MapPin} title="Visit our facility">
                RL-40A, Opp. L&T Gate No. 4A,<br />
                Nimblak Road, M.I.D.C.,<br />
                Ahilyanagar - 414111, Maharashtra, India
              </InfoCard>
              <InfoCard icon={Phone} title="Call us">
                <a href="tel:+919370147921" className="block hover:text-cyan">+91 93701 47921</a>
                <a href="tel:+919890096905" className="block hover:text-cyan">+91 98900 96905</a>
                <a href="tel:+912412777002" className="block hover:text-cyan">+91 241 2777002</a>
              </InfoCard>
              <InfoCard icon={Mail} title="Email us">
                <a href="mailto:contact@rekhagraphics.com" className="block hover:text-cyan break-all">contact@rekhagraphics.com</a>
                <a href="mailto:vinayakmyana@gmail.com" className="block hover:text-cyan break-all">vinayakmyana@gmail.com</a>
              </InfoCard>
              <a
                href="https://wa.me/919370147921"
                target="_blank" rel="noopener noreferrer"
                className="block glass rounded-xl p-5 hover:border-cyan transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[oklch(0.7_0.18_150)] flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-semibold">WhatsApp Us</div>
                    <div className="text-sm text-muted-foreground">Instant chat with our team</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden glass shadow-elevated">
            <iframe
              title="Rekha Graphics Location"
              src="https://www.google.com/maps?q=Nimblak+MIDC+Ahilyanagar&output=embed"
              width="100%" height="380" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block grayscale-[0.3]"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

const inputCls = "w-full px-4 py-3 rounded-md bg-input/30 border border-border focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30 text-foreground placeholder:text-muted-foreground/70 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-muted-foreground mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg gradient-cyan flex items-center justify-center shrink-0 shadow-glow">
          <Icon className="h-5 w-5 text-cyan-foreground" />
        </div>
        <div>
          <div className="font-display font-semibold">{title}</div>
          <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
