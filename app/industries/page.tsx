import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Industries We Serve | Reliance Diamond Tools",
  description:
    "We serve Automotive, Aerospace, Optical, Medical Devices, Die & Mold, and General Engineering industries.",
};

const industries = [
  {
    title: "Automotive",
    description: "Precision tooling for engine components, transmission, and automotive manufacturing.",
  },
  {
    title: "Aerospace",
    description: "High-performance cutting solutions for aerospace-grade materials and components.",
  },
  {
    title: "Optical Industry",
    description: "Diamond and super abrasive tools for optical lens and precision optics manufacturing.",
  },
  {
    title: "Medical Devices",
    description: "Reliable tooling for medical device manufacturing and surgical instrument production.",
  },
  {
    title: "Die & Mold",
    description: "PCD, CBN and carbide solutions for die and mold making applications.",
  },
  {
    title: "General Engineering",
    description: "Versatile cutting tools for a wide range of general engineering and machining applications.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-14">
          Industries We Serve
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <ProductCard key={industry.title} title={industry.title}>
              <p className="mt-1">{industry.description}</p>
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}
