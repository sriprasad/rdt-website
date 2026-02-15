export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string; // placeholder or path
}

const BANNER_IMAGES = [
  "/assert/image/image1.png",
  "/assert/image/image2.png",
  "/assert/image/image3.png",
  "/assert/image/image4.png",
];

export interface ProductChild {
  slug: string;
  name: string;
  iconKey: string;
  items: ProductItem[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  children: ProductChild[];
}

// Helper to generate 9 placeholder items (3 rows × 3 cols) with different images per product
function placeholders(prefix: string, childName: string): ProductItem[] {
  return Array.from({ length: 9 }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    name: `${childName} - Type ${i + 1}`,
    description: `High-precision ${childName.toLowerCase()} for demanding applications. Quality assured.`,
    image: BANNER_IMAGES[i % BANNER_IMAGES.length],
  }));
}

export const productCategories: ProductCategory[] = [
  {
    slug: "pcd-cbn-tools",
    name: "PCD & CBN Tools",
    children: [
      { slug: "pcd-inserts", name: "PCD Inserts", iconKey: "square", items: placeholders("pcd-inserts", "PCD Inserts") },
      { slug: "cbn-inserts", name: "CBN Inserts", iconKey: "layers", items: placeholders("cbn-inserts", "CBN Inserts") },
      { slug: "pcd-reamers", name: "PCD Reamers", iconKey: "circle-dot", items: placeholders("pcd-reamers", "PCD Reamers") },
      { slug: "pcd-end-mills", name: "PCD End Mills", iconKey: "cylinder", items: placeholders("pcd-end-mills", "PCD End Mills") },
      { slug: "pcd-drills", name: "PCD Drills", iconKey: "drill", items: placeholders("pcd-drills", "PCD Drills") },
      { slug: "mono-blocks", name: "Mono Blocks", iconKey: "box", items: placeholders("mono-blocks", "Mono Blocks") },
    ],
  },
  {
    slug: "natural-diamond-tools",
    name: "Natural Diamond Tools",
    children: [
      { slug: "single-point-diamond-dressers", name: "Single Point Diamond Dressers", iconKey: "gem", items: placeholders("spdd", "Single Point Diamond Dressers") },
      { slug: "multi-point-diamond-dressers", name: "Multi Point Diamond Dressers", iconKey: "grid-3x3", items: placeholders("mpdd", "Multi Point Diamond Dressers") },
      { slug: "diamond-blade-dressers", name: "Diamond Blade Dressers", iconKey: "slice", items: placeholders("diamond-blade", "Diamond Blade Dressers") },
      { slug: "natural-diamond-chisels", name: "Natural Diamond Chisels", iconKey: "hammer", items: placeholders("nd-chisels", "Natural Diamond Chisels") },
      { slug: "burnishing-tools", name: "Burnishing Tools", iconKey: "circle", items: placeholders("burnishing", "Burnishing Tools") },
    ],
  },
  {
    slug: "carbide-ceramic-tools",
    name: "Carbide & Ceramic Tools",
    children: [
      { slug: "solid-carbide-drills", name: "Solid Carbide Drills", iconKey: "drill", items: placeholders("carbide-drills", "Solid Carbide Drills") },
      { slug: "reamers", name: "Reamers", iconKey: "circle-dot", items: placeholders("reamers", "Reamers") },
      { slug: "end-mills", name: "End Mills", iconKey: "cylinder", items: placeholders("end-mills", "End Mills") },
      { slug: "iso-inserts", name: "ISO Inserts", iconKey: "square", items: placeholders("iso-inserts", "ISO Inserts") },
    ],
  },
  {
    slug: "honing-grinding-solutions",
    name: "Honing & Grinding Solutions",
    children: [
      { slug: "diamond-cbn-honing-sticks", name: "Diamond / CBN Honing Sticks", iconKey: "ruler", items: placeholders("honing-sticks", "Diamond / CBN Honing Sticks") },
      { slug: "diamond-cbn-wheels", name: "Diamond / CBN Wheels", iconKey: "rotate-cw", items: placeholders("diamond-wheels", "Diamond / CBN Wheels") },
      { slug: "mounted-points", name: "Mounted Points", iconKey: "target", items: placeholders("mounted-points", "Mounted Points") },
    ],
  },
  {
    slug: "tool-holding-solutions",
    name: "Tool Holding Solutions",
    children: [
      { slug: "milling-arbor", name: "Milling Arbor", iconKey: "wrench", items: placeholders("milling-arbor", "Milling Arbor") },
      { slug: "er-holder", name: "ER Holder", iconKey: "grip-horizontal", items: placeholders("er-holder", "ER Holder") },
      { slug: "end-mill-holder", name: "End Mill Holder", iconKey: "cylinder", items: placeholders("end-mill-holder", "End Mill Holder") },
      { slug: "hydrogrip-holder", name: "Hydrogrip Holder", iconKey: "grip-vertical", items: placeholders("hydrogrip", "Hydrogrip Holder") },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getCategoryChild(category: ProductCategory, childSlug: string): ProductChild | undefined {
  return category.children.find((c) => c.slug === childSlug);
}
