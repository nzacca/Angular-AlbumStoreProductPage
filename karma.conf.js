// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const argv = require("minimist")(process.argv.slice(2)),
  part = argv.part !== true && argv.part;

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("karma-spec-reporter"),
      require("@angular-devkit/build-angular/plugins/karma")
    ],
    client: {
      args: [part],
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [{ pattern: "./src/test.ts", watched: false }],
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/album-store"),
      reports: ["html", "lcovonly"],
      fixWebpackSourcePaths: true
    },
    reporters: ["progress", "coverage-istanbul", "spec"],
    specReporter: {
      maxLogLines: 1,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false,
      showSpecTiming: true,
      failFast: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true
  });
};
