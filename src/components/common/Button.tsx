import cn from "@/utils/cn";
import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
  variant?: "base" | "dark";
  size?: "base" | "small";
};

function Button<T extends ElementType = "button">({
  component,
  variant = "base",
  size = "base",
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "button";
  const { className, children, ...rest } = props;
  return (
    <Component
      {...rest}
      className={cn(
        "flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-black/[0.05] transition-transform duration-300 hover:scale-105 sm:px-7 sm:py-3",
        {
          "bg-gray-900 text-white": variant === "dark",
          "px-2 py-1 sm:px-4 sm:py-2": size === "small",
        },
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Button;
