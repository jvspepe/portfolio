import Image from "next/image";
import { ExperienceCard } from "./experience-card";
import { useTranslations } from "next-intl";

const tasks = [
  "Desenvolvimento de ferramentas  direcionado à professores e estudantes utilizando React, TailwindCSS, NoSQL e Firebase",
  "Desenvolvimento de sistema de assinaturas utilizando Stripe",
  "Responsável pela migração da base de código de JavaScript para TypeScript",
];

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-geist-mono text-muted-foreground dark:text-muted-foreground/50 text-xs uppercase">
          {t("title")}
        </h3>
        <p className="text-muted-foreground dark:text-muted-foreground/75">
          {t("description")}
        </p>
      </div>
      <ExperienceCard />
    </section>
  );
}
