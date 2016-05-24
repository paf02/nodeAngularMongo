// Init angular
var MyApp = {};

MyApp.config = {
};

MyApp.angular = angular.module('ecomApp', []);

MyApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'hexafy', function ($scope, $http, InitService, hexafy) {
  'use strict';
  
  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('IndexPageController: ok, DOM ready');
    
  console.log(hexafy.getData());
  });

}]);
MyApp.angular.factory('InitService', ['$document', function ($document) {
  'use strict';

  var pub = {},
    eventListeners = {
      'ready' : []
    };
  
  pub.addEventListener = function (eventName, listener) {
    eventListeners[eventName].push(listener);
  };

  function onReady() {
    var i;
    for (i = 0; i < eventListeners.ready.length; i = i + 1) {
      eventListeners.ready[i]();
    }
  }
  
  // Init
  (function () {
    $document.ready(function () {
      onReady();
    });
  }());

  return pub;
  
}]);
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
MyApp.angular
.directive('footerDirective', function() {
  var controller = ['$scope', function($scope){
  	$scope.social = [
        {href: "#", icon: "fa-facebook"},
        {href: "#", icon: "fa-twitter"},
        {href: "#", icon: "fa-youtube"},
        {href: "#", icon: "fa-linkedin"},
        {href: "#", icon: "fa-pinterest"}
    ];

    $scope.footernav = [
      {text: "Home", href: "index.html"},
      {text: "My Account", href: "account.html"},
      {text: "Wishlist", href: "Wishlist.html"},
      {text: "Cart", href: "cart.html"},
      {text: "Order History", href: "#"}      
    ];

    $scope.categories = [
      {text: "Mobile Phone", href: "#"},
      {text: "Home Accessories", href: "#"},
      {text: "LED TV", href: "#"},
      {text: "Computer", href: "#"},
      {text: "Gadgets", href: "#"}   
    ];

  }]

  return {
    restrict: 'E',
    controller: controller,
    templateUrl: 'partials/footer.html'
  };
});
MyApp.angular
.directive('headerDirective', function() {
  var controller = ['$scope', '$location', function($scope, $location){
  	$scope.login = true;
  	$scope.usernav = [
  		{text: "My Account", href: "account.html", icon: "fa-user"},
  		{text: "Wishlist", href: "wishlist.html", icon: "fa-gift"},
  		{text: "My Cart", href: "cart.html", icon: "fa-shopping-cart"}
  	];

  	$scope.currencies = [
  		{currency: "USD"},
  		{currency: "EUR"},
  		{currency: "COL"}
  	];
  	$scope.selectedCurrency = $scope.currencies[0].currency;
    $scope.currencySelection = function (item) {
        $scope.selectedCurrency = item;
    };

    $scope.languages = [
  		{language: "English"},
  		{language: "French"},
  		{language: "Spanish"}
  	];
  	$scope.selectedLanguage = $scope.languages[0].language;
    $scope.languageSelection = function (lang) {
        $scope.selectedLanguage = lang;
    };

    $scope.menu = [
  		{text: "Home", href: "index.html"},
  		{text: "Shop Page", href: "shop.html"},
  		{text: "Single Product", href: "single-product.html"},
  		{text: "Cart", href: "cart.html"},
  		{text: "Checkout", href: "checkout.html"},
  	];
	
	$scope.isActive = function (viewLocation) { 
     	if (viewLocation == window.location.pathname.split('/')[1]) {
     		return 'active';
     	}
    };

  }]

  return {
    restrict: 'E',
    controller: controller,
    templateUrl: 'partials/header.html'
  };
});
console.log('Angular Directive');    