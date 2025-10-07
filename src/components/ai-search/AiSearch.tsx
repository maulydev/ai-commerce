"use client";

import React, { useState } from "react";
import Center from "../shared/Center";
import { ScanSearch } from "lucide-react";
import Card from "../shared/Card";
import VStack from "../shared/VStack";
import HStack from "../shared/HStack";

const AiSearch = () => {
  const [showAiSearch, setShowAiSearch] = useState(false);

  const handleShowAiSearch = () => setShowAiSearch(!showAiSearch);

  return (
    <>
      <button
        onClick={handleShowAiSearch}
        className="hover:text-amber-500 hover:cursor-pointer"
      >
        <Center>
          <ScanSearch />
          <p>AI Search</p>
        </Center>
      </button>

      <>
        <div
          onClick={handleShowAiSearch}
          className={`bg-gray-950/50 fixed backdrop-blur-xl inset-0 z-[90] duration-700 ${
            showAiSearch ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        <Card
          className={`bg-transparent shadow-none fixed top-0 inset-x-0 mx-auto max-w-2xl duration-700 ease-in-out z-[99] p-1 ${
            showAiSearch ? "translate-y-40" : "-translate-y-full"
          }`}
        >
          {/* <button
            onClick={handleShowAiSearch}
            className="bg-gray-100 p-2 cursor-pointer group"
          >
            <DoorOpen className="group-hover:scale-110 duration-300 ease-in-out" />
          </button> */}

          <VStack className="text-white">
            <Center className="my-4">
              <h2 className="text-6xl font-black text-center">
                LunaCart AI
              </h2>
            </Center>

            <form>
              <HStack className="border-2 border-white [&>*]:py-4 [&>*]:px-8 rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Describe what you're looking for..."
                  className="outline-none w-full font-medium"
                />
                <button className="bg-white hover:cursor-pointer font-semibold text-gray-700 shrink-0">
                  Luna Search
                </button>
              </HStack>
            </form>
          </VStack>
        </Card>
      </>
    </>
  );
};

export default AiSearch;
