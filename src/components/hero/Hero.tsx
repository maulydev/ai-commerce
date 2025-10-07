import React from "react";
import Container from "../shared/Container";
import HStack from "../shared/HStack";
import VStack from "../shared/VStack";
import { List } from "lucide-react";
import Card from "../shared/Card";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <Container className="pt-8">
      <HStack className="flex-1 h-[32rem]">
        <Card className="h-full w-96 py-4">
          <VStack>
            <HStack className="px-4">
              <List />
              <h6 className="font-bold uppercase">Shop By Category</h6>
            </HStack>
            <VStack
              as="ul"
              className="divide-y gap-y-0 [&>*]:py-3 [&>*]:px-4 border-t [&>*]:hover:bg-gray-100 [&>*]:hover:cursor-pointer text-sm text-gray-700"
            >
              <li>Shop All</li>
              <li>Furniture & Decor</li>
              <li>Mobile & Tablets</li>
              <li>Clothing & Fashion</li>
              <li>Gamepad</li>
              <li>Accessories</li>
              <li>Smart</li>
              <li>Watch</li>
              <li>Audio & Video</li>
              <li>Tablets & Ipad</li>
            </VStack>
          </VStack>
        </Card>

        <Carousel />
      </HStack>
    </Container>
  );
};

export default Hero;
