const esbuild = require("esbuild");

esbuild.build({
    color: true,
    entryPoints: ["./src/index.ts"],
    bundle: true,
    minify: true,
    splitting: true,
    outdir: "dist/esm",
    outbase: "./src",
    sourcemap: true,
    format: "esm",
    logLevel: "debug",
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
})
.catch(() => process.exit(1));