import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    description: "Furniture E-commerce",
    gradientColor: "#ECD1BF",
    image: "/funira.jpg",
    technologies: [
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/typescript/default.svg"
            alt="TypeScript"
            className="size-4"
          />
        ),
        name: "TypeScript",
      },
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/react/default.svg"
            alt="React"
            className="size-4"
          />
        ),
        name: "React",
      },
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tanstack/default.svg"
            alt="TanStack"
            className="size-4"
          />
        ),
        name: "Tanstack Start",
      },
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/chakra-ui/default.svg"
            alt="Chakra UI"
            className="size-4"
          />
        ),
        name: "Chakra UI",
      },
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/postgresql/default.svg"
            alt="PostgreSQL"
            className="size-4"
          />
        ),
        name: "PostgreSQL",
      },
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/drizzle/default.svg"
            alt="Drizzle"
            className="size-4"
          />
        ),
        name: "Drizzle ORM",
      },
    ],
    title: "Larafy",
  },
  {
    description: "Italian Wedding Services",
    gradientColor: "#819191",
    image: "/domenico-vernon.jpg",
    technologies: [
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/html5/default.svg"
            alt="HTML5"
            className="size-4"
          />
        ),
        name: "HTML",
      },
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/sass/default.svg"
            alt="Sass"
            className="size-4"
          />
        ),
        name: "Sass",
      },
      {
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/javascript/default.svg"
            alt="JavaScript"
            className="size-4"
          />
        ),
        name: "JavaScript",
      },
    ],
    title: "Domenico Vernon",
  },
];

export function Projects() {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm text-muted-foreground uppercase dark:text-muted-foreground/75">
        Projects
      </h4>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
