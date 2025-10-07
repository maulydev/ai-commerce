import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";
import HStack from "@/components/shared/HStack";
import Link from "next/link";
import React from "react";

const topCategories = [
  {
    path: "/shop",
    label: "Shop All",
    image: "",
  },
  {
    path: "/shop",
    label: "Gamepad",
    image: "",
  },
  {
    path: "/shop",
    label: "Clothing & Fashion",
    image: "",
  },
  {
    path: "/shop",
    label: "Shop All",
    image: "",
  },
  {
    path: "/shop",
    label: "Gamepad",
    image: "",
  },
  {
    path: "/shop",
    label: "Clothing & Fashion",
    image: "",
  },
  {
    path: "/shop",
    label: "Shop All",
    image: "",
  },
  {
    path: "/shop",
    label: "Gamepad",
    image: "",
  },
  {
    path: "/shop",
    label: "Clothing & Fashion",
    image: "",
  },
  {
    path: "/shop",
    label: "Shop All",
    image: "",
  },
];

const TopCategories = () => {
  return (
    <Container>
      <HStack>
        <h6 className="text-2xl shrink-0">
          <strong>Top Categories</strong> Of The Month
        </h6>
        <div className="h-[2px] w-full bg-gray-200" />
      </HStack>

      <Card className="grid grid-cols-5 mt-6">
        {topCategories?.map(({ label, path }) => (
          <HStack key={path.slice(1)} className="border-[0.5px] p-6 text-sm">
            <div className="space-y-6 shrink-0 flex-1">
              <p>#{label}</p>
              <Link href={path} className="text-gray-500 hover:text-amber-500">Shop Now</Link>
            </div>
            <div className="bg-gray-200 h-full w-24" />
          </HStack>
        ))}
      </Card>
    </Container>
  );
};

export default TopCategories;
