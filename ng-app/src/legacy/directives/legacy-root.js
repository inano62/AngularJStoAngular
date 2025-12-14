angular
  .module('legacyApp')
  .directive('legacyRoot', function () {
    return {
      restrict: 'EA',
      template: '<div style="padding:16px">Legacy UI</div>',
    };
    // return {
    //   restrict: 'E',
    //   template: `
    //   <div class="legacy-shell">
    //     <div ng-view></div>
    //   </div>
    // `
    // };
  });
