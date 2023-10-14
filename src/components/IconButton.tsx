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
      className="bg-primary dark:bg-secondary flex items-center justify-center rounded border border-transparent p-1 outline outline-2 outline-offset-0 outline-transparent transition-colors duration-300 hover:bg-neutral-200 focus:border-sky-500 focus:outline-sky-300 dark:hover:bg-neutral-700 dark:focus:border-sky-500 dark:focus:outline-sky-700"
    >
      {props.children}
    </Component>
  );
}

export default IconButton;
