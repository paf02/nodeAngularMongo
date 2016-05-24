MyApp.angular.factory('hexafy', ['$document', function ($document) {
  'use strict';

  var pub = {};
  
  pub.getData = function () {
    var t = {
    	'name': 'pablo',
    	'lastname': 'montero'
    }

    return t;
  };

  function onReady() {
    var i;
    
  }

  return pub;
}]);