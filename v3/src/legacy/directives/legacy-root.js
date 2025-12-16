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
//angular.module('legacyApp')
//   .config(function($routeProvider) {
//     $routeProvider
//       .when('/default', {
//         templateUrl: 'legacy/views/default.html',
//         controller: 'DefaultCtrl'
//       })
//       .otherwise({ redirectTo: '/default' });
//   });
