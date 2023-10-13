import { EnvelopeSimple } from "@phosphor-icons/react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "./Button";
import Input from "./Input";

function Contact() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-6 py-12 sm:px-0 md:py-24">
      <h4 className="text-lg uppercase">Contato</h4>
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
