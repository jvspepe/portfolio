import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
  label?: string;
};

function Input<T extends ElementType = "input">({
  component,
  label,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "input";

  return (
    <div className="grid gap-1">
      <label htmlFor={props.id} className="w-fit">
        {label}
      </label>
      <Component
        {...props}
        className="w-full resize-none rounded border border-neutral-300 p-2"
      >
        {props.children}
      </Component>
    </div>
  );
}

export default Input;
