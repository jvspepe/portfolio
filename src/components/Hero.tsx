import { ArrowRight } from "@phosphor-icons/react";
import Button from "./Button";

function Hero() {
  return (
    <div
      id="sobre"
      className="container mx-auto flex min-h-[calc(100vh_-_5rem)] flex-col justify-center gap-16 px-6 sm:px-0"
    >
      <main className="flex flex-col gap-2">
        <span>Olá, me chamo</span>
        <h1 className="bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent lg:text-8xl">
          João Victor
        </h1>
        <p className="md:text-lg">
          Sou um <b>Desenvolvedor Front-end</b>, com paixão em criar interfaces
          de usuário eficientes e visualmente atraentes. Sou comprometido em
          aprimorar minhas habilidades constantemente, buscando alcançar
          excelência em cada projeto.
        </p>
      </main>
      <Button component="a" href="#contact" disableBorder disablePadding>
        <span className="text-2xl">Entrar em contato</span>
        <ArrowRight size={24} />
      </Button>
    </div>
  );
}

export default Hero;
