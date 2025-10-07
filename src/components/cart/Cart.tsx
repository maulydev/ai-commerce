"use client";

import React, { useState } from "react";
import Center from "../shared/Center";
import { DoorOpen, ShoppingBag } from "lucide-react";
import Card from "../shared/Card";
import VStack from "../shared/VStack";
import HStack from "../shared/HStack";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(!showCart);

  return (
    <>
      <button
        onClick={handleShowCart}
        className="hover:text-amber-500 hover:cursor-pointer"
      >
        <Center>
          <ShoppingBag />
          <p>Shopping Cart</p>
        </Center>
      </button>

      <>
        <div
          onClick={handleShowCart}
          className={`bg-black/50 fixed backdrop-blur inset-0 z-50 duration-700 ${
            showCart ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        <Card
          className={`bg-white fixed right-0 inset-y-0 w-[32rem] duration-700 ease-in-out z-50 p-4 ${
            showCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={handleShowCart}
            className="bg-gray-100 p-2 cursor-pointer group"
          >
            <DoorOpen className="group-hover:scale-110 duration-300 ease-in-out" />
          </button>

          <VStack className="p-8 justify-center h-[80%]">
            <Center className="gap-4">
              <ShoppingBag size={100} className="text-gray-400" />
              <p className="text-2xl font-bold text-gray-400">
                Your Cart is Empty
              </p>
            </Center>
          </VStack>

          <footer className="space-y-4 px-4 absolute bottom-8 inset-x-0 hidden">
            <HStack className="justify-between text-lg font-bold">
              <p>TOTAL</p>
              <p>GHC 200</p>
            </HStack>
            <Center>
              <button className="w-full bg-green-500 hover:bg-green-600 px-4 py-3 text-white font-bold cursor-pointer">
                Proceed to Checkout
              </button>
            </Center>
          </footer>
        </Card>
      </>
    </>
  );
};

export default Cart;
