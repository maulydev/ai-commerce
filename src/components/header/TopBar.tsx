import React from "react";
import Container from "../shared/Container";
import HStack from "../shared/HStack";

const TopBar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <p className="text-slate-600">Welcome to the AI Powerd Shopping Experience.</p>

        <HStack className="gap-x-8">
          <button>Account</button>
          <button>GHS</button>
        </HStack>
      </div>
    </Container>
  );
};

export default TopBar;
