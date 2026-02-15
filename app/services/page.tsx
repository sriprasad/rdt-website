import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Services | Reliance Diamond Tools",
  description:
    "Technical support and performance optimization. We work closely with customers to select optimal tool geometry and improve machine parameters.",
};

const serviceItems = [
  "Select optimal tool geometry",
  "Improve machine parameters",
  "Increase tool life",
  "Reduce rejection rate",
  "Monitor tool performance",
  "Provide after-sales technical support",
];

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-10">
          Technical Support & Performance Optimization
        </h1>

        <p className="text-base text-gray-600 mb-6">
          Our technical team works closely with customers to:
        </p>
        <ul className="text-base text-gray-600 space-y-2 list-disc list-inside mb-10">
          {serviceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="text-base text-gray-700 font-medium">
          We stay involved until your tooling performance reaches expected
          output levels.
        </p>
      </div>
    </div>
  );
}
