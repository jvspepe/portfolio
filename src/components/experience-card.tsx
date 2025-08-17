import Image from "next/image";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const tasks = [
  "Desenvolvimento de ferramentas  direcionado à professores e estudantes utilizando React, TailwindCSS, NoSQL e Firebase",
  "Desenvolvimento de sistema de assinaturas utilizando Stripe",
  "Responsável pela migração da base de código de JavaScript para TypeScript",
];

export function ExperienceCard() {
  return (
    <Card>
      <CardHeader className="flex gap-4">
        <Image
          src="personal-vestibulares-logo.svg"
          alt=""
          width={36}
          height={36}
        />
        <div className="flex flex-col">
          <CardTitle>Personal Vestibulares</CardTitle>
          <CardDescription>Desenvolvedor Front-End</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="flex list-inside list-disc flex-col gap-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="text-muted-foreground dark:text-muted-foreground/75"
            >
              {task}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    // <article>
    //   <div className="flex flex-col gap-4">
    //     <div className="flex flex-col gap-2">
    //       <span className="font-geist-mono text-muted-foreground dark:text-muted-foreground/75 text-sm uppercase">
    //         2024 - Presente
    //       </span>
    //       <div className="flex items-start gap-2">
    //         <Image
    //           src="personal-vestibulares-logo.svg"
    //           alt=""
    //           width={48}
    //           height={48}
    //         />
    //         <div className="flex grow flex-col">
    //           <span>Personal Vestibulares</span>
    //           <span className="text-muted-foreground dark:text-muted-foreground/75 text-sm">
    //             Front-End Developer
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <ul className="flex list-inside list-disc flex-col gap-2">
    //       {tasks.map((task, index) => (
    //         <li
    //           key={index}
    //           className="text-muted-foreground dark:text-muted-foreground/75"
    //         >
    //           {task}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </article>
  );
}
