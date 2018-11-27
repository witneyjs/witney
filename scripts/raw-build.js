const paths = require('common').paths;
const concat = require('./templates/concatJs');

// TODO: Move this to the front namespace template and set the destination based on the namespace dist

concat({
    destination: paths.static('front/concated-stuff.js'),
    minify: true,
    files: [
        {
            jsPath: paths.project('node_modules/faye/client/faye-browser.js'),
            //sourceMapPath: paths.project('node_modules/faye/client/faye-browser.js.map')
        },
        {
            jsPath: paths.project('node_modules/jquery/dist/jquery.js'),
            //sourceMapPath: paths.project('node_modules/jquery/dist/jquery.min.map')
        }
    ]
})