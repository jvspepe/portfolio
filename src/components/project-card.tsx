import type { CSSProperties } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="relative bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--gradient-color)_70%,transparent),var(--gradient-color))] px-6 pt-6 pb-0 dark:bg-[radial-gradient(circle_at_top,color-mix(in_srgb,var(--gradient-color)_56%,transparent),transparent)]"
      // oxlint-disable-next-line typescript/no-unsafe-type-assertion
      style={{ "--gradient-color": project.gradientColor } as CSSProperties}
    >
      <CardHeader className="p-0">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="text-foreground/75">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-2 p-0">
        {project.technologies.map((technology, index) => (
          <div
            key={`${technology.name}-${index}`}
            className="flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-white dark:bg-black/20"
          >
            {technology.icon}
            {technology.name}
          </div>
        ))}
      </CardContent>
      <img
        src={project.image}
        alt=""
        width={1920}
        height={1080}
        className="rounded-t-2xl"
      />
    </Card>
  );
}
