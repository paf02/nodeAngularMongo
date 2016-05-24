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
