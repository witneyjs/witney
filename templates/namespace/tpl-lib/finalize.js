const { paths } = require("common");
const fs = require('fs');

const finalize = function(hoppla) {
    const pkgFilePath = paths.project('package.json')
    const pkg = require(pkgFilePath);

    [
        pkg.common.scripts.build.nameSpaces,
        pkg.common.scripts.coverage.nameSpaces,
        pkg.common.scripts.test.nameSpaces
    ].forEach((registeredNameSpaces) => {
        if (registeredNameSpaces.indexOf(hoppla.input.id) < 0) {
            registeredNameSpaces.push(hoppla.input.id)
        }
    })

    fs.writeFileSync(pkgFilePath, JSON.stringify(pkg, null, '  ') + "\n");
}

module.exports = finalize;