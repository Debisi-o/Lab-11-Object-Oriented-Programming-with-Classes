class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue() {
        return this.price * this.quantity;
    }
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(
            2
        )}, Quantity: ${this.quantity}`;
    }
    static applyDiscount(products, discount) {
        products.forEach((product) => {
            product.price = product.price - product.price * discount;
        });
    }
}
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}
class Store {
    constructor() {
        this.inventory = [];
    }
    addProduct(product) {
        this.inventory.push(product);
    }
    getInventoryValue() {
        return this.inventory.reduce(
            (total, product) => total + product.getTotalValue(),
            0
        );
    }
    findProductByName(name) {
        return (
            this.inventory.find((p) => p.name.toLowerCase() === name.toLowerCase()) ||
            null
        );
    }
}
function runTest() {
    const log = [];
    const output = (msg) => {
        console.log(msg);
        log.push(msg);
    };
    // Create products
    const product1 = new Product("Apple", 2.5, 50);
    const product2 = new Product("Shampoo", 5.99, 20);
    const product3 = new Product("Bread", 1.2, 30);
    const perishable1 = new PerishableProduct("Milk", 1.5, 10, "2024-12-31");
    const perishable2 = new PerishableProduct("Yogurt", 2.0, 15, "2024-10-15");
    // Create store
    const myStore = new Store();
    myStore.addProduct(product1);
    myStore.addProduct(product2);
    myStore.addProduct(product3);
    myStore.addProduct(perishable1);
    myStore.addProduct(perishable2);

