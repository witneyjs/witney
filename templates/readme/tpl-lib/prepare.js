const shell = require('shelljs');
const { paths } = require("../../../packages/common");
const package = require(paths.project('package.json'));
const tests = require('./tests');
const badge = require('./badge');


const getBranch = function() {
    const branch = shell.exec('git rev-parse --abbrev-ref HEAD', { silent: true }).stdout.trim();

    return branch;
}

const getRepoStaticUrl = function(branch) {
    let staticUrl = package.common.repoStaticUrl;
    
    if (staticUrl) {
        staticUrl = `${staticUrl.replace('${branch}', branch)}`
    }

    return staticUrl;
}

const prepare = function(hoppla) {
    if (!hoppla.input.runQuick) {
        const testScript = paths.scripts('test.js')
        shell.exec(`node ${testScript}`);
    }

    hoppla.input.pkg = package

    hoppla.input.branch = hoppla.input.branch || getBranch();
    hoppla.input.repoStaticUrl = getRepoStaticUrl(hoppla.input.branch);

    const testsSummary = tests.getSummary();
    hoppla.input.coverage = Math.round(testsSummary.coverage);
    hoppla.input.failedTestsCount = testsSummary.failedTestsCount;

    hoppla.input.renderBadge = badge.createRender({ input: hoppla.input });
}

module.exports = prepare;