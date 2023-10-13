import { TLink } from "./@types/link";
import { TProject } from "./@types/project";
import { TSkill } from "./@types/skill";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectDisplay from "./components/ProjectDisplay";
import SkillDisplay from "./components/SkillDisplay";

const links: TLink[] = [
  { label: "Sobre", path: "#sobre" },
  { label: "Tecnologias", path: "#tecnologias" },
  { label: "Projetos", path: "#projetos" },
  { label: "Contato", path: "#contato" },
];

const skills: TSkill[] = [
  { icon: "javascript", label: "JavaScript" },
  { icon: "typescript", label: "TypeScript" },
  { icon: "react", label: "ReactJS" },
  { icon: "redux", label: "ReduxJS" },
  { icon: "styled-components", label: "Styled-Components" },
  { icon: "tailwindcss", label: "TailwindCSS" },
  { icon: "material-ui", label: "Material UI" },
  { icon: "firebase", label: "Firebase" },
];

const projects: TProject[] = [
  {
    thumbnail: "/images/projeto-1.jpg",
    title: "Avion Móveis",
    demo: "https://avion-moveis.netlify.app/",
    source: "https://github.com/jvspepe/react-firebase-avion",
    description:
      "Loja online para uma empresa de móveis artesanais, inclui sistema de autenticação, carrinho e painel de administrador.",
    technologies: [
      "TypeScript",
      "ReactJS",
      "ReduxJS",
      "Styled-Components",
      "Firebase",
    ],
  },
  {
    thumbnail: "/images/projeto-2.jpg",
    title: "North Star Roupas",
    demo: "https://north-star-roupas.netlify.app/",
    source: "https://github.com/jvspepe/react-firebase-north-star",
    description:
      "E-commerce de roupas, construído com acessibilidade e inclui sistema de autenticação, sacola, painel de usuário e administrador.",
    technologies: [
      "TypeScript",
      "ReactJS",
      "ReduxJS",
      "TailwindCSS",
      "Firebase",
    ],
  },
];

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
