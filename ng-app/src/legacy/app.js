angular.module('legacyApp', [])
  .run(function() { console.log('legacyApp running'); })
  .directive('legacyRoot', function() {
    return { template: '<div style="padding:16px">Legacy works</div>' };
  });
