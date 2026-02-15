"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Info,
  Package,
  Wrench,
  Factory,
  Users,
  Phone,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { productCategories } from "@/data/products";

export const navLinks: { href: string; label: string; icon: LucideIcon; dropdown?: boolean }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/products", label: "Products", icon: Package, dropdown: true },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/industries", label: "Industries", icon: Factory },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navigation() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const isProductsActive = pathname.startsWith("/products");

  return (
    <nav className="flex items-center gap-1.5">
      {navLinks.map((item) => {
        if (item.dropdown) {
          return (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all duration-200 ${
                  isProductsActive
                    ? "bg-gray-300 text-gray-900 shadow-md border border-gray-400"
                    : "text-gray-800 hover:bg-gray-200 hover:text-gray-900 border border-transparent hover:border-gray-300"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full pt-1.5 z-50 min-w-[220px]">
                  <div className="rounded-xl border border-gray-200 bg-white py-2 shadow-lg">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products/${cat.slug}`}
                        className="block px-4 py-2.5 text-[13px] font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => setProductsOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all duration-200 ${
              pathname === item.href
                ? "bg-gray-300 text-gray-900 shadow-md border border-gray-400"
                : "text-gray-800 hover:bg-gray-200 hover:text-gray-900 border border-transparent hover:border-gray-300"
            }`}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
