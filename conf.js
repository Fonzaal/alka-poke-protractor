exports.config = {
  framework: 'jasmine',
  specs: ['tests/specs/happyPath.spec.js'],
  onPrepare: function(){},
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--window-size=1280,720']
    }
  },
  jasmineNodeOpts: {
    directConnect: true,
    showColors: true,
    isVerbose: true,
    includeStackTrace: true
  }
};
