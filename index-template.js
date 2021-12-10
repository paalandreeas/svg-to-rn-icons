const path = require("path");

function customIndexTemplate(filePaths) {
  const importEntries = filePaths
    .map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `import ${basename} from './${basename}'`;
    })
    .join("\n");

  const exportEntries = `export default {${filePaths
    .map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `${basename}: ${basename},`;
    })
    .join("\n")}}`;

  return [importEntries, exportEntries].join("\n\n");
}

module.exports = customIndexTemplate;
