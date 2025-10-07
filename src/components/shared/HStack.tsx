import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  as?: "ul" | "div" | "section" | "nav";
  className?: string;
}

const HStack = ({ children, as="div", className, ...props }: Props) => {
  const style = cn("flex flex-row items-center gap-4", className);

  if (as === "ul") {
    return <ul className={style} {...props}>{children}</ul>;
  } else if (as === "section") {
    <section className={style} {...props}>{children}</section>;
  } else if (as === "nav") {
    return <nav className={style} {...props}>{children}</nav>;
  } else {
    return <div className={style} {...props}>{children}</div>;
  }
};

export default HStack;
