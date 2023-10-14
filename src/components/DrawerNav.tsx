import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { TLink } from "../@types/link";
import Drawer from "./Drawer";
import IconButton from "./IconButton";
import Button from "./Button";

type Props = {
  links: TLink[];
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
        <div className="bg-primary dark:bg-secondary  flex h-full flex-col border-l border-neutral-300 dark:border-neutral-700">
          <div className="flex h-20 w-full items-center justify-end border-b border-neutral-300 pr-6 dark:border-neutral-700">
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
            className="flex flex-col gap-2 p-2"
          >
            {links.map((link) => (
              <li key={link.path} className="flex w-full">
                <Button
                  onClick={() => setIsOpen(false)}
                  component="a"
                  href={link.path}
                  disableBorder
                  fullWidth
                >
                  <span className="p-2 text-xl">{link.label}</span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerNav;
