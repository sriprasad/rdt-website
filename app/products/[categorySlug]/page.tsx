import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productCategories, getCategoryBySlug } from "@/data/products";
import ProductCategoryView from "@/components/ProductCategoryView";

export function generateStaticParams() {
  return productCategories.map((c) => ({ categorySlug: c.slug }));
}

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: "Products | Reliance Diamond Tools" };
  return {
    title: `${category.name} | Reliance Diamond Tools`,
    description: `Explore ${category.name} - ${category.children.map((c) => c.name).join(", ")}`,
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();
  return <ProductCategoryView category={category} />;
}
