// oxlint-disable react/no-unstable-nested-components
import { ParaglideMessage } from "@inlang/paraglide-js-react";

import { m } from "@/paraglide/messages.js";

export function About() {
  return (
    <div className="text-muted-foreground">
      <ParaglideMessage
        message={m.about}
        markup={{
          strong: ({ children }) => (
            <strong className="font-normal text-foreground">{children}</strong>
          ),
        }}
      />
    </div>
  );
}
