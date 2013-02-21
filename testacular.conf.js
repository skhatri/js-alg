// Testacular configuration
// Generated on Mon Feb 18 2013 21:33:42 GMT+1100 (EST)


// base path, that will be used to resolve files and exclude
basePath = './';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'src/main/webapp/javascript/**/*.js',
  'src/test/javascript/**/*.js'
];


// list of files to exclude
exclude = [
  'src/main/webapp/javascript/angular.min.js',
  'src/main/webapp/javascript/bootstrap.min.js',
  'src/main/webapp/javascript/jquery-1.9.0.min.js'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'junit'];

junitReporter = {
    outputFile: 'build/test-results.xml'
}

// web server port
port = 8881;


// cli runner port
runnerPort = 8882;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['ChromeCanary'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
