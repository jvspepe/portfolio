import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
};

function IconButton<T extends ElementType = "button">({
  component,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "button";

  return (
    <Component
      {...props}
      className="flex items-center justify-center rounded p-1 transition-colors duration-300 hover:bg-neutral-950/10"
    >
      {props.children}
    </Component>
  );
}

export default IconButton;
