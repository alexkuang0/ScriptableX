import esbuild from "esbuild";

const outFileName = process.argv[2] ?? "index.js";

esbuild
  .build({
    entryPoints: ["src/index.tsx"],
    inject: ["src/lib.ts"],
    outfile: `dist/${outFileName}`,
    jsx: "transform",
    jsxFactory: "ScriptableX.createElement",
    jsxFragment: "ScriptableX.Fragment",
    bundle: true,
  })
  .catch((err) => {
    process.stderr.write(err.stderr);
    process.exit(1);
  });
