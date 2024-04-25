function addToCartJs(cart, product) {
    cart.items.push(product);
}
function removeFromCartJs(cart, productId) {
    cart.items = cart.items.filter(function (item) { return item.id !== productId; });
}
const products = [
    { id: 1, name: "Product 1", price: 10, category: "Category 1" },
    { id: 2, name: "Product 2", price: 20, category: "Category 2" },
    { id: 3, name: "Product 3", price: 30, category: "Category 1" }
];

var cart = { items: [] };
addToCartJs(cart, products[0]);
console.log("Cart after adding Product 1:", cart);
removeFromCartJs(cart, 1);
console.log("Cart after removing Product 1:", cart);
