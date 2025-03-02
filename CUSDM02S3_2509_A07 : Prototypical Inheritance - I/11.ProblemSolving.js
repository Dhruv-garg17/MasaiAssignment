function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.getDetails = function () {
    return `${this.name} - $${this.price} (Stock: ${this.quantity})`;
};

function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.model = model;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.powerOn = function () {
    console.log(`${this.brand} ${this.model} is now ON.`);
};

Electronics.prototype.powerOff = function () {
    console.log(`${this.brand} ${this.model} is now OFF.`);
};

function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

Clothing.prototype.wash = function () {
    console.log(`Washing ${this.name} made of ${this.material}.`);
};

function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
}

Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

Book.prototype.readSample = function () {
    console.log(`Reading a sample from "${this.name}" by ${this.author}.`);
};

const laptop = new Electronics("Laptop", 1200, 10, "Dell", "XPS 15");
const tShirt = new Clothing("T-Shirt", 25, 50, "M", "Cotton");
const novel = new Book("The Great Gatsby", 15, 20, "F. Scott Fitzgerald", "Classic");

console.log(laptop.getDetails());
laptop.powerOn();
laptop.powerOff();

console.log(tShirt.getDetails());
tShirt.wash();

console.log(novel.getDetails());
novel.readSample();
