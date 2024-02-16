import { TProject } from "@/@types/project";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/common/SectionHeading";

type Props = { projects: TProject[] };

function ProjectDisplay({ projects }: Props) {
  return (
    <section
      id="projetos"
      className="container mx-auto flex scroll-m-24 flex-col gap-16 px-6 pb-12 sm:px-0 md:pb-24"
    >
      <SectionHeading title="Projetos" />
      <div className="grid gap-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectDisplay;
