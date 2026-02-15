"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Bell,
  HelpCircle,
  Menu,
  X,
  Phone,
} from "lucide-react";
import Navigation, { navLinks } from "./Navigation";
import { productCategories } from "@/data/products";

const iconButtons = [
  { href: "/contact", icon: Phone, label: "Contact" },
  { href: "#", icon: MessageCircle, label: "WhatsApp" },
  { href: "mailto:info@reliancediamondtools.com", icon: Mail, label: "Email" },
  { href: "#", icon: Bell, label: "Notification" },
  { href: "#", icon: HelpCircle, label: "Help & Support" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* LEFT: Logo only */}
          <Link href="/" className="flex items-center shrink-0 group z-10">
            <Image
              src="/assert/image/RDTLogo.png"
              alt="Reliance Diamond Tools"
              width={56}
              height={56}
              className="object-contain transition-transform group-hover:scale-105 h-10 w-10 md:h-12 md:w-12"
            />
          </Link>

          {/* CENTER: Menu - absolutely centered in header */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Navigation />
          </div>

          {/* RIGHT: Round icon buttons */}
          <div className="hidden md:flex items-center gap-1.5 z-10">
            {iconButtons.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:border-gray-500 hover:text-gray-900 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>

          {/* Mobile: Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-800 z-10 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-gray-300 bg-gray-50 py-3 px-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.href}>
                  <span className="flex items-center gap-3 text-sm font-medium text-gray-800 py-2.5 rounded-md px-3">
                    <item.icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </span>
                  <div className="pl-7 flex flex-col gap-0.5 pb-2">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products/${cat.slug}`}
                        className="text-sm text-gray-600 py-1.5 hover:text-gray-900 hover:bg-gray-100 rounded-md px-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-sm font-medium text-gray-800 py-2.5 hover:text-gray-900 rounded-md px-3 hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-300">
            {iconButtons.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
