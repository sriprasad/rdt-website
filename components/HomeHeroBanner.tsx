"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BANNER_IMAGES = [
  "/assert/image/image1.png",
  "/assert/image/image2.png",
  "/assert/image/image3.png",
  "/assert/image/image4.png",
];

const ROTATE_MS = 5000;

export default function HomeHeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % BANNER_IMAGES.length);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0">
        {BANNER_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden />
          </div>
        ))}
      </div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        {/* Logo + company name */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-28 w-28 md:h-40 md:w-40 mb-4">
            <Image
              src="/assert/image/RDTLogo.png"
              alt="Reliance Diamond Tools"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] mix-blend-multiply"
            />
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight banner-text-glossy">
            Reliance Diamond Tools
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 banner-text-glossy-strong">
          Engineering Precision Since 1994
        </h1>
        <p className="text-lg md:text-xl text-white font-medium mb-3 tracking-tight banner-text-glossy">
          Manufacturers of Advanced Diamond & Super Abrasive Cutting Tools
        </p>
        <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-10 leading-relaxed banner-text-glossy-soft">
          Reliance Diamond Tools has been delivering precision cutting solutions
          for over three decades. We specialize in Natural Diamond, PCD, CBN,
          Carbide and Ceramic tooling solutions designed to improve productivity
          and reduce operational costs.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900 active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Request a Quote
          </Link>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2">
          {BANNER_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
