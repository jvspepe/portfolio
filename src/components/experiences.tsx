import { ParaglideMessage } from "@inlang/paraglide-js-react";

import type { Experience } from "@/types";

import { m } from "@/paraglide/messages.js";

const experiences: Experience[] = [
  {
    company: m["experiences.larafy.company"](),
    description: (
      <ParaglideMessage
        message={m["experiences.larafy.description"]}
        markup={{
          strong: ({ children }) => (
            <strong className="font-normal text-foreground">{children}</strong>
          ),
        }}
      />
    ),
    logoUrl: "/larafy-logo.jpg",
    period: m["experiences.larafy.period"](),
    role: m["experiences.larafy.role"](),
  },
  {
    company: m["experiences.personal_vestibulares.company"](),
    description: (
      <ParaglideMessage
        message={m["experiences.personal_vestibulares.description"]}
        markup={{
          strong: ({ children }) => (
            <strong className="font-normal text-foreground">{children}</strong>
          ),
        }}
      />
    ),
    logoUrl: "https://www.personalvestibulares.com.br/images/PV/favicon.ico",
    period: m["experiences.personal_vestibulares.period"](),
    role: m["experiences.personal_vestibulares.role"](),
  },
];

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex gap-2 sm:items-center">
        <img
          src={experience.logoUrl}
          alt={`Logo for the company ${experience.company}`}
          className="size-10 rounded-full"
        />
        <div className="flex grow flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col">
            <h3>{experience.company}</h3>
            <p className="text-sm text-muted-foreground">{experience.role}</p>
          </div>
          <span className="text-sm text-muted-foreground">
            {experience.period}
          </span>
        </div>
      </div>
      <span className="list-inside list-disc whitespace-pre-wrap text-muted-foreground dark:text-muted-foreground">
        {experience.description}
      </span>
    </article>
  );
}

export function Experiences() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm text-muted-foreground uppercase dark:text-muted-foreground/75">
        {m["experiences.header"]()}
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
}
