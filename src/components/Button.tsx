import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
};

function Button<T extends ElementType = "button">({
  component,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "button";

  return (
    <Component
      {...props}
      className="flex w-fit items-center justify-center gap-2 rounded border border-neutral-300 bg-white px-4 py-2 hover:bg-neutral-100 active:bg-neutral-200"
    >
      {props.children}
    </Component>
  );
}

export default Button;
