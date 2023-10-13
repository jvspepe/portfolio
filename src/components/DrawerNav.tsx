import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Link } from "../@types/link";
import Drawer from "./Drawer";
import IconButton from "./IconButton";

type Props = {
  links: Link[];
};

function DrawerNav({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowY = isOpen ? "hidden" : "visible";
    return () => {
      document.documentElement.style.overflowY = "visible";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        position="right"
        handler={
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            aria-haspopup="true"
            aria-controls="nav-list"
            aria-expanded={isOpen}
            title="Abrir menu"
            type="button"
          >
            <List size={24} />
          </IconButton>
        }
      >
        <div className="flex flex-col">
          <div className="flex h-20 w-full items-center justify-end pr-6">
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Fechar Menu"
              aria-controls="nav-list"
              aria-expanded={isOpen}
              title="Fechar menu"
              type="button"
            >
              <X size={24} />
            </IconButton>
          </div>
          <ul
            id="nav-list"
            aria-hidden={!isOpen}
            className="bg-neutral-50 text-neutral-950"
          >
            {links.map((link) => (
              <li key={link.path} className="flex w-full">
                <a
                  href={link.path}
                  className="w-full border-t border-neutral-200 p-4 transition-colors duration-200 hover:bg-neutral-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerNav;
