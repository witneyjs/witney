const fs = require("fs");

const writeJsonFile = function(filePath, object) {
  fs.writeFileSync(filePath, JSON.stringify(object, null, "  ") + "\n");
};

module.exports = writeJsonFile;
