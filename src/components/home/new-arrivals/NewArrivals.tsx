import Container from "@/components/shared/Container";
import HStack from "@/components/shared/HStack";
import React from "react";

const NewArrivals = () => {
  return (
    <Container>
      <HStack>
        <h6 className="text-2xl shrink-0 font-bold">New Arrivals</h6>
        <div className="h-[2px] w-full bg-gray-200" />
      </HStack>
    </Container>
  );
};

export default NewArrivals;
