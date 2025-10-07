import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  as?: "ul" | "div" | "section" | "nav";
  className?: string;
}

const VStack = ({ children, as, className }: Props) => {
  const style = cn("flex flex-col gap-y-4", className);

  if (as === "ul") {
    return <ul className={`${style}`}>{children}</ul>;
  } else if (as === "section") {
    <section className={`${style}`}>{children}</section>;
  } else if (as === "nav") {
    return <nav className={`${style}`}>{children}</nav>;
  } else {
    return <div className={`${style}`}>{children}</div>;
  }
};

export default VStack;
