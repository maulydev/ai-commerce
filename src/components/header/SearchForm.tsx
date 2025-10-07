"use client";

import { useState } from "react";
import HStack from "../shared/HStack";

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <form>
      <HStack className="border-2 border-amber-500 [&>*]:py-4 [&>*]:px-8 rounded-full overflow-hidden">
        <input
          value={searchTerm}
          type="text"
          placeholder="Search the store"
          className="outline-none w-sm"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-amber-500 hover:cursor-pointer font-semibold">
          Search
        </button>
      </HStack>
    </form>
  );
};
