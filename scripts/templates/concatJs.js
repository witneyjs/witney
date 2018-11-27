const Concat = require('concat-with-sourcemaps');
const Terser = require('terser');

const path = require('path');
const fs = require('fs');

const paths = require('common').paths;
const getJsLicenseBanner = require('common').webpack.getJsLicenseBanner;

const concatJs = function({ bannerText = true, files, destination, minify = false }) {
    const concat = new Concat(true, destination, '\n');

    if (bannerText === true) {
        bannerText = getJsLicenseBanner();
    }
    if (bannerText) {
        concat.add(null, bannerText);
    }

    files.forEach(({ jsPath, sourceMapPath }) => {
        const fileName = path.relative(paths.project(), jsPath);
        //const fileName = path.basename(jsPath);

        const content = fs.readFileSync(jsPath);
        var sourceMap;

        if (sourceMapPath) {
            // https://github.com/floridoo/concat-with-sourcemaps/issues/8
            throw "Sourcemaps arent properly supported yet, there is an issue with concat-with-sourcemaps #8"

            sourceMap = fs.readFileSync(sourceMapPath, 'utf8');
            if (!sourceMap) {
                sourceMap = undefined;
            }
        }
        
        concat.add(fileName, content, sourceMap)

    })
    
    const sourceMapPath = `${destination}.map`;
    const sourceMapFileName = path.basename(sourceMapPath);
    if (concat.sourceMap) {
        concat.add(null, `//# sourceMappingURL=${sourceMapFileName}`);

        fs.writeFileSync(sourceMapPath, concat.sourceMap);
    }

    fs.writeFileSync(destination, concat.content);

    if (!minify) {
        return;
    }

    const minifyFiles = {};
    minifyFiles[destination] = fs.readFileSync(destination, 'utf8');

    const minified = Terser.minify(minifyFiles, {
        mangle: false,
        sourceMap: {
            content: fs.readFileSync(sourceMapPath, 'utf8'),
            url: sourceMapFileName
        }
    })

    fs.writeFileSync(destination, minified.code);
    fs.writeFileSync(sourceMapPath, minified.map);
}

module.exports = concatJs;