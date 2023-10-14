import { TProject } from "../@types/project";
import ProjectCard from "./ProjectCard";

type Props = { projects: TProject[] };

function ProjectDisplay({ projects }: Props) {
  return (
    <section
      id="projetos"
      className="container mx-auto flex flex-col gap-8 px-6 py-12 sm:px-0 md:py-24"
    >
      <h3 className="text-lg uppercase lg:text-xl">Projetos</h3>
      <div className="grid auto-rows-fr gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectDisplay;
