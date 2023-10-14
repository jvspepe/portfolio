import { TSkill } from "../@types/skill";
import SkillCard from "./SkillCard";

type Props = {
  skills: TSkill[];
};

function SkillDisplay({ skills }: Props) {
  return (
    <section
      id="tecnologias"
      className="container mx-auto flex min-h-[20rem] snap-start scroll-m-20 flex-col justify-center gap-16 px-6 pb-12 sm:px-0 md:scroll-m-0 md:py-24"
    >
      <h2 className="border-t border-neutral-300 pt-12 text-lg font-light uppercase dark:border-neutral-700 lg:text-xl">
        Habilidades
      </h2>
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:self-center">
        {skills.map((skill) => (
          <SkillCard key={skill.icon} icon={skill.icon} label={skill.label} />
        ))}
      </ul>
    </section>
  );
}

export default SkillDisplay;
