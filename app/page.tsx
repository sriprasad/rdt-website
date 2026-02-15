import type { Metadata } from "next";
import Link from "next/link";
import HomeHeroBanner from "../components/HomeHeroBanner";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Reliance Diamond Tools | Engineering Precision Since 1994",
  description:
    "Manufacturers of Advanced Diamond & Super Abrasive Cutting Tools. Natural Diamond, PCD, CBN, Carbide and Ceramic tooling solutions for improved productivity.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero with scrolling background + overlay */}
      <HomeHeroBanner />

      {/* Section 2 – Company Snapshot */}
      <section
        id="about"
        className="relative py-24 md:py-28 bg-white border-b border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="About Reliance Diamond Tools"
            className="mb-6 text-center"
          />
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            Founded in 1994 by Mr. J. Ravi, the company began as a small-scale
            craftsmanship-driven unit. Today, it has grown into a ₹60 Crore
            enterprise with over 130 skilled professionals and a 38,000 sq.ft
            manufacturing facility. Our team of engineers and technocrats work
            together to deliver reliable, high-performance tooling solutions.
          </p>
        </div>
      </section>

      {/* Section 3 – Why Choose Us */}
      <section
        id="why-us"
        className="relative py-24 md:py-28 bg-gray-50/90"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Us"
            className="mb-12 text-center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "30+ Years Experience",
              "130+ Skilled Professionals",
              "38,000 Sq Ft Facility",
              "Technical Optimization Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
              >
                <p className="font-heading font-semibold text-gray-900 text-base md:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – Industries Served Preview */}
      <section
        id="industries"
        className="relative py-24 md:py-28 bg-white border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="Industries We Serve"
            className="mb-6 text-center"
          />
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            We serve multiple industrial sectors including Automotive,
            Aerospace, Optical, Medical Devices and General Engineering
            industries.
          </p>
          <Link
            href="/industries"
            className="inline-flex items-center justify-center rounded-xl border-2 border-gray-900 bg-transparent px-8 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            View Industries
          </Link>
        </div>
      </section>
    </>
  );
}
