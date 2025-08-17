import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4">
      <Link
        href="https://www.linkedin.com/in/jvspepe"
        target="_blank"
        className="text-muted-foreground dark:text-muted-foreground/75 hover:text-primary dark:hover:text-primary flex items-center justify-between transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <FaLinkedin aria-hidden />
          <span>LinkedIn</span>
        </div>
        <span>/in/jvspepe</span>
      </Link>
      <Link
        href="https://github.com/jvspepe"
        target="_blank"
        className="text-muted-foreground dark:text-muted-foreground/75 hover:text-primary dark:hover:text-primary flex items-center justify-between transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <FaGithub aria-hidden />
          <span>GitHub</span>
        </div>
        <span>/jvspepe</span>
      </Link>
      <Link
        href="mailto:jvspepe@proton.me"
        className="text-muted-foreground dark:text-muted-foreground/75 hover:text-primary dark:hover:text-primary flex items-center justify-between transition-colors duration-200"
      >
        <div className="flex items-center gap-2">
          <FaEnvelope aria-hidden />
          <span>E-mail</span>
        </div>
        <span>jvspepe@proton.me</span>
      </Link>
      <span className="text-center">
        Made with &#9829; by João Victor &#169; 2025
      </span>
    </footer>
  );
}
