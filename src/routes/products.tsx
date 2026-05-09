import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import productsImg from "@/assets/brochure-products.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Industrial Stickers & Labels | Rekha Graphics" },
      { name: "description", content: "Explore polycarbonate, PVC, vinyl, polyester, security stickers, barcode labels, acrylic labels and paper gaskets manufactured by Rekha Graphics." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-brand-blue mb-4 font-semibold">Our Products</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Industrial <span className="gradient-text">stickers, labels</span> & printed components
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ten core product families — engineered for durability, designed for your application.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, idx) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group relative overflow-hidden rounded-xl bg-white border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={productsImg}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: `${(idx % 3) * 50}% ${Math.floor(idx / 3) * 33}%` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider font-semibold text-brand-blue">
                    {p.tagline}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.resistances.slice(0, 4).map((r) => (
                      <span key={r} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                        {r}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold group-hover:gap-3 transition-all">
                      View details <ArrowRight className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-brand-green font-semibold">In stock</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
