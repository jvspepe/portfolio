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
        className="w-full resize-none rounded border border-neutral-300 bg-neutral-50 p-2 outline outline-2 outline-offset-0 outline-transparent transition-colors duration-300 hover:border-neutral-400 focus:border-sky-500 focus:outline-sky-300 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-sky-500 dark:focus:outline-sky-900"
      >
        {props.children}
      </Component>
    </div>
  );
}

export default Input;
