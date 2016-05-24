MyApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'hexafy', function ($scope, $http, InitService, hexafy) {
  'use strict';
  
  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('IndexPageController: ok, DOM ready');
    
  console.log(hexafy.getData());
  });

}]);