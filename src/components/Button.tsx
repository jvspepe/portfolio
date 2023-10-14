import { ElementType } from "react";

export type Props<T extends ElementType> = {
  component?: T;
  disableBorder?: boolean;
  disablePadding?: boolean;
  fullWidth?: boolean;
};

function Button<T extends ElementType = "button">({
  component,
  disableBorder = false,
  disablePadding = false,
  fullWidth = false,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = component || "button";

  return (
    <Component
      {...props}
      className={`${
        disableBorder
          ? "border-transparent dark:border-transparent"
          : "border-neutral-300 dark:border-neutral-700"
      } ${disablePadding ? "p-0" : "px-4 py-2"} ${
        fullWidth && "w-full"
      } bg-primary dark:bg-secondary flex w-fit items-center justify-center gap-2 rounded border outline outline-2 outline-offset-0 outline-transparent transition-colors duration-300 hover:bg-neutral-100 focus:border-sky-500 focus:outline-sky-300 active:bg-neutral-200 dark:hover:bg-neutral-700 dark:focus:border-sky-500  dark:focus:outline-sky-700`}
    >
      {props.children}
    </Component>
  );
}

export default Button;
