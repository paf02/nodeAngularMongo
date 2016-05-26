MyApp.angular.factory('cartService', ['$document', '$http', function ($document, $http) {
  'use strict';

  var pub = {};
  var cart = [];

  pub.getTotalPrice = function() {
    var price = 0;
    cart.map(function(obj) {
      price += obj.items.price * obj.totalItems;
    });

    return price;
  }

  
  var setItemInCart = function (totalItems, item) {
    var data = {
      totalItems: totalItems,
      items: item,
    }

    cart.push(data);
  };

  pub.updateItemInCart = function (totalItems, item) {
    var result = cart.filter(function( obj ) {
      if (obj.items == item) {
        obj.totalItems = totalItems;
        return obj;
      }
    });

    if (!result) {
      setItemInCart(totalItems, item);
    }
  };

  pub.removeItemInCart = function (item) {
    var removeIndex = cart
                        .map(function(obj) { return obj.items; })
                        .indexOf(item);

    cart.splice(removeIndex, 1);
  };

  pub.getItemsInCart = function() {
    return cart;
  }

  return pub;
}]);
