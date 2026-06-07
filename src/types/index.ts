import type { ReactNode } from "react";

export interface Technology {
  icon: ReactNode;
  name: string;
}

export interface Project {
  title: string;
  technologies: Technology[];
  description: string;
  image: string;
  gradientColor: string;
}

export interface Experience {
  company: string;
  description: string;
  role: string;
  logoUrl: string;
  period: string;
}
