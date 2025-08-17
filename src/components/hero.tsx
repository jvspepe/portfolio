import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <main className="flex gap-4">
      <Image
        src="/profile.jpg"
        alt=""
        width={1024}
        height={1024}
        className="aspect-square max-w-[4.5rem] rounded-lg"
      />
      <div className="flex flex-col">
        <h1>João Victor</h1>
        <p className="text-muted-foreground dark:text-muted-foreground/75">
          {t("role")}
        </p>
        <div className="flex items-center gap-2">
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          <span>{t("status")}</span>
        </div>
      </div>
    </main>
  );
}
