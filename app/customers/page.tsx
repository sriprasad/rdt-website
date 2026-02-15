import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Customers | Reliance Diamond Tools",
  description:
    "Trusted by leading brands. Reliable tooling partner with consistent quality and strong technical support.",
};

const testimonials = [
  {
    quote:
      "Reliable tooling partner with consistent quality and strong technical support.",
    author: "Customer A",
    role: "Manufacturing Head",
  },
  {
    quote:
      "Reliable tooling partner with consistent quality and strong technical support.",
    author: "Customer B",
    role: "Production Manager",
  },
  {
    quote:
      "Reliable tooling partner with consistent quality and strong technical support.",
    author: "Customer C",
    role: "Engineering Lead",
  },
];

export default function CustomersPage() {
  return (
    <div className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-14">
          Trusted by Leading Brands
        </h1>

        {/* Placeholder grid for customer logos */}
        <section className="mb-16">
          <SectionTitle title="Our Customers" className="mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-md border border-gray-200 bg-gray-50 aspect-[2/1] flex items-center justify-center text-xs text-gray-400"
              >
                Logo placeholder
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <SectionTitle title="Testimonials" className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
              >
                <p className="text-base text-gray-600 italic mb-3">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-medium text-gray-900">{t.author}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
