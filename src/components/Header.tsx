import { motion } from "framer-motion";
import { TLink } from "../@types/link";
import Link from "@/components/common/Link";

type Props = {
  links: TLink[];
};

function Header({ links }: Props) {
  return (
    <header className="fixed left-1/2 top-0 z-50 flex w-full -translate-x-1/2 items-center sm:top-6 sm:w-fit">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex w-full items-center justify-center border border-white bg-white bg-opacity-80 px-6 py-4 shadow shadow-black/[0.05] backdrop-blur sm:rounded-full"
      >
        <ul className="flex items-center justify-between gap-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link href={`#${link.path}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}

export default Header;
