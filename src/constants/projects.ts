import { TProject } from "@/@types/project";

const projects: TProject[] = [
  {
    thumbnail: "/images/project-1.jpg",
    title: "Avion",
    demo: "https://funira.netlify.app/",
    source: "https://github.com/jvspepe/funira",
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
    thumbnail: "/images/project-2.jpg",
    title: "Domenico Vernon",
    demo: "https://domenico-vernon.netlify.app/",
    source: "https://github.com/jvspepe/domenico-vernon",
    description:
      "Website construído para uma empresa de planejamentos de casamentos na Itália.",
    technologies: ["JavaScript", "Sass"],
  },
];

export default projects;
