import {
  Download01Icon,
  GithubIcon,
  Linkedin02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { m } from "@/paraglide/messages.js";
import { getLocale } from "@/paraglide/runtime";

export function Hero() {
  const locale = getLocale();

  return (
    <div className="flex flex-col gap-2">
      <main className="flex items-center gap-2">
        <Avatar size="xl">
          <AvatarImage src="https://github.com/jvspepe.png" />
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>
        <div>
          <h1>João Victor</h1>
          <p className="text-muted-foreground">{m["header.role"]()}</p>
          <div className="flex items-center gap-2">
            <div className="size-2 animate-pulse rounded-full bg-emerald-500" />
            <span>{m["header.status"]()}</span>
          </div>
        </div>
      </main>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/jvspepe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <HugeiconsIcon icon={GithubIcon} className="size-4" />
          Github
        </a>
        <a
          href="https://linkedin.com/in/jvspepe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <HugeiconsIcon icon={Linkedin02Icon} className="size-4" />
          LinkedIn
        </a>
        <a
          href={
            locale === "pt"
              ? "/joao-victor-dev-curriculo.pdf"
              : "/joao-victor-dev-curriculum.pdf"
          }
          download
          className="flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          <HugeiconsIcon icon={Download01Icon} className="size-4" />
          Curriculum
        </a>
      </div>
    </div>
  );
}
