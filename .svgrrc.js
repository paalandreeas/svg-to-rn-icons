module.exports = {
  typescript: true,
  native: true,
  icon: true,
  svgProps: { color: "#000" },
  outDir: "./icons",
  indexTemplate: (files) => require("./index-template")(files),
  svgoConfig: require("./svgo.config"),
};
