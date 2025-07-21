import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Image
          src="/profile.jpg"
          alt=""
          width={80}
          height={80}
          className="rounded-full"
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-xl leading-none sm:text-2xl">João Victor</h1>
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">
              Desenvolvedor Web Full Stack
            </p>
            <div className="flex items-center gap-1 text-sm sm:text-base">
              <Badge variant="secondary" className="gap-2">
                <span className="relative flex size-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
                Disponível para trabalho
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
