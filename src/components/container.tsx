import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={cn("container mx-auto px-6 pt-6 md:px-0", className)}
    >
      {children}
    </div>
  );
}
