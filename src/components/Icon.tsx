import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"svg"> & {
  name: string;
};

function Icon({ name, ...props }: Props) {
  return (
    <svg viewBox="0 0 256 256" {...props} className="h-12 w-12">
      <use href={`/icons/${name}.svg#${name}`} />
    </svg>
  );
}

export default Icon;
