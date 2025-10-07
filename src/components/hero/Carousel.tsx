"use client";

import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import { MoveLeft, MoveRight } from "lucide-react";
import HStack from "../shared/HStack";

const slides = [
  { color: "bg-red-500" },
  { color: "bg-yellow-400" },
  { color: "bg-green-500" },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card className="h-full w-full relative overflow-hidden group">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides?.map((item, index) => (
          <div key={index} className={`${item?.color} h-[32rem] w-full shrink-0`} />
        ))}
      </div>

      <HStack className="absolute bottom-4 inset-x-0 w-max mx-auto bg-black/10 p-2 rounded-full">
        {slides?.map((_, index) => (
          <button
          key={index}
            onClick={() => setCurrentSlide(index)}
            className={`cursor-pointer size-3 rounded-full bg-white transition-all duration-700 ${
              index === currentSlide ? "w-8" : ""
            }`}
          />
        ))}
      </HStack>

      <span className="opacity-0 group-hover:opacity-100 duration-700">
        <button
          onClick={handlePrevious}
          className="absolute left-0 inset-y-0 flex h-full"
        >
          <span className="cursor-pointer bg-black/10 rounded-r-full p-3 pr-4 my-auto text-white">
            <MoveLeft />
          </span>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 inset-y-0 flex h-full"
        >
          <span className="cursor-pointer bg-black/10 rounded-l-full p-3 pl-4 my-auto text-white">
            <MoveRight />
          </span>
        </button>
      </span>
    </Card>
  );
};

export default Carousel;
