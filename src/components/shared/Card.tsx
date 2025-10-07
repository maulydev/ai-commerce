import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PropInterface {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: PropInterface) => (
  <div className={cn("bg-white shadow", className)}>{children}</div>
);

export default Card;
