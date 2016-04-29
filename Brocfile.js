var babelTranspiler = require("broccoli-babel-transpiler");
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var compileSass = require('broccoli-sass');
var concat = require('broccoli-concat');

var jsAssessments = [];

[
  'card-collection',
  'cars',
  'dmv',
  'file-system',
  'parking-lot',
  'playlist',
  'robots',
  'toll-road',
].forEach(function (dir) {
  jsAssessments.push(pickFiles(dir, { srcDir: '/', destDir: dir }));
});

var appAndDependencies = new mergeTrees(jsAssessments, { overwrite: true });

var appJs = babelTranspiler(appAndDependencies);

module.exports = mergeTrees([
  appJs
]);
