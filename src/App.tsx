import { links, projects, skills } from "@/constants";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectDisplay from "@/components/ProjectDisplay";
import SkillDisplay from "@/components/SkillDisplay";

function App() {
  return (
    <div>
      <Header links={links} />
      <Hero />
      <SkillDisplay skills={skills} />
      <ProjectDisplay projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
