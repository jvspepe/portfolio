import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
};

function Badge<T extends ElementType = "span">({
  component,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "span";

  return (
    <Component
      {...props}
      className="flex items-center justify-center rounded-full bg-sky-700 px-2 py-1 font-semibold text-white"
    >
      {props.children}
    </Component>
  );
}

export default Badge;
