import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ProjectCardProps = {
  title: string;
  technologies: ReactNode;
  description: string;
  image: string;
  gradientColor: string;
};

export function ProjectCard({
  title,
  technologies,
  description,
  image,
  gradientColor,
}: ProjectCardProps) {
  return (
    <Card
      className="relative px-6 pt-6 pb-0"
      style={{
        background: `radial-gradient(circle at top, ${gradientColor}90, ${gradientColor}00)`,
      }}
    >
      <CardHeader className="p-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>
          <Link href="#">
            <span className="sr-only">Ver projeto</span>
            <FaArrowRight aria-hidden />
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-center gap-2 p-0">
        {technologies}
      </CardContent>
      <Image
        src={image}
        alt=""
        width={1920}
        height={1080}
        className="rounded-t-2xl"
      />
    </Card>
  );
}
