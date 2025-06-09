import { useTranslation } from "react-i18next";
import { EnvelopeIcon } from "@phosphor-icons/react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SectionHeading from "@/components/common/SectionHeading";

type Props = {
  sectionId: string;
};

function Contact({ sectionId }: Props) {
  const { t } = useTranslation();

  return (
    <section
      id={sectionId}
      className="container mx-auto flex flex-col gap-8 px-6 pb-12 sm:px-0 md:pb-24"
    >
      <SectionHeading title={t("contact.title")} />
      <form name="contato" method="post" className="flex grow flex-col gap-4">
        <input type="hidden" name="form-name" value="contato" />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder={t("contact.emailPlaceholder")}
          label={t("contact.email")}
          required
        />
        <Input
          component={TextareaAutosize}
          id="message"
          name="message"
          minRows={12}
          label={t("contact.message")}
          placeholder={t("contact.messagePlaceholder")}
          required
        />
        <div className="self-end">
          <Button type="submit">
            {t("contact.submit")}
            <EnvelopeIcon size={24} />
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
