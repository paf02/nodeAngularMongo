MyApp.angular.controller('productsController', ['$scope', 'dataService', function ($scope, dataService) {
  $scope.products = [
      {id: 1, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 2, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 3, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 4, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 5, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 6, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 7, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3}
  ];

  dataService.getProduct(function(argument) {
    $scope.title = argument.data.title;
    console.log($scope.title, "Products");
  }, function() {
    alert("Error");
  });
}]); 