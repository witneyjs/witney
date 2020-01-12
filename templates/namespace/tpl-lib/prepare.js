const { paths, writeJsonFile } = require("../../../lib/node");

const prepare = function(hoppla) {
  if (!hoppla.input.id) {
    console.warn('id parameter is required')
    process.exit();
  }

  if (['node', 'templates'].indexOf(hoppla.input.id) >= 0) {
    console.warn('"templates" is reserved and cannot be used as namespace id');
    process.exit();
  }

  // Handle devServerPort config
  const nameSpacesPath = paths.config('namespaces.json');
  const nameSpaces = require(nameSpacesPath);
  const devServerPort = nameSpaces.nextDevServerPort;
  if (hoppla.input.devServerPort == null || hoppla.input.devServerPort == devServerPort) {
    nameSpaces.nextDevServerPort++;
    writeJsonFile(nameSpacesPath, nameSpaces);
  }
  if (hoppla.input.devServerPort == null) {
    hoppla.input.devServerPort = devServerPort;
  }
}

module.exports = prepare;