import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Center = ({ children, className }: Props) => (
  <div className={cn("flex flex-col items-center gap-y-2", className)}>{children}</div>
);

export default Center;
