import { Sun } from "@phosphor-icons/react";
import { Link } from "../@types/link";
import DrawerNav from "./DrawerNav";
import IconButton from "./IconButton";

const links: Link[] = [
  { label: "Projetos", path: "#projetos" },
  { label: "Currículo", path: "curriculum" },
  { label: "Contato", path: "#contato" },
];

function Header() {
  return (
    <header className="container mx-auto flex h-20 items-center border-b px-6 sm:px-0">
      <nav className="flex w-full items-center justify-between">
        <h1 className="text-2xl leading-normal">JVSP.</h1>
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-8 text-lg leading-normal md:flex">
            {links.map((link) => (
              <li key={link.path}>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
          <IconButton aria-label="Mudar tema" title="Mudar tema">
            <Sun size={24} weight="fill" />
          </IconButton>
          <DrawerNav links={links} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
