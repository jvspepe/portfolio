import { Link as IntlLink } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof IntlLink>;
export function Link({ className, children, ...props }: Props) {
  return (
    <IntlLink
      className={cn(
        "text-muted-foreground dark:text-muted-foreground/75 hover:text-primary dark:hover:text-primary focus:text-primary transition-colors duration-200",
        className,
      )}
      {...props}
    >
      {children}
    </IntlLink>
  );
}
