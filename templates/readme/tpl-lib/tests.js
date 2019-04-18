const fs = require("fs");
const paths = require("../../../lib/node/paths");
const {
  runConfiguredScripts,
  getScriptNameSpaces
} = require("../../../lib/node/scripts");

const getSummary = function() {
  runConfiguredScripts({
    scriptType: "coverage",
    args: "--reporter json-summary"
  });

  let failedTestsCount = 0;

  const coverageNameSpaceIds = getScriptNameSpaces({ scriptType: "coverage" });
  const coverageDir = paths.project("coverage");
  const coverageSubDirs = fs.readdirSync(coverageDir).filter(nameSpaceDir => {
    const fileStat = fs.lstatSync(paths.project(`coverage/${nameSpaceDir}`));

    return (
      coverageNameSpaceIds.indexOf(nameSpaceDir) >= 0 && fileStat.isDirectory()
    );
  });
  let coverage = coverageSubDirs
    .map(nameSpaceDir => {
      const jsonSummary = require(paths.project(
        `coverage/${nameSpaceDir}/coverage-summary.json`
      ));
      try {
        const aFailedTestsCount = getFailedCount(nameSpaceDir);
        failedTestsCount += aFailedTestsCount;
      } catch (err) {}

      return jsonSummary;
    })
    .map(jsonSummary => {
      const types = Object.keys(jsonSummary.total);
      const pctSum =
        types.reduce((acc, type) => {
          acc += jsonSummary.total[type].pct;

          return acc;
        }, 0) / types.length;

      if (isNaN(pctSum)) {
        console.log("No valid coverage found", jsonSummary.total);
        return 0;
      }

      return pctSum;
    })
    .reduce((acc, pct) => {
      acc += pct;

      return acc;
    }, 0);

  coverage = coverageSubDirs.length ? coverage / coverageSubDirs.length : 100;

  return { coverage, failedTestsCount };
};

const getFailedCount = function(nameSpaceId) {
  const filePath = paths.tmp(`.nyc_output_${nameSpaceId}/failedTestsCount.txt`);
  const failedTestsCount = fs.readFileSync(filePath, { encoding: "utf8" });

  return Number.parseInt(failedTestsCount);
};

module.exports = {
  getSummary
};
