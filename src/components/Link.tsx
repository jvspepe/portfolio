import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
};

function Link<T extends ElementType = "a">({
  component,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "a";

  return (
    <Component
      {...props}
      className="after:bg-secondary dark:after:bg-primary relative rounded border border-transparent p-1 outline outline-2 outline-offset-0 outline-transparent transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 focus:border-sky-300 focus:outline-sky-500 dark:focus:border-sky-500 dark:focus:outline-sky-700"
    >
      {props.children}
    </Component>
  );
}

export default Link;
