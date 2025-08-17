import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { FirebaseIcon } from "@/assets/firebase-icon";
import { TypeScriptIcon } from "@/assets/typescript-icon";
import { NextJsIcon } from "@/assets/nextjs-icon";
import { ReactIcon } from "@/assets/react-icon";
import { TailwindCssIcon } from "@/assets/tailwindcss-icon";
import { TanstackQueryIcon } from "@/assets/tanstackquery-icon";
import { Button } from "@/components/ui/button";

type Technology = {
  name: string;
  icon: ReactNode;
};

const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: <TypeScriptIcon className="size-5 sm:size-6" />,
  },
  {
    name: "React.js",
    icon: <ReactIcon className="size-5 sm:size-6" />,
  },
  {
    name: "Next.js",
    icon: <NextJsIcon className="size-5 sm:size-6" />,
  },
  {
    name: "React Query",
    icon: <TanstackQueryIcon className="size-5 sm:size-6" />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCssIcon className="size-5 sm:size-6" />,
  },
  {
    name: "Firebase",
    icon: <FirebaseIcon className="size-5 sm:size-6" />,
  },
];

export function Technologies() {
  const t = useTranslations("technologies");

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-geist-mono text-muted-foreground dark:text-muted-foreground/50 text-xs uppercase">
          {t("title")}
        </h2>
        <p className="text-muted-foreground dark:text-muted-foreground/75">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {technologies.map((tech) => (
          <Button key={tech.name} asChild variant="secondary">
            <span>
              {tech.icon} {tech.name}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
}
