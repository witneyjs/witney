/**
 * load all specs into one bundle
 *
 * Info: Always write the parameters inline, no variables allowed
 * https://github.com/webpack/webpack/issues/2675
 *
 * 1 = contextDir
 * 2 = includeSubdirectories
 * 3 = fileRegex
 */
var context = require.context("..", true, /\.spec\./);
context.keys().forEach(context);

// Alternative approach, always loading all files into the coverage report
// var context = require.context("..", true, /^\.\/(?!main\/).*\.(js|jsx|ts|tsx)$/);
// context.keys().forEach(context);
