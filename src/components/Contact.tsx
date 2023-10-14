import { EnvelopeSimple } from "@phosphor-icons/react";
import {
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import TextareaAutosize from "react-textarea-autosize";
import Button from "./Button";
import IconButton from "./IconButton";
import Input from "./Input";

function Contact() {
  return (
    <section
      id="contato"
      className="container mx-auto flex flex-col gap-8 px-6 py-12 sm:px-0 md:py-24"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg uppercase lg:text-xl">Contato</h4>
        <div className="flex items-center gap-2">
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/jvspepe/"
            target="_blank"
            rel="noreferrer noopener"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={24} />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/jvspepe"
            target="_blank"
            rel="noreferrer noopener"
            title="Github"
            aria-label="Github"
          >
            <SiGithub size={24} />
          </IconButton>
          <IconButton
            component="a"
            href="https://api.whatsapp.com/send?phone=5541992295501"
            target="_blank"
            rel="noreferrer noopener"
            title="Whatsapp"
            aria-label="Whatsapp"
          >
            <SiWhatsapp size={24} />
          </IconButton>
        </div>
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex grow flex-col gap-4"
      >
        <div className="grid auto-cols-fr gap-4 sm:grid-cols-2">
          <div className="flex h-full flex-col justify-between gap-4 sm:gap-0">
            <Input
              label="Nome"
              type="text"
              name="name"
              id="name"
              placeholder="Seu Nome"
            />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              label="E-mail"
            />
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="Assunto do e-mail"
              label="Assunto"
            />
          </div>
          <Input
            component={TextareaAutosize}
            id="message"
            name="message"
            minRows={8}
            label="Mensagem"
            placeholder="Sua mensagem..."
          />
        </div>
        <div className="self-end">
          <Button type="submit">
            <EnvelopeSimple size={24} />
            Enviar E-mail
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
