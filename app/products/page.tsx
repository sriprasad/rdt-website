import type { Metadata } from "next";
import Link from "next/link";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | Reliance Diamond Tools",
  description:
    "Our product portfolio: PCD & CBN Tools, Natural Diamond Tools, Carbide & Ceramic Tools, Honing & Grinding Solutions, Tool Holding Solutions.",
};

export default function ProductsPage() {
  return (
    <div className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Our Product Portfolio
        </h1>
        <p className="text-base text-gray-600 mb-12">
          Select a category to view products and specifications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200"
            >
              <span className="font-heading font-semibold text-gray-900">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
