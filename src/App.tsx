import { Project } from "./@types/project";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectDisplay from "./components/ProjectDisplay";
import Skills from "./components/Skills";

const projects: Project[] = [
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
      <Header />
      <Hero />
      <Skills />
      <ProjectDisplay projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
