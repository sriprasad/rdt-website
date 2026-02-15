import { ReactNode } from "react";

interface ProductCardProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export default function ProductCard({ title, children, className = "" }: ProductCardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${className}`}
    >
      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2 tracking-tight">
        {title}
      </h3>
      {children && <div className="text-sm text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
}
