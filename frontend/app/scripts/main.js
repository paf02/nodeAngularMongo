// Init angular
var MyApp = {};

MyApp.config = {
};

MyApp.angular = angular.module('ecomApp', []);


MyApp.endPoints = {
	getProduct: 'http://jsonplaceholder.typicode.com/posts/1',
	getLanguage: 'http://jsonplaceholder.typicode.com/posts/2',
	getCurrency: 'http://jsonplaceholder.typicode.com/posts/3'
}

MyApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', function ($scope, $http, InitService) {
  'use strict';
  
  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('IndexPageController: ok, DOM ready');
  });

}]); 
MyApp.angular.controller('productsController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.products = [
      {id: 1, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 2, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 3, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 4, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 5, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 6, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 7, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
  ];

  dataService.getProduct(function(argument) {
    $scope.title = argument.data.title;
    console.log($scope.title, "Products");
  }, function() {
    alert("Error");
  });
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
  var controller = ['$scope', '$location', 'dataService', function($scope, $location, dataService){
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

  	dataService.getCurrency(function(argument) {
  		$scope.title = argument.data.title;
  		console.log($scope.title, "Currency");
  	}, function() {
  		alert("Error");
  	});

  	$scope.selectedCurrency = $scope.currencies[0].currency;
    $scope.currencySelection = function (item) {
        $scope.selectedCurrency = item;
    };

	
	dataService.getLanguage(function(argument) {
  		$scope.title = argument.data.title;
  		console.log($scope.title, "Language");
  	}, function() {
  		alert("Error");
  	});    

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
