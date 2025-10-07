"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  StarHalf,
  Heart,
  Plus,
  Minus,
  Share2,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

// ✅ Type for image error handler
type ImageErrorEvent = React.SyntheticEvent<HTMLImageElement, Event>;

// ✅ ProductGallery Component
const ProductGallery: React.FC = () => {
  const colors = ["red", "blue", "black", "green"];
  const [selected, setSelected] = useState<number>(0);
  const [mainImage, setMainImage] = useState<string>("/placeholder-image.png");

  const handleImageError = (e: ImageErrorEvent) => {
    e.currentTarget.src = "/placeholder-image.png";
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-full max-w-md relative">
        <Image
          src={mainImage}
          alt="Product main image"
          onError={handleImageError}
          width={400}
          height={400}
          className="w-full rounded-none shadow-sm border border-gray-200 object-cover"
        />
      </div>

      <div className="flex justify-center space-x-3">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => {
              setSelected(index);
              setMainImage("/placeholder-image.png");
            }}
            className={`border p-1 rounded-none transition ${
              selected === index
                ? "border-gray-800"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <div className="w-14 h-14 relative">
              <Image
                src="/placeholder-image.png"
                alt={`Color ${color}`}
                onError={handleImageError}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// ✅ Props for StarRating
interface StarRatingProps {
  rating: number;
  reviewCount: string;
}

// ✅ StarRating Component
const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center space-x-3 text-gray-600 my-3">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
        {halfStar && (
          <StarHalf className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        )}
      </div>
      <span className="text-sm">({reviewCount} reviews yet)</span>
      <a
        href="#review"
        className="text-sm text-blue-600 hover:underline hover:text-blue-800"
      >
        Write a Review
      </a>
    </div>
  );
};

// ✅ Props for ProductInfo
interface ProductInfoProps {
  price: string;
  brand: string;
  sku: string;
}

// ✅ ProductInfo Component
const ProductInfo: React.FC<ProductInfoProps> = ({ price, brand, sku }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = "Check out this amazing product!";

  const socialLinks = [
    {
      icon: <FaFacebookF size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    },
    {
      icon: <FaTwitter size={18} />,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    },
    {
      icon: <FaWhatsapp size={18} />,
      url: `https://wa.me/?text=${shareText} ${shareUrl}`,
    },
    {
      icon: <FaEnvelope size={18} />,
      url: `mailto:?subject=${shareText}&body=${shareUrl}`,
    },
  ];

  return (
    <div className="pl-6">
      <h1 className="text-3xl font-semibold mb-3">
        Recliner Synthetic Deck Chair
      </h1>

      <StarRating rating={4.5} reviewCount="No" />

      <p className="text-4xl font-bold my-5 text-gray-800">${price}</p>

      <div className="border-y py-4 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between max-w-xs">
          <span className="font-semibold">Brand:</span>
          <span>{brand}</span>
        </div>
        <div className="flex justify-between max-w-xs">
          <span className="font-semibold">SKU:</span>
          <span>{sku}</span>
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <p className="font-semibold mb-2">Quantity:</p>
        <div className="flex items-center">
          <button
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            className="border border-gray-300 w-10 h-10 flex items-center justify-center rounded-none hover:bg-gray-100"
          >
            <Minus size={16} />
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 h-10 text-center border-y border-gray-300 rounded-none focus:outline-none"
          />
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="border border-gray-300 w-10 h-10 flex items-center justify-center rounded-none hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-8">
        <button className="bg-gray-900 text-white uppercase px-8 py-3 rounded-none font-semibold hover:bg-gray-800 transition flex items-center gap-2">
          <Share2 size={18} /> Add to Cart
        </button>
        <button className="border border-gray-400 text-gray-800 uppercase px-8 py-3 rounded-none font-semibold hover:bg-gray-100 transition flex items-center gap-2">
          <Heart size={18} /> Wish List
        </button>
      </div>

      {/* ✅ Social Share */}
      <div className="flex items-center mt-6 space-x-3 text-gray-600">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 p-2 rounded-none cursor-pointer hover:bg-gray-100 transition"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

// ✅ Props for ProductTabs
interface ProductTabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

// ✅ ProductTabs Component
const ProductTabs: React.FC<ProductTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const descriptionContent = (
    <div className="leading-relaxed text-gray-700 space-y-4">
      <p>
        The last laundry cart you&apos;ll ever buy. This industrial non-collapsible
        cart is constructed with a steel framed body using heavyweight canvas
        capped with a soft leather rim sitting on four smooth rolling casters.
      </p>
      <p className="font-semibold">
        Natural Heavyweight Canvas with Vegetable Tanned Leather Rim
      </p>
      <p className="font-semibold">
        Measures 45 x 45 x 63 cm / 18 x 18 x 21 in
      </p>
      <p className="italic border border-dashed p-3 bg-gray-50">
        This item is not available for international orders nor does it qualify
        for gift-wrapping.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </div>
  );

  const tabs = [
    { title: "Description", content: descriptionContent },
    { title: "Videos", content: <p>Video content goes here...</p> },
    { title: "Show Reviews", content: <p>Reviews section goes here...</p> },
  ];

  return (
    <div className="mt-12">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={`px-6 py-3 font-medium transition rounded-none ${
              activeTab === tab.title
                ? "border-b-2 border-gray-800 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="py-6">
        {tabs.find((t) => t.title === activeTab)?.content}
      </div>
    </div>
  );
};

// ✅ Main Page
const ProductDetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Description");

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        <div className="flex-1">
          <ProductGallery />
        </div>
        <div className="flex-1">
          <ProductInfo price="200.00" brand="QPS" sku="CLC-1" />
        </div>
      </div>

      <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default ProductDetailPage;
