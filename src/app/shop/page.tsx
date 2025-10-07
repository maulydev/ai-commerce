"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ShoppingBag } from "lucide-react";
import Container from "@/components/shared/Container";

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice?: string;
  brand: string;
  imageUrl?: string;
  tag?: "SALE" | "NEW";
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  oldPrice,
  brand,
  imageUrl,
  tag,
}) => {
  const isImagePlaceholder = !imageUrl || imageUrl.includes("Image Coming Soon");

  return (
    <div className="flex flex-col items-center text-center p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition duration-300 group">
      {/* Product Image */}
      <div className="w-full h-48 mb-3 relative flex items-center justify-center overflow-hidden rounded-none">
        {tag && (
          <span
            className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-none ${
              tag === "NEW" ? "bg-green-600 text-white" : "bg-red-600 text-white"
            }`}
          >
            {tag}
          </span>
        )}
        <Image
          src={isImagePlaceholder ? "/placeholder-image.png" : imageUrl!}
          alt={name}
          width={300}
          height={300}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <p className="text-xs text-gray-500">{brand}</p>
      <p className="text-sm font-medium text-gray-800 hover:text-blue-600 transition duration-150 cursor-pointer h-10 overflow-hidden">
        {name}
      </p>

      {/* Price */}
      <div className="flex items-center mt-1 space-x-2">
        <span className="text-red-600 font-semibold">${price}</span>
        {oldPrice && (
          <span className="text-gray-400 text-xs line-through">${oldPrice}</span>
        )}
      </div>
    </div>
  );
};

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  children,
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-3 border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:text-black transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

interface CheckboxFilterProps {
  label: string;
  count: number;
  checked?: boolean;
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
  label,
  count,
  checked = false,
}) => (
  <label className="flex items-center text-sm text-gray-700 my-1 cursor-pointer hover:text-black">
    <input
      type="checkbox"
      defaultChecked={checked}
      className="w-4 h-4 rounded-none border-gray-300 mr-2 text-blue-600 focus:ring-0"
    />
    {label} ({count})
  </label>
);

interface BestSellerItemProps {
  name: string;
  price: string;
  imageUrl?: string;
}

const BestSellerItem: React.FC<BestSellerItemProps> = ({
  name,
  price,
  imageUrl,
}) => (
  <div className="flex items-start my-3">
    <Image
      src={imageUrl || "/placeholder-image.png"}
      alt={name}
      width={48}
      height={48}
      className="w-12 h-12 object-cover mr-3 rounded-none border border-gray-200"
    />
    <div>
      <p className="text-sm font-medium text-gray-800 hover:text-blue-600 transition cursor-pointer leading-tight">
        {name}
      </p>
      <p className="text-xs text-gray-700 mt-0.5">${price}</p>
    </div>
  </div>
);

const ShopPage: React.FC = () => {
  const products: ProductCardProps[] = [
    {
      name: "Recliner Synthetic Deck Chair",
      brand: "QPS",
      price: "200.00",
      imageUrl: "/placeholder-image.png",
    },
    {
      name: "Diamond Stone Stool",
      brand: "Furniture & Decor",
      price: "650.00",
      oldPrice: "710.00",
      imageUrl: "/placeholder-image.png",
      tag: "SALE",
    },
    {
      name: "Diamond Brooms & Brush",
      brand: "Diamond",
      price: "60.00",
      imageUrl: "/placeholder-image.png",
    },
    {
      name: "Diamond White Candle",
      brand: "Diamond",
      price: "69.00",
      oldPrice: "79.00",
      imageUrl: "/placeholder-image.png",
      tag: "SALE",
    },
  ];

  const bestSellers: BestSellerItemProps[] = [
    {
      name: "Diamond Drawing Brushes",
      price: "70.00",
      imageUrl: "/placeholder-image.png",
    },
    {
      name: "Canvas Laundry Cart",
      price: "200.00",
      imageUrl: "/placeholder-image.png",
    },
  ];

  const departments = [
    "Shop All",
    "Furniture & Decor",
    "Mobiles & Tablets",
    "Clothing & Fashion",
    "Audio & Video",
  ];

  return (
    <Container className="px-4 sm:px-6 lg:px-8 bg-white">
      {/* Header */}
      <div className="flex justify-between py-4 text-sm text-gray-500">
        <span>Shop by Department</span>
        <span className="font-semibold text-gray-800">Shop All</span>
      </div>

      <div className="border-t border-gray-200"></div>

      <div className="flex pt-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 pr-8 border-r border-gray-200">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3 text-gray-800">
              Shop by Department
            </h3>
            <ul className="space-y-1 text-sm">
              {departments.map((dept) => (
                <li
                  key={dept}
                  className={`py-1 ${
                    dept === "Shop All"
                      ? "font-bold text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {dept}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-bold mb-3 text-gray-800">Refine By</h3>
          </div>

          <FilterSection title="Brand">
            <CheckboxFilter label="QPS" count={5} checked />
            <CheckboxFilter label="Sageform" count={2} />
            <CheckboxFilter label="Diamond" count={4} />
          </FilterSection>

          <FilterSection title="Color">
            <CheckboxFilter label="Black" count={3} />
            <CheckboxFilter label="Blue" count={5} />
            <CheckboxFilter label="Red" count={2} />
          </FilterSection>

          <FilterSection title="Price">
            <div className="flex items-center space-x-2 my-2 text-sm text-gray-600">
              <input
                type="text"
                placeholder="Min"
                className="w-1/2 p-1 border border-gray-300 rounded-none"
              />
              <span>-</span>
              <input
                type="text"
                placeholder="Max"
                className="w-1/2 p-1 border border-gray-300 rounded-none"
              />
              <button className="text-xs text-blue-600 hover:underline">
                Apply
              </button>
            </div>
          </FilterSection>

          {/* Best Seller Section */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-3 text-gray-800">
              Best Seller
            </h3>
            {bestSellers.map((item, i) => (
              <BestSellerItem key={i} {...item} />
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4 pl-8">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <ShoppingBag size={20} /> Shop All
            </h2>
            <select className="border border-gray-300 p-1 rounded-none text-sm focus:ring-0 focus:border-gray-500">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}

            {/* Placeholder Products */}
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCard
                key={`placeholder-${i}`}
                name={`Product Title ${i + 1}`}
                brand="Brand X"
                price="XX.XX"
                imageUrl="/placeholder-image.png"
              />
            ))}
          </div>
        </main>
      </div>
    </Container>
  );
};

export default ShopPage;
