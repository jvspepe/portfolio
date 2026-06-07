import type { Experience } from "@/types";

const experiences: Experience[] = [
  {
    company: "Larafy",
    description:
      "Development of a tailored task management platform for the accounting industry using TypeScript, React.js, TanStack Start, Tailwind CSS, and PostgreSQL;- Development of accounting task automations using Python and Playwright.",
    logoUrl: "/larafy-logo.jpg",
    period: "Sep 2025 - Now",
    role: "Software Developer",
  },
  {
    company: "Personal Vestibulares",
    description:
      "Development of a platform geared toward teachers and students using TypeScript, React.js, Tailwind CSS, NoSQL, Firebase, and Stripe;- Responsible for migrating the codebase from JavaScript to TypeScript.",
    logoUrl: "https://www.personalvestibulares.com.br/images/PV/favicon.ico",
    period: "Oct. 2024 - Sep. 2025",
    role: "Front-End Developer",
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
      <ul className="list-inside list-disc text-muted-foreground dark:text-muted-foreground">
        {experience.description.split("-").map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </article>
  );
}

export function Experiences() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm text-muted-foreground uppercase dark:text-muted-foreground/75">
        Experiences
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
}
