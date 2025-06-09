import { TProject } from "@/@types/project";

const projects: TProject[] = [
  {
    thumbnail: "/images/project-1.jpg",
    title: "Avion",
    demo: "https://funira.netlify.app/",
    source: "https://github.com/jvspepe/funira",
    description: {
      en: "Online store for a company selling handcrafted furniture, includes authentication system, cart, and admin panel.",
      pt: "Loja online para uma empresa de móveis artesanais, inclui sistema de autenticação, carrinho e painel de administrador.",
    },
    technologies: [
      "TypeScript",
      "ReactJS",
      "ReduxJS",
      "Styled-Components",
      "ChakraUI",
      "Firebase",
    ],
  },
  {
    thumbnail: "/images/project-2.jpg",
    title: "Domenico Vernon",
    demo: "https://domenico-vernon.netlify.app/",
    source: "https://github.com/jvspepe/domenico-vernon",
    description: {
      en: "Website built for a wedding planning company in Italy.",
      pt: "Website construído para uma empresa de planejamentos de casamentos na Itália.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Sass"],
  },
];

export default projects;
