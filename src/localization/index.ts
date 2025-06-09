import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "pt"],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            links: [
              {
                label: "About",
                path: "about",
              },
              {
                label: "Skills",
                path: "skills",
              },
              {
                label: "Projects",
                path: "projects",
              },
              {
                label: "Contact",
                path: "contact",
              },
            ],
          },
          hero: {
            greeting: "Hello, my name is ",
            name: "João Victor, ",
            rolePrefix: "I am a ",
            role: "Front-end Developer. ",
            description:
              "I am dedicated and experienced in creating intuitive and accessible websites and applications using <bold>HTML</bold>, <bold>CSS</bold>, <bold>JavaScript</bold> and <bold>React</bold>",
            contact: "Contact me",
            downloadCV: "Download CV",
          },
          skills: {
            title: "Skills",
            subtitle: "that I specialize in",
          },
          projects: {
            title: "Projects",
          },
          contact: {
            title: "Contact",
            email: "Email",
            emailPlaceholder: "Enter your email",
            message: "Message",
            messagePlaceholder: "Your message...",
            submit: "Send",
          },
        },
      },
      pt: {
        translation: {
          header: {
            links: [
              {
                label: "Sobre",
                path: "sobre",
              },
              {
                label: "Habilidades",
                path: "habilidades",
              },
              {
                label: "Projetos",
                path: "projetos",
              },
              {
                label: "Contato",
                path: "contato",
              },
            ],
          },
          hero: {
            greeting: "Olá, me chamo ",
            name: "João Victor, ",
            rolePrefix: "sou um ",
            role: "Desenvolvedor Front-end. ",
            description:
              "Tenho dedicação e experiência na criação de websites e aplicativos intuitivos e acessíveis utilizando <bold>HTML</bold>, <bold>CSS</bold>, <bold>JavaScript</bold> e <bold>React</bold>",
            contact: "Entrar em contato",
            downloadCV: "Baixar currículo",
          },
          skills: {
            title: "Habilidades",
            subtitle: "em que me especializo",
          },
          projects: {
            title: "Projetos",
          },
          contact: {
            title: "Contato",
            email: "E-mail",
            emailPlaceholder: "Digite seu e-mail",
            message: "Mensagem",
            messagePlaceholder: "Sua mensagem...",
            submit: "Enviar",
          },
        },
      },
    },
  });

export default i18n;
