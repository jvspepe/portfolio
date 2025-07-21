import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <main className="flex gap-4">
      <Image
        src="/profile.jpg"
        alt=""
        width={80}
        height={80}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-xl leading-none font-semibold sm:text-2xl">
          João Victor
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground text-xs font-semibold sm:text-sm">
            Desenvolvedor Web Full Stack
          </p>
          <Badge asChild variant="secondary" className="gap-2">
            <span>
              <span aria-hidden className="relative flex size-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              <span className="font-semibold">Disponível para trabalho</span>
            </span>
          </Badge>
        </div>
      </div>
    </main>
  );
}
