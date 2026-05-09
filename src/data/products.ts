export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  industries: string[];
  resistances: string[];
};

export const products: Product[] = [
  {
    slug: "polycarbonate-stickers",
    name: "Polycarbonate Stickers",
    tagline: "Premium control panel grade",
    description: "Hard-wearing polycarbonate overlays engineered for control panels, machinery and outdoor industrial environments where durability is non-negotiable.",
    features: ["Scratch resistant", "Chemical resistant", "Embossed options", "Multi-color screen print"],
    applications: ["Control panels", "Switchgear", "Machine overlays", "Instrument labels"],
    industries: ["Electrical", "Electronics", "Machinery"],
    resistances: ["UV", "Water", "Chemical", "Abrasion"],
  },
  {
    slug: "pvc-stickers",
    name: "PVC Stickers",
    tagline: "Versatile flexible vinyl",
    description: "High-strength PVC stickers with strong adhesion, ideal for branding, warning labels and product identification across industries.",
    features: ["Long-lasting adhesive", "Tear resistant", "Glossy/matte finish", "Custom die-cut"],
    applications: ["Product labels", "Warning signs", "Branding"],
    industries: ["Electronics", "Pharma", "Plastic"],
    resistances: ["UV", "Water"],
  },
  {
    slug: "polyester-stickers",
    name: "Polyester Stickers",
    tagline: "High-temperature stable",
    description: "Dimensionally stable polyester labels with excellent print fidelity, designed for harsh operating conditions.",
    features: ["Heat resistant up to 150°C", "Solvent resistant", "Sharp print quality"],
    applications: ["Asset tags", "Rating plates", "Serial labels"],
    industries: ["Electrical", "Machinery", "Chemical"],
    resistances: ["Heat", "Chemical", "Water"],
  },
  {
    slug: "vinyl-stickers",
    name: "Vinyl Stickers",
    tagline: "Outdoor-ready graphics",
    description: "UV-stable vinyl stickers for vehicle decals, signage and outdoor industrial use with vibrant color retention.",
    features: ["7-year outdoor life", "Conformable", "Full-color printing"],
    applications: ["Vehicle decals", "Signage", "Equipment branding"],
    industries: ["Electrical", "Agriculture", "Machinery"],
    resistances: ["UV", "Water", "Weather"],
  },
  {
    slug: "security-stickers",
    name: "Security Stickers",
    tagline: "Tamper-evident protection",
    description: "Void / honeycomb tamper-evident security labels that visibly leave a residue when removed, protecting your assets and warranty.",
    features: ["VOID pattern on removal", "Sequential numbering", "Custom logo", "Holographic options"],
    applications: ["Warranty seals", "Asset protection", "Tamper evidence"],
    industries: ["Electronics", "Pharma", "Logistics"],
    resistances: ["Tamper", "Solvent", "Water"],
  },
  {
    slug: "chromo-art-stickers",
    name: "Chromo Art Stickers",
    tagline: "Vibrant printed paper",
    description: "Premium coated paper stickers with brilliant color reproduction for product labelling and promotional applications.",
    features: ["Brilliant color", "Cost effective", "Easy die-cut"],
    applications: ["Product labels", "Promotional", "Packaging"],
    industries: ["Food Packaging", "Pharma", "FMCG"],
    resistances: ["Standard indoor"],
  },
  {
    slug: "maplitho-paper-stickers",
    name: "Maplitho Paper Stickers",
    tagline: "Economical paper labels",
    description: "Smooth, uncoated maplitho paper stickers ideal for high-volume labelling needs with reliable adhesion.",
    features: ["Writable surface", "Eco-friendly", "Bulk economical"],
    applications: ["Address labels", "Carton labels", "Inventory"],
    industries: ["Logistics", "Food Packaging", "Pharma"],
    resistances: ["Indoor"],
  },
  {
    slug: "acrylic-labels",
    name: "Acrylic Labels",
    tagline: "Premium 3D nameplates",
    description: "Crystal-clear acrylic dome labels and nameplates that add a premium 3D look to control panels and branded products.",
    features: ["3D dome effect", "Premium finish", "UV stable resin"],
    applications: ["Brand badges", "Nameplates", "Logos"],
    industries: ["Electronics", "Automotive", "Machinery"],
    resistances: ["UV", "Water", "Scratch"],
  },
  {
    slug: "barcode-labels",
    name: "Barcode Labels",
    tagline: "Track every asset",
    description: "Precision-printed barcode and QR labels with crisp readability for inventory, asset tracking and supply-chain workflows.",
    features: ["Variable data printing", "Sequential serials", "Thermal-transfer ready"],
    applications: ["Inventory", "Asset tracking", "Logistics"],
    industries: ["Logistics", "Pharma", "Electronics"],
    resistances: ["Smudge", "Water"],
  },
  {
    slug: "paper-gaskets-washers",
    name: "Paper Gaskets & Washers",
    tagline: "Precision die-cut components",
    description: "Custom-engineered paper, fibre and rubber gaskets and washers — die-cut to your exact specifications for industrial assemblies.",
    features: ["Tight tolerances", "Custom shapes", "Multi-material"],
    applications: ["Sealing", "Insulation", "Spacing"],
    industries: ["Machinery", "Electrical", "Automotive"],
    resistances: ["Heat", "Oil"],
  },
];
