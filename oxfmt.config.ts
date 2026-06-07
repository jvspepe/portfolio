import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  sortTailwindcss: {
    functions: ["clsx", "tw", "cva", "cn"],
    stylesheet: "./src/styles.css",
  },
});
