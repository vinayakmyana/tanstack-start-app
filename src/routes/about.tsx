import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Factory, Users, Sparkles, Target, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rekha Graphics | Industrial Sticker Manufacturer Since 2001" },
      { name: "description", content: "Rekha Graphics is a leading manufacturer & exporter of industrial stickers and self-adhesive labels, established in 2001 in Ahilyanagar, Maharashtra." },
    ],
  }),
  component: About,
});

const milestones = [
  { year: "2001", title: "Founded", desc: "Rekha Graphics established by Vinayak Dharmaji Myana in Ahilyanagar." },
  { year: "2008", title: "Industrial focus", desc: "Specialised production lines for control-panel grade overlays." },
  { year: "2014", title: "Enterprise clients", desc: "Onboarded L&T and Schneider Electric as long-term partners." },
  { year: "2019", title: "Capacity expansion", desc: "Modernised press infrastructure and added security label range." },
  { year: "2024", title: "Today", desc: "500+ industrial clients, 1000+ custom solutions delivered." },
];

function About() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">About Us</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Two decades of <span className="gradient-text">industrial printing</span> excellence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Rekha Graphics was established in 2001 and is a leading manufacturer and exporter
              of self-adhesive labels and industrial stickers. We deliver high-quality printing
              solutions with precision, durability and innovation — trusted by India's leading
              enterprises including Schneider Electric and Larsen & Toubro.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Our Mission", desc: "To be India's most trusted industrial label partner — delivering precision-engineered solutions that perform in the most demanding environments." },
              { icon: Eye, title: "Our Vision", desc: "Quality assurance is our aim and strength. We engineer every sticker to exceed expectations — for every client, every time." },
            ].map((c) => (
              <div key={c.title} className="glass rounded-xl p-8 glow-border">
                <div className="h-12 w-12 rounded-lg gradient-cyan flex items-center justify-center shadow-glow mb-4">
                  <c.icon className="h-6 w-6 text-cyan-foreground" />
                </div>
                <h3 className="text-2xl font-display font-semibold">{c.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-24">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Our Journey</div>
            <h2 className="text-3xl md:text-5xl font-bold">From 2001 to today</h2>
            <div className="mt-12 relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`relative flex md:items-center gap-6 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full gradient-cyan shadow-glow ring-4 ring-background" />
                    <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                      <div className="glass rounded-xl p-6 hover:border-cyan transition-colors">
                        <div className="text-2xl font-display font-bold gradient-text">{m.year}</div>
                        <div className="font-semibold mt-1">{m.title}</div>
                        <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, title: "Quality First" },
              { icon: Factory, title: "Modern Infrastructure" },
              { icon: Users, title: "Client-First Approach" },
              { icon: Sparkles, title: "Innovation Driven" },
            ].map((v) => (
              <div key={v.title} className="glass rounded-xl p-6 text-center">
                <v.icon className="h-8 w-8 mx-auto text-cyan" />
                <div className="mt-3 font-display font-semibold">{v.title}</div>
              </div>
            ))}
          </div>

          {/* Proprietor */}
          <div className="mt-24 glass rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">Leadership</div>
            <div className="text-2xl md:text-3xl font-display font-semibold">Vinayak Dharmaji Myana</div>
            <div className="mt-1 text-muted-foreground">Proprietor — Rekha Graphics</div>
            <Link to="/contact" className="mt-8 inline-flex px-6 py-3 rounded-md gradient-cyan text-cyan-foreground font-semibold shadow-glow">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
