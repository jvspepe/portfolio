import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Skill } from "../@types/skill";

const skills: Skill[] = [
  {
    icon: <SiJavascript size={40} />,
    label: "JavaScript",
  },
  {
    icon: <SiTypescript size={40} />,
    label: "TypeScript",
  },
  {
    icon: <SiReact size={40} />,
    label: "React",
  },
  {
    icon: <SiRedux size={40} />,
    label: "Redux",
  },
];

function Skills() {
  return (
    <div className="container mx-auto">
      <section className="flex min-h-[20rem] flex-col justify-center gap-8 px-6 py-12 sm:px-0 md:py-24">
        <h2 className="text-lg font-light uppercase">Habilidades</h2>
        <ul className="grid grid-cols-4 items-center justify-between gap-6">
          {skills.map((skill) => (
            <li
              key={skill.label}
              className="flex flex-col items-center justify-center gap-4"
            >
              {skill.icon}
              <span className="text-sm">{skill.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Skills;
