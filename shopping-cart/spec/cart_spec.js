// var Cart = require('../cart');
// var Item = require('../item');

// describe('Cart', function() {
//   it("gets initialized without items or a total price", function() {
//     var cart = new Cart();
//     expect(cart.items).toEqual([]);

//     expect((new Cart()).totalPrice).toEqual(0);
//   });

//   it("allows you to add items to the cart", function() {
//     var item1 = new Item("Fruit", 4.50);
//     var item2 = new Item("Ice Cream", 5.50);
//     var cart = new Cart();

//     cart.addItem(item1);
//     expect(cart.totalPrice).toEqual(4.50);

//     cart.addItem(item2);
//     expect(cart.totalPrice).toEqual(10);
//   });

//   it("allows you to display an itemized list", function() {
//     var item1 = new Item("Coffee", 2.5);
//     var item2 = new Item("Donuts", 4.5);
//     var cart = new Cart();

//     expect(cart.itemizedList()).toEqual([]);

//     cart.addItem(item1);
//     cart.addItem(item2);
//     expect(cart.itemizedList()).toEqual(["Coffee - $2.5", "Donuts - $4.5"]);
//   });

//   it("allows you to add more than one of a given item to the cart", function() {
//     var item1 = new Item("Fruit", 4.50);
//     var item2 = new Item("Ice Cream", 5.50);
//     var cart = new Cart();

//     cart.addItem(item1, 2);
//     expect(cart.totalPrice).toEqual(9);

//     cart.addItem(item2, 4);
//     expect(cart.totalPrice).toEqual(31);
//   });

//   it("allows you to see how many of each item is in the cart", function () {
//     var coffee = new Item("Coffee", 1.50);
//     var cream = new Item("Cream", 0.50);
//     var cart = new Cart();

//     expect(cart.itemQuantities()).toEqual([]);

//     cart.addItem(coffee, 2);
//     expect(cart.itemQuantities()).toEqual(['Coffee - 2']);

//     cart.addItem(cream, 4);
//     expect(cart.itemQuantities()).toEqual(['Coffee - 2', 'Cream - 4']);
//   });

//   it("allows you to display the names and prices of items that are on sale", function() {
//     var item1 = new Item("Pie", 5.5, false);
//     var item2 = new Item("Coffee", 2.5, true);
//     var item3 = new Item("Donuts", 4.5, true);
//     var cart = new Cart();

//     cart.addItem(item1);
//     expect(cart.onSaleItems()).toEqual([]);

//     cart.addItem(item2);
//     expect(cart.onSaleItems()).toEqual(["Coffee - $2.5"]);

//     cart.addItem(item3);
//     expect(cart.onSaleItems()).toEqual(["Coffee - $2.5", "Donuts - $4.5"]);
//   });
// });
