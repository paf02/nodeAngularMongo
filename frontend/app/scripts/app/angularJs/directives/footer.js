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