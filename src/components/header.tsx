import { ThemeToggle } from "./theme-toggle";
import { Badge } from "./ui/badge";

export function Header() {
  return (
    <header className="flex items-center justify-end">
      <ThemeToggle />
    </header>
  );
}
