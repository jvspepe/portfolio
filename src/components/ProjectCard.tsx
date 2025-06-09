import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "@phosphor-icons/react";
import { TProject } from "@/@types/project";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { useTranslation } from "react-i18next";

type Props = {
  project: TProject;
};

function ProjectCard({ project }: Props) {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded border border-gray-200 bg-gray-100">
      {project.thumbnail && <img src={project.thumbnail} alt="" />}
      <div className="flex flex-col gap-4 px-4 pb-4">
        <div className="flex items-center gap-4">
          <h4 className="text-2xl">{project.title}</h4>
        </div>
        <p className="grow">
          {project.description[i18n.language as "en" | "pt"]}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-sm text-sky-700">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            component="a"
            href={project.source || ""}
            target="_blank"
            rel="noreferrer noopener"
            size="small"
          >
            Código
            <SiGithub />
          </Button>
          <Button
            component="a"
            href={project.demo || ""}
            target="_blank"
            rel="noreferrer noopener"
            size="small"
          >
            Site
            <Link size={24} weight="bold" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
