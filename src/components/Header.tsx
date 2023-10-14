import { TLink } from "../@types/link";
import DrawerNav from "./DrawerNav";
import ThemeToggle from "./ThemeToggle";

type Props = {
  links: TLink[];
};

function Header({ links }: Props) {
  return (
    <header className="dark:bg-secondary bg-primary container sticky top-0 mx-auto flex h-20 items-center border-b border-neutral-400 px-6 dark:border-neutral-700 sm:px-0">
      <nav className="flex w-full items-center justify-between">
        <h1 className="text-2xl">JVSP.</h1>
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-8 text-lg md:flex">
            {links.map((link) => (
              <li key={link.path}>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <DrawerNav links={links} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
