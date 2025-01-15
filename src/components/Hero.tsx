import { motion } from "framer-motion";
import { ArrowDown, DownloadSimple } from "@phosphor-icons/react";
import {
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import Button from "@/components/common/Button";
import IconButton from "@/components/common/IconButton";

function Hero() {
  return (
    <div
      id="sobre"
      className="container relative mx-auto flex min-h-[100dvh] flex-col justify-center gap-16 px-6 sm:px-0"
    >
      <main className="mx-auto flex flex-col gap-6">
        <img
          src="https://github.com/jvspepe.png"
          alt=""
          width={240}
          height={240}
          className="mx-auto h-40 w-40 rounded-full border-4 border-white shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-lg font-medium leading-normal sm:text-2xl"
        >
          <span className="">Olá, me chamo </span>
          <span className="font-bold">João Victor, </span>
          <span className="">sou um </span>
          <span className="font-bold">Desenvolvedor Front-end. </span>
          <span className="">
            Tenho dedicação e experiência na criação de websites e aplicativos
            intuitivos e acessíveis utilizando <b>HTML</b>, <b>CSS</b>,{" "}
            <b>JavaScript</b> e <b>React</b>.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="flex flex-col-reverse gap-2 sm:flex-row"
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button component="a" href="#contato" variant="dark">
              Entrar em contato
            </Button>
            <Button
              component="a"
              href="/pdfs/curriculum-pt-2024.pdf"
              target="_blank"
            >
              Baixar currículo
              <DownloadSimple size={24} />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 sm:justify-normal">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/jvspepe/"
              target="_blank"
              rel="noreferrer noopener"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <SiLinkedin />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/jvspepe"
              target="_blank"
              rel="noreferrer noopener"
              title="Github"
              aria-label="Github"
            >
              <SiGithub />
            </IconButton>
            <IconButton
              component="a"
              href="https://api.whatsapp.com/send?phone=5541992295501"
              target="_blank"
              rel="noreferrer noopener"
              title="Whatsapp"
              aria-label="Whatsapp"
            >
              <SiWhatsapp />
            </IconButton>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ArrowDown size={24} />
        </div>
      </main>
    </div>
  );
}

export default Hero;
