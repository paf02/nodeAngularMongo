MyApp.angular.factory('dataService', ['$document', '$http', function ($document, $http) {
  'use strict';

  var pub = {};

  pub.getProduct = function(success, fail) {
    $http({
      method: 'GET',
      url: MyApp.endPoints.getProduct
    }).then(success, fail);
  };

  pub.getCurrency = function(success, fail) {
    $http({
      method: 'GET',
      url: MyApp.endPoints.getCurrency
    }).then(success, fail);
  };

  pub.getLanguage = function(success, fail) {
    $http({
      method: 'GET',
      url: MyApp.endPoints.getLanguage
    }).then(success, fail);
  };

  function onReady() {
    var i;
    
  }

  return pub;
}]);
