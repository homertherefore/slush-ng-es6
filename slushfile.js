/*
  _   _ _____ _   _  ____ _____   _
 | | | | ____| \ | |/ ___| ____| (_) ___
 | |_| |  _| |  \| | |   |  _|   | |/ _ \
 |  _  | |___| |\  | |___| |___ _| | (_) |
 |_| |_|_____|_| \_|\____|_____(_)_|\___/

*/
'use strict';

var gulp = require('gulp');
var generators = require('./generators');

// Run the component generator by default
gulp.task('default', generators.component);
gulp.task('component', generators.component);

//gulp.task('scaffold', generators.scaffold);
