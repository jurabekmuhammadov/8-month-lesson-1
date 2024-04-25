type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
}

type ShoppingCart = {
    items: Product[];
}

function addToCartTs(cart: ShoppingCart, product: Product): void {
    cart.items.push(product);
}

function removeFromCartTs(cart: ShoppingCart, productId: number): void {
    cart.items = cart.items.filter(item => item.id !== productId);
}

const productsTs: Product[] = [
    { id: 1, name: "Product 1", price: 10, category: "Category 1" },
    { id: 2, name: "Product 2", price: 20, category: "Category 2" },
    { id: 3, name: "Product 3", price: 30, category: "Category 1" }
];

const cartTs: ShoppingCart = { items: [] };

addToCartTs(cartTs, productsTs[0]);
console.log("Cart after adding Product 1:", cartTs);

removeFromCartTs(cartTs, 1);
console.log("Cart after removing Product 1:", cartTs);
