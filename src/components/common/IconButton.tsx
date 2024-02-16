import { ElementType } from "react";
import cn from "@/utils/cn";

export type Props<T extends ElementType> = {
  component?: T;
};

function IconButton<T extends ElementType = "button">({
  component,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "button";
  const { className, children, ...rest } = props;
  return (
    <Component
      {...rest}
      className={cn(
        "aspect-square cursor-pointer rounded-full border border-gray-200 bg-white p-2 shadow-black/[0.03] transition-transform duration-300 hover:scale-110 sm:p-3",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default IconButton;
