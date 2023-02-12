const esbuild = require("esbuild");

esbuild.build({
    color: true,
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outdir: "dist/esm",
    outbase: "./src",
    sourcemap: true,
    format: "esm",
    logLevel: "debug",
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
    watch:true
})
.catch(() => process.exit(1));