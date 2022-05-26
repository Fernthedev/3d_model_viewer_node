// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.23.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/main.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
    },

    package: {
    // package.json properties
    name: "gltf_model_viewer",
    version: Deno.args[0],
    description: "Your package.",
    license: "MIT",
    repository: {
        type: "git",
        url: "git+https://github.com/Fernthedev/3d_model_viewer_node.git",
    },
    bugs: {
        url: "https://github.com/Fernthedev/3d_model_viewer_node/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");