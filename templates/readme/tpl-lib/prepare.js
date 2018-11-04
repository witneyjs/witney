const shell = require('shelljs');
const fs = require('fs');
const { paths } = require("common");
const micromatch = require('micromatch')

const getTestsSummary = function() {
    const testScript = paths.scripts('test.js')
    shell.exec(`node ${testScript}`);
    
    const scriptsDir = paths.scripts();
    const scripts = fs.readdirSync(scriptsDir);
    const coverageScripts = micromatch.match(scripts, 'coverage-*');
    coverageScripts.forEach((script) => {
        shell.exec(`node ${paths.scripts(script)} --reporter json-summary`);
    })
    
    let failedTestsCount = 0;

    const coverageDir = paths.project('coverage');
    const coverageSubDirs = fs.readdirSync(coverageDir)
    const coverage = coverageSubDirs
        .filter((nameSpaceDir) => {
            const fileStat = fs.lstatSync(paths.project(`coverage/${nameSpaceDir}`));

            return fileStat.isDirectory();
        })
        .map((nameSpaceDir) => {
            const jsonSummary = require(paths.project(`coverage/${nameSpaceDir}/coverage-summary.json`));
            try {
                const aFailedTestsCount = getFailedTestsCount(nameSpaceDir);
                failedTestsCount += aFailedTestsCount;
            }
            catch(err) {}
            
            return jsonSummary;
        })
        .map((jsonSummary) => {
            const types = Object.keys(jsonSummary.total);
            const pctSum = types.reduce((acc,type) => {
                acc += jsonSummary.total[type].pct;

                return acc;
            }, 0) / types.length

            if (isNaN(pctSum)) {
                console.log('No valid coverage found', jsonSummary.total);
                return 0;
            }

            return pctSum;
        })
        .reduce((acc, pct) => {
            acc += pct;

            return acc;
        }, 0) / coverageSubDirs.length;

    return { coverage, failedTestsCount };
}

const getFailedTestsCount = function(nameSpaceId) {
    const filePath = paths.tmp(`.nyc_output_${nameSpaceId}/failedTestsCount.txt`);
    const failedTestsCount = fs.readFileSync(filePath, { encoding: 'utf8' });

    return Number.parseInt(failedTestsCount);
}

const prepare = function(hoppla) {
    const projectPkgFile = paths.project('package.json');
    hoppla.input.pkg = require(projectPkgFile);

    const testsSummary = getTestsSummary();

    hoppla.input.coverage = Math.round(testsSummary.coverage);
    hoppla.input.failedTestsCount = testsSummary.failedTestsCount;
}

module.exports = prepare;