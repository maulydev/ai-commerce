import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => (
  <section className={cn("", className)}>
    <div className="container mx-auto">{children}</div>
  </section>
);

export default Container;
