import type { InferInput } from "valibot";

// oxlint-disable jsx-a11y/control-has-associated-label
import { Chatting01Icon, MailIcon, UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "@tanstack/react-form";
import { email, nonEmpty, object, pipe, string } from "valibot";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { m } from "@/paraglide/messages.js";

const ContactFormSchema = object({
  email: pipe(string(), nonEmpty(), email()),
  message: pipe(string(), nonEmpty()),
  name: pipe(string(), nonEmpty()),
  subject: pipe(string(), nonEmpty()),
});

type ContactForm = InferInput<typeof ContactFormSchema>;

const defaultValues: ContactForm = {
  email: "",
  message: "",
  name: "",
  subject: "",
};

export function Contact() {
  const form = useForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...value,
      });

      await fetch("/", {
        body: body.toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      });
    },
    validators: {
      onSubmit: ContactFormSchema,
    },
  });

  return (
    <section className="flex flex-col gap-2">
      <h6 className="text-sm text-muted-foreground uppercase dark:text-muted-foreground/75">
        {m["contact.header"]()}
      </h6>
      <form name="contact" data-netlify="true" hidden>
        <input name="name" />
        <input name="email" />
        <textarea name="message" />
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();
          void form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          <form.Field name="name">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className="sr-only">
                    {m["contact.name"]()}
                  </FieldLabel>
                  <InputGroup className="h-11 border-input/75">
                    <InputGroupInput
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                      aria-invalid={isInvalid}
                      type="text"
                      placeholder={m["contact.name_placeholder"]()}
                    />
                    <InputGroupAddon align="inline-start" aria-hidden>
                      <HugeiconsIcon icon={UserIcon} />
                    </InputGroupAddon>
                  </InputGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className="sr-only">
                    {m["contact.email"]()}
                  </FieldLabel>
                  <InputGroup className="h-11 border-input/75">
                    <InputGroupInput
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                      aria-invalid={isInvalid}
                      type="email"
                      placeholder={m["contact.email_placeholder"]()}
                    />
                    <InputGroupAddon align="inline-start" aria-hidden>
                      <HugeiconsIcon icon={MailIcon} />
                    </InputGroupAddon>
                  </InputGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="message">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className="sr-only">
                    {m["contact.message"]()}
                  </FieldLabel>
                  <InputGroup className="h-11 border-input/75">
                    <InputGroupTextarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                      aria-invalid={isInvalid}
                      className="min-h-32 resize-none"
                    />
                    <InputGroupAddon align="block-start" aria-hidden>
                      <HugeiconsIcon icon={Chatting01Icon} />
                      <InputGroupText className="text-base font-normal">
                        {m["contact.message_placeholder"]()}
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          </form.Field>
          <Button type="submit" className="w-fit" variant="secondary">
            {m["contact.submit"]()}
          </Button>
        </div>
      </form>
    </section>
  );
}
