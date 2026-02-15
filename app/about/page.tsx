import type { Metadata } from "next";
import {
  History,
  Target,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Reliance Diamond Tools",
  description:
    "Our journey of precision engineering since 1994. From a small unit to a leading manufacturer in super abrasive tools.",
};

const infrastructureItems = [
  "38,000 sq.ft facility",
  "Advanced grinding machines",
  "CNC machining centers",
  "Dedicated inspection and quality control systems",
  "Experienced engineers and experts",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero intro */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,0,0,0.03),transparent)]" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our Journey of Precision Engineering
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a small craftsmanship-driven unit in 1994 to a leading name in
            super abrasive tooling — quality, innovation and trust at the core.
          </p>
        </div>
      </section>

      {/* Glossy content sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 space-y-8">
        {/* Our History */}
        <section
          className="relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_8px_16px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12),0_16px_32px_-16px_rgba(0,0,0,0.06)] transition-shadow duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.98) 100%)",
            boxShadow:
              "0 4px 24px -4px rgba(0,0,0,0.08), 0 8px 16px -8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <History className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                Our History
              </h2>
            </div>
            <div className="space-y-4 pl-0 md:pl-16">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Reliance Diamond Tools was founded in 1994 by Mr. J. Ravi with a
                steadfast belief in craftsmanship and precision engineering. What
                began as a small, dedicated unit has grown into a leading
                manufacturer of super abrasive tools, trusted by industries
                across the globe.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our growth has been built on three pillars: uncompromising
                quality in every product we deliver, continuous innovation in
                materials and processes, and lasting relationships with
                customers who rely on us for consistent performance. Over three
                decades, we have evolved with the industry while staying true to
                our founding values — making us not just a supplier, but a
                long-term partner in your manufacturing success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section
          className="relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_8px_16px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12),0_16px_32px_-16px_rgba(0,0,0,0.06)] transition-shadow duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.98) 100%)",
            boxShadow:
              "0 4px 24px -4px rgba(0,0,0,0.08), 0 8px 16px -8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <Target className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                Our Philosophy
              </h2>
            </div>
            <div className="space-y-4 pl-0 md:pl-16">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We believe tooling is not just about supply — it is about
                improving your productivity and strengthening your competitive
                edge. Every product we design and deliver is aimed at helping you
                achieve more: higher output, fewer rejects, and lower total cost
                of ownership.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our focus is to optimize production parameters, enhance
                reliability on the shop floor, and reduce total tool economy
                cost over the life of your operations. We combine technical
                expertise with a partnership approach, so you get more than
                cutting tools — you get solutions that perform consistently and
                support your goals for quality and efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section
          className="relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_8px_16px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12),0_16px_32px_-16px_rgba(0,0,0,0.06)] transition-shadow duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.98) 100%)",
            boxShadow:
              "0 4px 24px -4px rgba(0,0,0,0.08), 0 8px 16px -8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                Infrastructure
              </h2>
            </div>
            <ul className="space-y-3 pl-0 md:pl-16">
              {infrastructureItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base md:text-lg text-gray-600"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
