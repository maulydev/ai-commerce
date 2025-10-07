import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Always prepend Home
  const breadcrumbs = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav className="flex items-center text-sm text-gray-600 space-x-1 mb-8">
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={index} className="flex items-center">
            {!isLast ? (
              <Link
                href={item.href || "#"}
                className="flex items-center hover:text-amber-500 transition-colors"
              >
                {index === 0 && <Home className="w-4 h-4 mr-1" />} 
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-gray-900">{item.label}</span>
            )}
            {!isLast && (
              <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
