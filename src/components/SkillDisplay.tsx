import { motion } from "framer-motion";
import { TSkill } from "@/@types/skill";
import SectionHeading from "@/components/common/SectionHeading";

type Props = {
  skills: TSkill[];
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function SkillDisplay({ skills }: Props) {
  return (
    <section
      id="habilidades"
      className="container mx-auto flex snap-start scroll-m-24 flex-col justify-center gap-8 px-6 pb-12 sm:px-0 md:pb-24"
    >
      <SectionHeading title="Habilidades" subtitle="em que me especializo" />
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.label}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="flex items-center justify-center rounded-xl border border-black/[0.1] bg-white px-5 py-3 text-lg text-gray-800"
          >
            <span className="">{skill.label}</span>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export default SkillDisplay;
