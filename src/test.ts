// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import "zone.js/dist/zone-testing";
import { getTestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

// Load this module so we can use the since() matcher
require("jasmine2-custom-message");

declare const require: any;
declare var __karma__: any;
const part = __karma__.config.args[0];

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// load all tests, and then filter into specFiles array if the test path matches the `part#` passed in as an argument into the variable `part`
const context = require.context("./", true, /projects\.spec\.ts/);
let specFiles = context.keys().filter(path => {
  let filterRegExp = part ? new RegExp(part, "g") : /projects\.spec\.ts/g;
  return filterRegExp.test(path);
});

// and load the modules.
specFiles.map(context);
