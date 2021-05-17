const snowpack = require("snowpack");
const packageJSON = require("../package.json");

const { startServer, createConfiguration } = snowpack;

const config = createConfiguration({
  mode: "development",
  mount: {
    src: {
      url: "/src",
    },
    examples: {
      url: "/examples",
    },
    release: {
      url: "/release",
    },
    public: {
      url: "/",
      static: true,
      resolve: false,
    },
  },
  devOptions: {
    open: "chrome",
    hmr: true,
    output: "dashboard",
    port: 3100,
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript"],
});

startServer({ config })
  .then((server) => {
    console.log(packageJSON.name, packageJSON.version);
  })
  .catch((e) => console.log(e));
