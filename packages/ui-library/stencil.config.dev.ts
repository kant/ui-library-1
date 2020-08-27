import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "ui-library",
  globalStyle: "src/scss/ui-library.scss",
  copy: [
    {
      src: "**/*.md",
    },
    {
      src: "docs/**/*.css",
    },
    {
      src: "docs/assets/**/*.svg",
    },
    {
      src: "docs/assets/**/*.png",
    },
    {
      src: "docs/assets/**/*.ico",
    },
    {
      src: "docs/**/*.js",
    },
    {
      src: "components.d.ts",
    },
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    {
      type: "www",
      dir: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
