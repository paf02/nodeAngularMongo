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