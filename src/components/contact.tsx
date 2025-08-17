"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactSchema = z.infer<typeof contactSchema>;

export function Contact() {
  const form = useForm<ContactSchema>();

  const onSubmit = (data: ContactSchema) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col gap-4">
      <h6 className="font-geist-mono text-muted-foreground dark:text-muted-foreground/75 text-xs uppercase">
        Contact
      </h6>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel className="sr-only">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel className="sr-only">E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel className="sr-only">Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel className="sr-only">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    rows={8}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-fit self-end" variant="secondary">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
