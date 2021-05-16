const esbuild = require("esbuild");
const pathConfig = require("./config.paths");
const packageJSON = require("../package.json");

const banner = `
// Grafix ${packageJSON.version}
// ${packageJSON.license}
// ${packageJSON.repository}
`;
// TODO combine 2 step process into one


esbuild
    .build({
        entryPoints: [pathConfig.mainFile],
        bundle: true,
        banner: {js: banner},
        outfile: pathConfig.outFile,
        target: ['es2020'],
        format: "esm"
    })
    .catch(() => process.exit(1));

esbuild
    .build({
        entryPoints: [pathConfig.mainFile],
        bundle: true,
        minify: true,
        sourcemap: true,
        banner: {js: banner},
        outfile: pathConfig.outMinFile,
        target: ['es2020'],
        format: "esm"

    })
    .catch(() => process.exit(1));
