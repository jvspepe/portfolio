import { LanguageSwitcher } from "@/components/language-switchter";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 -m-2 flex items-center justify-end bg-background">
      <LanguageSwitcher />
      <ThemeToggle />
    </header>
  );
}
