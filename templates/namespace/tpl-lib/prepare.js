const prepare = function(hoppla) {
  if (!hoppla.input.id) {
    console.warn('id parameter is required')
    process.exit();
  }

  if (hoppla.input.id === 'templates') {
    console.warn('"templates" is reserved and cannot be used as namespace id');
    process.exit();
  }
}

module.exports = prepare;