const path = require('path');
const shell = require('shelljs');
const fs = require('fs');
const { paths } = require("common");
const micromatch = require('micromatch')
const package = require(paths.project('package.json'));

let branch;
let staticUrl;
const staticDir = paths.static('readme');
if (package.common.repoStaticUrl) {
    branch = shell.exec('git rev-parse --abbrev-ref HEAD', { silent: true }).stdout.trim();
    staticUrl = `${package.common.repoStaticUrl.replace('${branch}', branch)}static/readme/`
}

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

let renderedSvgs = 0;
const renderBadge = function({
        url, 
        title, 
        titleColor = '#545454', 
        titleTextColor = 'white', 
        body, 
        bodyColor = '#007EB1', 
        bodyTextColor = 'white' 
    }) {
    const charWidth = 8;
    const columnSpacing = 7;

    const titleWidth = title.length * charWidth;
    const bodyWidth = body.length * charWidth;

    const titleColumnWidth = titleWidth + columnSpacing * 2;
    const bodyColumnWidth = bodyWidth + columnSpacing * 2;

    const titleColumnX = 0;
    const bodyColumnX = titleColumnWidth;

    const titleX = columnSpacing;
    const bodyX = titleColumnWidth + titleX;

    const badge = `
<svg xmlns="http://www.w3.org/2000/svg" width="${titleColumnWidth + bodyColumnWidth}" height="20">
    <linearGradient id="a" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
        <stop offset="1" stop-opacity=".1" />
    </linearGradient>
    <rect rx="3" width="${titleColumnWidth + bodyColumnWidth}" height="20" fill="${titleColor}" />
    <rect rx="3" x="${bodyColumnX}" width="${bodyColumnWidth}" height="20" fill="${bodyColor}" />
    <path fill="${bodyColor}" d="M${bodyColumnX} 0h4v20h-4z" />
    <rect rx="3" width="${titleColumnWidth + bodyColumnWidth}" height="20" fill="url(#a)" />
    <g fill="${titleTextColor}" font-family="monospace" font-size="12" font-weight="bold">
        <text x="${titleX}" y="15" fill="#010101" fill-opacity=".5">${title}</text>
        <text x="${titleX}" y="14">${title}</text>
    </g>
    <g fill="${bodyTextColor}" font-family="monospace" font-size="12" font-weight="bold">
        <text x="${bodyX}" y="15" fill="#010101" fill-opacity=".5">${body}</text>
        <text x="${bodyX}" y="14">${body}</text>
    </g>
</svg>`

    const trimmedBadge = badge.trim().replace(/\n/g,'');;

    let result = trimmedBadge;

    if (staticUrl) {
        const svgFileName = `badge.${renderedSvgs}.svg`;
        const svgFilePath = path.join(staticDir, svgFileName);
        fs.writeFileSync(svgFilePath, result);
        result = `<img src="${staticUrl}${svgFileName}" alt="${title}">` 
    }

    if (url) {
        result = `<a href="${url}">${result}</a>`;
    }

    renderedSvgs++;
    
    return result + ' ';
}

const prepare = function(hoppla) {
    const projectPkgFile = paths.project('package.json');
    hoppla.input.pkg = require(projectPkgFile);

    const testsSummary = getTestsSummary();

    hoppla.input.coverage = Math.round(testsSummary.coverage);
    hoppla.input.failedTestsCount = testsSummary.failedTestsCount;

    hoppla.input.renderBadge = renderBadge;
}

module.exports = prepare;