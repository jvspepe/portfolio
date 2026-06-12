import type { Technology } from "@/types";

const technologies: Technology[] = [
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/typescript/default.svg"
        alt="TypeScript"
        className="size-8"
      />
    ),
    name: "TypeScript",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/react/default.svg"
        alt="React"
        className="size-8"
      />
    ),
    name: "React",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tanstack/default.svg"
        alt="Tanstack Start"
        className="size-8"
      />
    ),
    name: "Tanstack Start",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nodedotjs/default.svg"
        alt="Node.js"
        className="size-8"
      />
    ),
    name: "Node.js",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/mysql/light.svg"
        alt="MySQL"
        className="size-8"
      />
    ),
    name: "MySQL",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/postgresql/default.svg"
        alt="PostgreSQL"
        className="size-8"
      />
    ),
    name: "PostgreSQL",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/mongodb/default.svg"
        alt="MongoDB"
        className="size-8"
      />
    ),
    name: "MongoDB",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/docker/default.svg"
        alt="Docker"
        className="size-8"
      />
    ),
    name: "Docker",
  },
];

export function Technologies() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {technologies.map((technology) => (
        <div key={technology.name} className="flex flex-col items-center">
          {technology.icon}
          <span className="text-sm">{technology.name}</span>
        </div>
      ))}
    </div>
  );
}
