import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ShieldCheck, Microscope, Cog, Beaker, FileCheck2 } from "lucide-react";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Assurance — Rekha Graphics" },
      { name: "description", content: "Stringent quality measures, high-grade materials, advanced machinery and skilled professionals — the Rekha Graphics quality framework." },
    ],
  }),
  component: Quality,
});

const pillars = [
  { icon: FileCheck2, title: "Stringent Quality Checks", desc: "Multi-stage inspection from raw material intake to outgoing dispatch." },
  { icon: Beaker, title: "High-Grade Raw Materials", desc: "Premium adhesives, films and inks sourced from trusted global suppliers." },
  { icon: ShieldCheck, title: "Skilled Professionals", desc: "Trained operators and quality engineers ensuring consistent output." },
  { icon: Cog, title: "Advanced Machinery", desc: "Modern presses and finishing equipment calibrated for industrial precision." },
  { icon: Microscope, title: "Research-Driven", desc: "Continuous R&D on substrates, adhesives and durability testing." },
];

function Quality() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Quality Assurance</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Quality is our <span className="gradient-text">aim and strength</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Rekha Graphics follows strict quality measures throughout manufacturing and
              delivery to ensure world-class output. Every sticker we ship is engineered
              to exceed your expectations.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="glass rounded-xl p-6 glow-border">
                <div className="h-12 w-12 rounded-lg gradient-cyan flex items-center justify-center shadow-glow">
                  <p.icon className="h-6 w-6 text-cyan-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-display font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 relative overflow-hidden rounded-3xl glass p-10 md:p-14">
            <div className="absolute inset-0 gradient-cyan opacity-10" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Custom-engineered for your spec</h2>
                <p className="mt-4 text-muted-foreground">
                  Different colors, shapes, sizes, adhesives and substrates — we build each
                  label to your exact industrial requirement. Share your drawing or sample,
                  and our team will engineer a solution.
                </p>
                <Link to="/contact" className="mt-6 inline-flex px-6 py-3 rounded-md gradient-cyan text-cyan-foreground font-semibold shadow-glow">
                  Submit your spec
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Color", "Shape", "Size", "Material", "Adhesive", "Finish"].map((c) => (
                  <div key={c} className="aspect-square glass rounded-xl flex items-center justify-center font-display font-semibold text-cyan">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
