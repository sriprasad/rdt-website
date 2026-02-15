interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`font-heading text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 ${className}`}>
      {title}
    </h2>
  );
}
