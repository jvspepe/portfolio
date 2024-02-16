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
        className="w-full resize-none rounded border border-gray-200 p-4 outline-none transition-colors duration-300 hover:border-gray-400 focus:border-gray-400"
      >
        {props.children}
      </Component>
    </div>
  );
}

export default Input;
