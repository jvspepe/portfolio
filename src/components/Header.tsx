import { Sun } from "@phosphor-icons/react";

function Header() {
  return (
    <header className="container mx-auto flex h-[120px] items-center">
      <nav className="flex w-full items-center justify-between">
        <h1 className="text-2xl leading-normal">JVSP.</h1>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 text-lg leading-normal">
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#curriculum">Currículo</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
          <button aria-label="Mudar tema" title="Mudar tema">
            <Sun size={24} weight="fill" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
