import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { products, type Product } from "@/data/products";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import productsImg from "@/assets/brochure-products.jpg";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.name} — Rekha Graphics` : "Product — Rekha Graphics" },
        { name: "description", content: p?.description ?? "Industrial product by Rekha Graphics." },
      ],
    };
  },
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex text-cyan">Back to products</Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const idx = products.findIndex((p) => p.slug === product.slug);
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-blue transition-colors">
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>

          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated border border-border bg-surface">
              <img
                src={productsImg}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: `${(idx % 3) * 50}% ${Math.floor(idx / 3) * 33}%` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-brand-blue border border-border">
                <ShieldCheck className="h-3.5 w-3.5" /> Quality Tested
              </div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg px-4 py-2 border border-border">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Rekha Graphics</div>
                <div className="font-display font-bold text-brand-blue">{product.name}</div>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-cyan mb-3">{product.tagline}</div>
              <h1 className="text-3xl md:text-5xl font-bold">{product.name}</h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="mt-8">
                <h3 className="font-display font-semibold mb-3">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-cyan shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display font-semibold mb-2">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((a) => (
                      <span key={a} className="text-xs px-3 py-1.5 rounded-full glass">{a}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-2">Industries</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((a) => (
                      <span key={a} className="text-xs px-3 py-1.5 rounded-full glass">{a}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-display font-semibold mb-2">Resistance</h3>
                <div className="flex flex-wrap gap-2">
                  {product.resistances.map((r) => (
                    <span key={r} className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full gradient-cyan text-cyan-foreground font-semibold">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/contact" className="px-6 py-3.5 rounded-md gradient-cyan text-cyan-foreground font-semibold shadow-glow">
                  Request Quote
                </Link>
                <a href="tel:+919370147921" className="px-6 py-3.5 rounded-md glass font-semibold hover:border-cyan transition-colors">
                  Call to discuss
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
