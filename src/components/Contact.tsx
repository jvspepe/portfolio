import { EnvelopeSimple } from "@phosphor-icons/react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SectionHeading from "@/components/common/SectionHeading";

function Contact() {
  return (
    <section
      id="contato"
      className="container mx-auto flex flex-col gap-8 px-6 pb-12 sm:px-0 md:pb-24"
    >
      <SectionHeading title="Contato" />
      <form name="contato" method="post" className="flex grow flex-col gap-4">
        <input type="hidden" name="form-name" value="contato" />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="seu@email.com"
          label="E-mail"
          required
        />
        <Input
          component={TextareaAutosize}
          id="message"
          name="message"
          minRows={12}
          label="Mensagem"
          placeholder="Sua mensagem..."
          required
        />
        <div className="self-end">
          <Button type="submit">
            Enviar
            <EnvelopeSimple size={24} />
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
