import { projects, skills } from "@/constants";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectDisplay from "@/components/ProjectDisplay";
import SkillDisplay from "@/components/SkillDisplay";
import { useTranslation } from "react-i18next";
import { TLink } from "./@types/link";

function App() {
  const { t } = useTranslation();

  const links = t("header.links", { returnObjects: true }) as TLink[];

  return (
    <div>
      <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-amber-200 blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-cyan-300 blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] "></div>
      <Header links={links} />
      <Hero sectionId={links[0].path} />
      <SkillDisplay skills={skills} sectionId={links[1].path} />
      <ProjectDisplay projects={projects} sectionId={links[2].path} />
      <Contact sectionId={links[3].path} />
    </div>
  );
}

export default App;
