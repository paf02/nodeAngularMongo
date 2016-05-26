MyApp.angular.controller('productsController', ['$scope', 'InitService', 'dataService', function ($scope, InitService, dataService) {
  


  InitService.addEventListener('ready', function () {
    $scope.products = [
      {id: 1, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3},
      {id: 2, title: "HP Laptop", img: "/images/product-2.jpg", price: 780, discount: 10, rating: 3},
      {id: 3, title: "Apple Iphone 6", img: "/images/product-3.jpg", price: 1100, discount: 5, rating: 3},
      {id: 4, title: "Sony Play Station 4", img: "/images/product-4.jpg", price: 400, discount: 10, rating: 3},
      {id: 5, title: "Sony Smart Phone 2016", img: "/images/product-5.jpg", price: 700, discount: 15, rating: 3},
      {id: 6, title: "Samsung Smart Phone S6 Galaxy", img: "/images/product-6.jpg", price: 1000, discount: 5, rating: 3},
      {id: 7, title: "Sony Smart TV 2015", img: "/images/product-1.jpg", price: 1800, discount: 15, rating: 3}
    ];

    $scope.cart = [];

    dataService.getProduct(function(argument) {
      $scope.title = argument.data.title;
      console.log($scope.title, "Products");
    }, function() {
      // alert("Error");
    });

    $scope.totalPrice = function(item){
      var total, itemsLength;
      total = 0;
      itemsLength = $scope.products.length;
      for(count=0; count<itemsLength; count++){
        total += $scope.products[count].price*1;
      }
      return {
        total,
        itemsLength
      };
    }

    $scope.addItem = function(item) {
      $scope.cart.push(item);
      //$scope.totalPrice(item);
    }

    $scope.removeItem = function(index){
      $scope.products.splice(index,1);
    }
  });
}]); 