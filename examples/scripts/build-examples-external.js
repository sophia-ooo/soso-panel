import * as esbuild from "esbuild";
import path from "node:path";

const entryPoints = [`custom-control/index.js`];

console.log(`building external examples:`);
console.log(entryPoints.join("\n"));

await esbuild.build({
  entryPoints,
  outdir: ".",
  outbase: ".",
  entryNames: "[dir]/bundle",
  bundle: true,
  minify: true,
  format: "esm",
  loader: {
    ".js": "jsx", // Need JSX for custom components
  },
  jsx: "automatic",
  jsxImportSource: "preact",
  plugins: [
    {
      name: "soso-panel-alias",
      setup(build) {
        build.onResolve({ filter: /^soso-panel\/external$/ }, () => ({
          path: path.resolve("../dist/soso-panel.external.js"),
        }));
      },
    },
  ],
});

console.log("done.");
