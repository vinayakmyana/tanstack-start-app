import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Zap, Cpu, Pill, FlaskConical, Package, Leaf, Building2, Cog } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Rekha Graphics" },
      { name: "description", content: "Industrial stickers and labels for Electrical, Electronics, Pharma, Chemical, Plastic, Agriculture, Food Packaging and Machinery industries." },
    ],
  }),
  component: Industries,
});

const industries = [
  { icon: Zap, name: "Electrical", desc: "Switchgear nameplates, panel overlays, rating labels and warning stickers built for high-voltage environments." },
  { icon: Cpu, name: "Electronics", desc: "Asset tags, serial labels, polycarbonate keypads and barcode labels for electronic assemblies." },
  { icon: Pill, name: "Pharma", desc: "Compliance labels, batch coding stickers and tamper-evident seals meeting regulatory standards." },
  { icon: FlaskConical, name: "Chemical", desc: "Solvent and chemical-resistant polyester labels for drums, containers and processing equipment." },
  { icon: Package, name: "Plastic", desc: "Branding stickers and identification labels with strong adhesion to plastic substrates." },
  { icon: Leaf, name: "Agriculture", desc: "UV-stable outdoor labels for equipment, packaging and identification in farm environments." },
  { icon: Building2, name: "Food Packaging", desc: "Vibrant chromo and maplitho labels for food-grade packaging and promotional needs." },
  { icon: Cog, name: "Machinery", desc: "Heavy-duty machine overlays, instruction stickers and CE/safety labels for OEMs." },
];

function Industries() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-4">Industries</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Powering <span className="gradient-text">eight industrial</span> ecosystems
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From switchgear to pharma — our labels meet the exact standards your sector demands.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="glass rounded-xl p-6 glow-border hover:-translate-y-1 transition-all"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-12 w-12 rounded-lg gradient-cyan flex items-center justify-center shadow-glow">
                  <ind.icon className="h-6 w-6 text-cyan-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-display font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
