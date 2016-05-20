var assert = require('assert');
var superagent = require('superagent');
var express = require('express');
var wagner = require('wagner-core');

var URL_ROOT = 'http://localhost:3000';

describe('Category API', function() {
	var server;
	var Category;
	var Product;
	var User;

	before(function() {
		var app = express();

		models = require('./models')(wagner);
		app.use(require('./api')(wagner));

		app.use(function(req, res, next) {
			User.findOne({}, function(error, user) {
				assert.ifError(error);
				req.user = user;
				next();
			});
		});

		server = app.listen(3000);

		Category = models.Category;
		Product = models.Product;
		User = models.User;
			 
	});

	after(function() {
		server.close();
	});

	beforeEach(function(done) {
		Category.remove({}, function(error) {
			assert.ifError(error);
		});

		Product.remove({}, function(error) {
			assert.ifError(error);
		});

		User.remove({}, function(error) {
			assert.ifError(error);
		});

		var categories = [
			{ _id: 'Electronics' },
			{ 
				_id: 'Phones',
				parent: 'Electronics' 
			},
			{ 
				_id: 'Laptops',
				parent: 'Electronics' 
			},
			{ _id: 'Bacon' },
		];

		var products = [
			{
				name: 'LG G4',
				category: { _id: 'Phones', ancestors: ['Electronics', 'Phones'] },
				price: {
					amount: 300,
					currency: 'USD'
				}
			},
			{
				name: 'Asus Zenbook Prime',
				category: { _id: 'Laptops', ancestors: ['Electronics', 'Laptops'] },
				price: {
					amount: 2000,
					currency: 'USD'
				}
			},
			{
				name: 'Flying Pigs Farm Pasture Raised Pork Bacon',
				category: { _id: 'Bacon', ancestors: ['Bacon'] },
				price: {
					amount: 20,
					currency: 'USD'
				}
			}
		];

		var users = [
			{
				profile: {
					username: 'vkarpov15',
					picture: 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4'
				},
				data: {
					oauth: 'invalid',
					cart: []
				}		
			}		
		];


		Category.create(categories, function(error, doc) {
			assert.ifError(error);
		});

		Product.create(products, function(error, doc) {
			assert.ifError(error);
		});

		User.create(users, function(error, doc) {
			assert.ifError(error);
			done();
		});

	});

	it('can save users cart', function(done) {
		var url = URL_ROOT + '/me/cart';
		var PRODUCT_ID = '000000000000000000000001';

		superagent
			.put(url)
			.send({
				data: {
					cart: [
						{
							product: PRODUCT_ID,
							quantity: 1
						}
					]
				}
			})
			.end(function(error, res) {
				assert.ifError(error);
				assert.equal(res.status, status.OK);
				User.findOne({}, function(error, user) {
					assert.ifError(error);
					assert.equal(user.data.cart.lenght, 1);
					assert.equal(user.data.cart[0].product, PRODUCT_ID);
					assert.equal(user.data.cart[0].quantity, 1);
					done();
				});;
			}); 
	});
});
