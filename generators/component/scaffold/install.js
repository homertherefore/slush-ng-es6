// Essential Supporting Libraries/Utils
var _ = require('lodash'); // The epic JS multi-tool!
var gulp = require('gulp'); // Our task and stream manager for the installation
var conflict = require('gulp-conflict'); // Conflict will help us ensure we're not overriding files if we generate things in an existing folder.
var template = require('gulp-template'); // Template allows us to process files in the gulp stream running lodash's template function
var rename = require('gulp-rename'); // Template allows us to process files in the gulp stream running lodash's template function
var gulpif = require('gulp-if');

// Define exactly what you want to do with your installation. A callback is provided to allow you to perform and
// process your installation and continuing with the postInstall and closing steps of the installer to support async work.
var install = function (answers, finished) {
  // While we've placed install in an isolated file for modularity, the context of 'this' will reference your scaffold.
  var scaffold = this;
  // Pull the list of files we want to target from the answers.
  var files = answers.files;

  // Pull the targeted deployment folder for out installation.
  var destDir = answers.dirs.dest;

  // Fire off any helpful notices you think are relevant for users to know whats going on while the install takes palce.
  console.log('>> Installing: ', files, '\n>> To: ', destDir);

  // Start building the pipe for installing the package
  var stream = gulp.src(answers.files)
    .pipe(template(_.omit(answers, 'files'), {
      interpolate: /<%=(.+?)%>/g
    }))
    .pipe(rename(function (filepath) {
      var dirname = filepath.dirname;
      var basename = filepath.basename;

      if (dirname[0] === '_') {
        filepath.dirname = '.' + dirname.slice(1);
      }

      var searchAndReplace = 'comp';
      if (basename[0] === '__') {
        filepath.basename = '_' + basename.slice(1);
      } else if (basename[0] === '_') {
        filepath.basename = '.' + basename.slice(1);
      } else if (basename.indexOf(searchAndReplace) !== -1) {
        filepath.basename = basename.replace(searchAndReplace, answers.compClassName);
      }
    }))
    .pipe(conflict(destDir, {defaultChoice: 'n'}))
    .pipe(gulp.dest(destDir));

  // We're all done setting up the stream, now we can pass it along to let the install finish things up when the
  // stream has finished. We didn't encounter any errors, so nothing to pass for the first param.
  return finished(null, stream);
};

module.exports = install;
