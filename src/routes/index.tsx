import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Counter } from "@/components/Counter";
import { products } from "@/data/products";
import heroFactory from "@/assets/brochure-handshake.jpg";
import productsImg from "@/assets/brochure-products.jpg";
import creativityImg from "@/assets/brochure-creativity.jpg";
import {
  ArrowRight, ShieldCheck, Award, Factory, Users, CheckCircle2,
  Sparkles, Clock, Wrench, Layers, Zap, Cpu, FlaskConical, Pill,
  Leaf, Package, Cog, Building2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rekha Graphics — Industrial Sticker & Label Manufacturer" },
      { name: "description", content: "Premium industrial stickers, self-adhesive labels & printing solutions trusted by L&T and Schneider Electric. ISO-grade quality since 2001." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 23, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Industrial Clients" },
  { value: 1000, suffix: "+", label: "Custom Solutions" },
  { value: 99, suffix: "%", label: "Quality Assurance" },
];

const reasons = [
  { icon: Award, title: "High Quality Products", desc: "Premium-grade raw materials and rigorous outgoing checks." },
  { icon: Factory, title: "Advanced Infrastructure", desc: "Modern presses and finishing lines for high-volume runs." },
  { icon: Users, title: "Skilled Professionals", desc: "Experienced team with deep print & material expertise." },
  { icon: ShieldCheck, title: "Strict Quality Checks", desc: "Multi-stage QA across material, print and packaging." },
  { icon: Sparkles, title: "Industry-Leading Pricing", desc: "Cost-optimised production with no quality compromise." },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable lead times that respect your production schedule." },
  { icon: Wrench, title: "Custom Manufacturing", desc: "Bespoke shapes, sizes, materials and adhesives." },
  { icon: Layers, title: "Dedicated Support", desc: "Industrial account managers from quote to delivery." },
];

const industries = [
  { icon: Zap, name: "Electrical" },
  { icon: Cpu, name: "Electronics" },
  { icon: Pill, name: "Pharma" },
  { icon: FlaskConical, name: "Chemical" },
  { icon: Package, name: "Plastic" },
  { icon: Leaf, name: "Agriculture" },
  { icon: Building2, name: "Food Packaging" },
  { icon: Cog, name: "Machinery" },
];

const processSteps = [
  "Requirement Analysis", "Design & Prototyping", "Material Selection",
  "Precision Printing", "Quality Testing", "Packaging", "Delivery",
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFactory}
            alt="Rekha Graphics — trusted industrial partner"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white" />
          <div className="absolute inset-0 grid-bg opacity-60" />
        </div>
        <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-cyan/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl animate-float delay-300" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-cyan animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
              Trusted by L&T & Schneider Electric
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] animate-fade-up delay-100">
              Industrial Sticker &<br />
              <span className="gradient-text">Label Manufacturing</span><br />
              Experts
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up delay-200">
              Precision-engineered stickers, labels and printing solutions trusted by India's
              industry leaders. Quality assurance is our aim — and our strength.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-300">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md gradient-cyan text-cyan-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md glass text-foreground font-semibold hover:border-cyan transition-colors"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-6 animate-fade-up delay-500">
              {[
                { icon: ShieldCheck, label: "ISO-Grade Quality" },
                { icon: Award, label: "Since 2001" },
                { icon: Factory, label: "MIDC Ahilyanagar" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <b.icon className="h-4 w-4 text-cyan" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass rounded-xl p-6 hover:border-cyan transition-colors animate-fade-up"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-12 border-y border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Trusted by industry leaders
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-scroll-x w-max">
              {[...Array(2)].flatMap((_, k) =>
                ["Schneider Electric", "Larsen & Toubro", "L&T Switchgear", "Industrial OEMs", "Pharma Majors", "Electronics Co."].map((c, i) => (
                  <div key={`${k}-${i}`} className="flex items-center gap-3 text-2xl font-display font-bold text-muted-foreground/60 hover:text-cyan transition whitespace-nowrap">
                    <div className="h-2 w-2 rounded-full bg-cyan/60" />
                    {c}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">About Rekha Graphics</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Two decades of <span className="gradient-text">industrial printing</span> excellence
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Established in 2001, Rekha Graphics is a leading manufacturer and exporter of
              self-adhesive labels and industrial stickers. We deliver high-quality printing
              solutions with precision, durability and innovation — serving electronics,
              electrical, pharma, chemical, plastic, agriculture and food packaging industries.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Quality-focused manufacturing",
                "Advanced infrastructure",
                "Dedicated professional team",
                "Innovation-driven production",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{p}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-cyan font-semibold hover:gap-3 transition-all"
            >
              Learn our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 gradient-blue opacity-10 blur-2xl rounded-3xl" />
            <div className="relative bg-white rounded-2xl p-2 shadow-elevated border border-border">
              <img src={creativityImg} alt="Rekha Graphics craftsmanship" loading="lazy" className="w-full h-auto rounded-xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-glow border border-border animate-float">
              <div className="text-3xl font-display font-bold text-brand-blue">2001</div>
              <div className="text-xs text-muted-foreground">Established</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-glow border border-border animate-float delay-300">
              <Award className="h-6 w-6 text-brand-green" />
              <div className="text-xs text-muted-foreground mt-1">ISO 9001<br/>Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-surface/40 border-y border-border relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Why Choose Us</div>
            <h2 className="text-3xl md:text-5xl font-bold">Built for industrial demands</h2>
            <p className="mt-4 text-muted-foreground">
              Eight reasons why India's enterprises trust Rekha Graphics with mission-critical labelling.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="group relative glass rounded-xl p-6 glow-border hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-12 w-12 rounded-lg gradient-cyan flex items-center justify-center shadow-glow mb-4 group-hover:scale-110 transition-transform">
                  <r.icon className="h-6 w-6 text-cyan-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Our Products</div>
              <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">
                Engineered <span className="gradient-text">labels & stickers</span> for every surface
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md glass font-semibold hover:border-cyan transition-colors"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((p, idx) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative overflow-hidden rounded-xl bg-white border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img src={productsImg} alt={p.name} loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: `${(idx % 3) * 50}% ${Math.floor(idx / 3) * 50}%` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider font-semibold text-brand-blue">
                    {p.tagline}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.resistances.slice(0, 3).map((r) => (
                      <span key={r} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                        {r}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-brand-blue text-sm font-semibold group-hover:gap-3 transition-all">
                    View details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Industries We Serve</div>
            <h2 className="text-3xl md:text-5xl font-bold">An ecosystem of industrial partners</h2>
          </div>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="group glass rounded-xl p-6 text-center hover:border-cyan transition-colors"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-14 w-14 mx-auto rounded-full gradient-cyan flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <ind.icon className="h-7 w-7 text-cyan-foreground" />
                </div>
                <div className="mt-4 font-semibold">{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Manufacturing Process</div>
            <h2 className="text-3xl md:text-5xl font-bold">From requirement to delivery</h2>
          </div>
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <div key={step} className={`relative flex md:items-center gap-6 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full gradient-cyan shadow-glow ring-4 ring-background" />
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className="glass rounded-xl p-6 hover:border-cyan transition-colors">
                      <div className="text-xs text-cyan font-mono">STEP {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="mt-2 text-xl font-display font-semibold">{step}</h3>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Client Voice</div>
          <blockquote className="text-2xl md:text-4xl font-display font-medium leading-snug">
            "Our dedicated customized solutions ensure adherence to customer-specific
            <span className="gradient-text"> standards with timely delivery</span> and exceptional quality."
          </blockquote>
          <div className="mt-8 text-sm text-muted-foreground">— Rekha Graphics Quality Pledge</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16 text-center shadow-elevated">
            <div className="absolute inset-0 gradient-cyan opacity-10" />
            <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-cyan/30 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready for industrial-grade <span className="gradient-text">labels & stickers</span>?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Get a tailored quote within 24 hours. Custom shapes, materials and finishes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="px-6 py-3.5 rounded-md gradient-cyan text-cyan-foreground font-semibold shadow-glow">
                  Request a Quote
                </Link>
                <a href="tel:+919370147921" className="px-6 py-3.5 rounded-md glass font-semibold hover:border-cyan transition-colors">
                  Call +91 93701 47921
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
