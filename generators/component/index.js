// Essential Supporting Libraries/Utils
var _ = require('lodash'); // The epic JS multi-tool!
var path = require('path'); // For safe path joining
var inquisitor = require('hence-inquisitor'); // The star of the show!
var hence = require('hence-util'); // Supporting text tools

// Paths
var cwd = process.cwd(); // The CWD of where the CLI is executed from, to reference where we'd like to output things
var tplDir = __dirname + '/template/'; // The local reference to this scaffold template folder, to be used in installation

// Start building out the scaffold installation
var scaffold = inquisitor.Scaffold({
  // Define the steps that your scaffold will use, in any order you desire. Each steps will receive answers from the
  // former step, so it's best to place over arching steps that need previous answers to be further down the pipe.
  steps: [
    require('./scaffold/step-install-options')
  ],
  // Specific the default set of answers options that will feed details into all of your steps, common config like paths.
  defaults: {
    dirs: {
      template: {
        root: tplDir,
        common: path.join(tplDir, 'common'),
        optional: path.join(tplDir, 'optional')
      },
      dest: path.join(cwd, '')
    }
  },
  // Control what messages appear during your installation. The scaffold manages the initial introduction, as well
  // as completion message once everything is done. Should your process be aborted or encounter an error, you can
  // manage what details go along with this as well.
  content: {
    intro: hence.ascii.hence(
      inquisitor.colors.bold(" Welcome to the Hence.io Angular ES6 Generator. ") + "This installer is designed to" +
      " generate components for you to use easily."
    ),
    done: inquisitor.colors.bold(" Thank you for using the Hence.io Angular ES6 Generator!\n")
  },
  // A helper function to configure CLI arguments passed into this installer, allowing you to process each argument
  // and determine what unique options it will leverage during an multi-installation
  cliArg: function (arg) {
    return {
      content: {
        intro: inquisitor.ascii.heading('Angular ES6 Component Installation') +
        inquisitor.colors.bold(' Name: ') + arg,
        done: inquisitor.ascii.spacer()
      },
      defaults: {
        scaffoldName: arg
      }
    };
  },
  // Provide a reference to the essential install function, which controls what you do with all of the answers once
  // the steps are complete.
  install: require('./scaffold/install')
});

module.exports = scaffold;
