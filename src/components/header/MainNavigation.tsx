"use client";

import Link from "next/link";
import Container from "../shared/Container";
import HStack from "../shared/HStack";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/shop",
    label: "Shop All",
  },
  {
    path: "/shipping",
    label: "Shipping & Returns",
  },
  {
    path: "/contact",
    label: "Contact Us",
  },
];

const MainNavigation = () => {
  const pathname = usePathname();
  return (
    <Container className="sticky top-0 pb-4 z-40 bg-white shadow pt-4">
      <HStack
        as="ul"
        className="gap-x-8 [&>*]:hover:text-amber-500 [&>*]:hover:cursor-pointer font-semibold text-slate-700"
      >
        {routes?.map(({ path, label }) => (
          <li
            key={path.slice(1)}
            className={
              pathname === path
                ? "text-amber-500 underline underline-offset-4 decoration-wavy"
                : ""
            }
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </HStack>
    </Container>
  );
};

export default MainNavigation;
