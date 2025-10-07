"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Container from "../shared/Container";
import HStack from "../shared/HStack";
import VStack from "../shared/VStack";
import Link from "next/link";
import { ChevronDown, User, Globe } from "lucide-react";

const TopBar = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          {/* Left text */}
          <p className="text-gray-600">
            Welcome to the{" "}
            <span className="font-semibold">
              AI Powered Shopping Experience
            </span>
            .
          </p>

          {/* Right side popovers */}
          <HStack className="gap-x-6">
            {/* Account Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-1 text-gray-700 hover:text-black transition cursor-pointer">
                  <User size={16} />
                  <span>Account</span>
                  <ChevronDown size={14} />
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-36 bg-white shadow-lg border border-gray-200 p-2 rounded-none"
              >
                <VStack
                  as="ul"
                  className="[&>li]:p-2 [&>li:hover]:bg-gray-100 [&>*]:cursor-pointer gap-y-0"
                >
                  <li>
                    <Link href="/auth/sign-in">Sign In</Link>
                  </li>
                  <li>
                    <Link href="/auth/sign-up">Sign Up</Link>
                  </li>
                </VStack>
              </PopoverContent>
            </Popover>

            {/* Currency Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-1 text-gray-700 hover:text-black transition cursor-pointer">
                  <Globe size={16} />
                  <span>Currency - GHS</span>
                  <ChevronDown size={14} />
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-36 bg-white shadow-lg border border-gray-200 p-2 rounded-none"
              >
                <VStack
                  as="ul"
                  className="[&>li]:p-2 [&>li:hover]:bg-gray-100 [&>*]:cursor-pointer gap-y-0"
                >
                  <li>GHS</li>
                  <li>USD</li>
                  <li>INR</li>
                  <li>NGN</li>
                </VStack>
              </PopoverContent>
            </Popover>
          </HStack>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
