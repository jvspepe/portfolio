import { useTranslations } from "next-intl";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "@/components/ui/link";

export function Socials() {
  const t = useTranslations("socials");
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://github.com/jvspepe"
        target="_blank"
        aria-label="Link GitHub"
        className="flex items-center gap-2"
      >
        <FaGithub aria-hidden />
        <span>Github</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/jvspepe/"
        target="_blank"
        aria-label="Link LinkedIn"
        className="flex items-center gap-2"
      >
        <FaLinkedin aria-hidden />
        <span>LinkedIn</span>
      </Link>
      <Link
        href="/dev-frontend-joao-victor.pdf"
        download="dev-frontend-joao-victor.pdf"
        target="_blank"
        className="flex items-center gap-2"
      >
        <FaDownload aria-hidden />
        <span>{t("resume")}</span>
      </Link>
    </div>
  );
}
