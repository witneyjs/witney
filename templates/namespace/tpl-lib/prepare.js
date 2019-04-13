const prepare = function(hoppla) {
  if (!hoppla.input.id) {
    console.warn('id parameter is required')
    process.exit();
  }

  if (['node', 'templates'].indexOf(hoppla.input.id) >= 0) {
    console.warn('"templates" is reserved and cannot be used as namespace id');
    process.exit();
  }
}

module.exports = prepare;