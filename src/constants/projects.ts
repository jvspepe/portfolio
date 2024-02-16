import { TProject } from "@/@types/project";

const projects: TProject[] = [
  {
    thumbnail: "/images/projeto-1.jpg",
    title: "Avion",
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
    title: "North Star",
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

export default projects;
