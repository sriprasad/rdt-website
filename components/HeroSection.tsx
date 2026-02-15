import Link from "next/link";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  paragraph?: string;
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

export default function HeroSection({
  heading,
  subheading,
  paragraph,
  primaryButton,
  secondaryButton,
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,0,0,0.03),transparent)]" aria-hidden />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          {heading}
        </h1>
        {subheading && (
          <p className="text-xl text-gray-600 font-medium mb-5 tracking-tight">{subheading}</p>
        )}
        {paragraph && (
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {paragraph}
          </p>
        )}
        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap justify-center gap-4">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow"
              >
                {primaryButton.label}
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                {secondaryButton.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
