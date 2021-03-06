Package.describe({
  name: 'stormgle:util',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Useful utilities for Stormgle projects',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stormgle/util.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  
  api.mainModule('util.js');
});

Package.onTest(function(api) {
  api.use('stormgle:util');
  api.use(['ecmascript', 'practicalmeteor:mocha', 'practicalmeteor:chai']);  
    
  api.mainModule('util-tests.js');
  
});
