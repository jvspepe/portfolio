import cn from "@/utils/cn";
import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
};

function Link<T extends ElementType = "a">({
  component,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "a";
  const { className, children, ...rest } = props;

  return (
    <Component
      {...rest}
      className={cn(
        "p-1 text-gray-500 transition-colors duration-300 hover:text-gray-950",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Link;
