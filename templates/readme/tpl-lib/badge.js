const fs = require('fs');
const path = require('path');
const { paths } = require("common");
const package = require(paths.project('package.json'));

const staticDir = paths.static('readme/gen-badges');

let renderedSvgs = 0;
const render = function({
        input,
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

    if (input.repoStaticUrl) {
        const svgFileName = `badge.${renderedSvgs}.svg`;
        const svgFilePath = path.join(staticDir, svgFileName);
        let svgFileUrl = `${input.repoStaticUrl}static/readme/gen-badges/${svgFileName}`;
        if (package.common.readmeSvgUrlSuffix) {
            svgFileUrl += package.common.readmeSvgUrlSuffix;
        }
        fs.writeFileSync(svgFilePath, result);
        result = `<img src="${svgFileUrl}" alt="${title}">` 
    }

    if (url) {
        result = `<a href="${url}">${result}</a>`;
    }

    renderedSvgs++;
    
    return result + ' ';
}

const createRender = function({ input }) {
    return function(argsObj) {
        return render({ input, ...argsObj });
    }
}

module.exports = {
    render,
    createRender
}