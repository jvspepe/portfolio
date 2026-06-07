import {
  GithubIcon,
  Linkedin02Icon,
  DownloadIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4">
      <a
        href="https://github.com/jvspepe"
        target="_blank"
        className="flex items-center justify-between text-muted-foreground transition-colors duration-200 hover:text-primary dark:text-muted-foreground/75 dark:hover:text-primary"
      >
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={GithubIcon} aria-hidden />

          <span>GitHub</span>
        </div>
        <span>/jvspepe</span>
      </a>
      <a
        href="https://www.linkedin.com/in/jvspepe"
        target="_blank"
        className="flex items-center justify-between text-muted-foreground transition-colors duration-200 hover:text-primary dark:text-muted-foreground/75 dark:hover:text-primary"
      >
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={Linkedin02Icon} aria-hidden />
          <span>LinkedIn</span>
        </div>
        <span>/in/jvspepe</span>
      </a>

      <a
        href="mailto:jvspepe@proton.me"
        className="flex items-center justify-between text-muted-foreground transition-colors duration-200 hover:text-primary dark:text-muted-foreground/75 dark:hover:text-primary"
      >
        <div className="flex items-center gap-2">
          <HugeiconsIcon icon={DownloadIcon} aria-hidden />
          <span>Curriculum</span>
        </div>
        <span>Download</span>
      </a>
      <span className="text-center text-sm text-muted-foreground">
        Made by João Victor
      </span>
    </footer>
  );
}
