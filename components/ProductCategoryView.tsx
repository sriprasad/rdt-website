"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Square,
  Layers,
  CircleDot,
  Box,
  Drill,
  Gem,
  LayoutGrid,
  Scissors,
  Hammer,
  Circle,
  Minus,
  Wrench,
  GripHorizontal,
  GripVertical,
  Ruler,
  RotateCw,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { ProductCategory, ProductChild, ProductItem } from "../data/products";
import ProductDetailModal from "./ProductDetailModal";

const CHILD_ICONS: Record<string, LucideIcon> = {
  square: Square,
  layers: Layers,
  "circle-dot": CircleDot,
  cylinder: Box,
  drill: Drill,
  box: Box,
  gem: Gem,
  "grid-3x3": LayoutGrid,
  slice: Scissors,
  hammer: Hammer,
  circle: Circle,
  minus: Minus,
  disc: Circle,
  wrench: Wrench,
  "grip-horizontal": GripHorizontal,
  "grip-vertical": GripVertical,
  ruler: Ruler,
  "rotate-cw": RotateCw,
  target: Target,
};

interface Props {
  category: ProductCategory;
}

export default function ProductCategoryView({ category }: Props) {
  const [activeChild, setActiveChild] = useState<ProductChild>(category.children[0]);
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);

  return (
    <div className="py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1 (top): Child menu as horizontal tabs, centered, glossy buttons */}
        <section className="border-b border-gray-200 pb-4 mb-6">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-3 text-center">
            {category.name}
          </p>
          <nav className="flex flex-wrap justify-center gap-3">
            {category.children.map((child) => {
              const isActive = activeChild.slug === child.slug;
              const Icon = CHILD_ICONS[child.iconKey] ?? Box;
              return (
                <button
                  key={child.slug}
                  type="button"
                  onClick={() => setActiveChild(child)}
                  className={`flex items-center justify-center gap-2 w-[180px] min-w-[180px] h-10 rounded-lg text-xs font-medium transition-all duration-200 truncate px-2 border ${
                    isActive
                      ? "border-gray-300 text-gray-900"
                      : "border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                  }`}
                  style={{
                    background: isActive
                      ? "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(229,231,235,0.98) 100%)"
                      : "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,1) 100%)",
                    boxShadow: isActive
                      ? "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.08)"
                      : "inset 0 1px 0 rgba(255,255,255,0.95), 0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate" title={child.name}>
                    {child.name}
                  </span>
                </button>
              );
            })}
          </nav>
        </section>

        {/* Section 2 (below): Image & detail grid - 3 columns × N rows */}
        <section>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-4">
            {activeChild.name}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeChild.items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-gray-900 text-sm mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setDetailProduct(item)}
                      className="text-xs font-medium text-gray-600 hover:text-gray-900 underline underline-offset-2"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ProductDetailModal product={detailProduct} onClose={() => setDetailProduct(null)} />
    </div>
  );
}
