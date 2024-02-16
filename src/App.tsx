import { links, projects, skills } from "@/constants";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectDisplay from "@/components/ProjectDisplay";
import SkillDisplay from "@/components/SkillDisplay";

function App() {
  return (
    <div>
      <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-amber-200 blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-cyan-300 blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] "></div>
      <Header links={links} />
      <Hero />
      <SkillDisplay skills={skills} />
      <ProjectDisplay projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
