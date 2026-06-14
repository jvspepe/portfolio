import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { m } from "@/paraglide/messages.js";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
        <HugeiconsIcon
          icon={Sun03Icon}
          aria-hidden
          className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <HugeiconsIcon
          icon={Moon02Icon}
          aria-hidden
          className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span className="sr-only">{m["themes.label"]()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{m["themes.header"]()}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setTheme("light");
            }}
          >
            {m["themes.light"]()}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("dark");
            }}
          >
            {m["themes.dark"]()}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("system");
            }}
          >
            {m["themes.system"]()}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
