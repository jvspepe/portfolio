import { TSkill } from "../@types/skill";
import Skill from "./Skill";

type Props = {
  skills: TSkill[];
};

function SkillDisplay({ skills }: Props) {
  return (
    <section className="container mx-auto flex min-h-[20rem] flex-col justify-center gap-8 px-6 py-12 sm:px-0 md:py-24">
      <h2 className="text-lg font-light uppercase">Habilidades</h2>
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 md:self-center">
        {skills.map((skill) => (
          <Skill key={skill.icon} icon={skill.icon} label={skill.label} />
        ))}
      </ul>
    </section>
  );
}

export default SkillDisplay;
