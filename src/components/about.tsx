import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <div className="text-muted-foreground dark:text-muted-foreground/75">
      {t.rich("content", {
        emphasized: (children) => (
          <span className="text-primary">{children}</span>
        ),
        flag: () => <span className="fi fi-br rounded" aria-hidden></span>,
        underlined: (children) => (
          <span className="text-primary underline">{children}</span>
        ),
      })}
    </div>
  );
}
