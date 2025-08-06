import * as esbuild from "esbuild";
import path from "node:path";

const entryPoints = [
  `hello/index.js`,
  `p5-demo/index.js`,
  `particles/index.js`,
  `playground/index.js`,
  `throttle/index.js`,
  `theming/index.js`,
  `paint/index.js`,
];

console.log(`building bundled examples:`);
console.log(entryPoints.join("\n"));

await esbuild.build({
  entryPoints,
  outdir: ".",
  outbase: ".",
  entryNames: "[dir]/bundle",
  bundle: true,
  minify: true,
  format: "esm",
  plugins: [
    {
      name: "soso-panel-alias",
      setup(build) {
        build.onResolve({ filter: /^soso-panel$/ }, () => ({
          path: path.resolve("../dist/soso-panel.js"),
        }));
      },
    },
  ],
});

console.log("done.");
