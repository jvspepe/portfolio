import { useTranslation } from "react-i18next";
import { TProject } from "@/@types/project";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/common/SectionHeading";

type Props = {
  sectionId: string;
  projects: TProject[];
};

function ProjectDisplay({ sectionId, projects }: Props) {
  const { t } = useTranslation();

  return (
    <section
      id={sectionId}
      className="container mx-auto flex scroll-m-24 flex-col gap-16 px-6 pb-12 sm:px-0 md:pb-24"
    >
      <SectionHeading title={t("projects.title")} />
      <div className="grid gap-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectDisplay;
