function Car(make, model, year, type, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type; 
    this.isAvailable = isAvailable;
}

Car.prototype.getRentalPrice = function () {
    const basePrice = 50;
    const typeRates = { SUV: 70, Sedan: 50, Truck: 80, Coupe: 60 };
    return typeRates[this.type] || basePrice;
};

function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`${car.make} ${car.model} is already rented.`);
    }
};

Customer.prototype.returnCar = function (car) {
    setTimeout(() => {
        car.isAvailable = true;
        this.rentedCars = this.rentedCars.filter(c => c !== car);
        console.log(`${this.name} returned the ${car.make} ${car.model}.`);
    }, 2000);
};

function PremiumCustomer(name, discountRate = 10) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

PremiumCustomer.prototype.getDiscountedPrice = function (car) {
    const price = car.getRentalPrice();
    return price - (price * this.discountRate) / 100;
};

function Maintenance(car, delay) {
    console.log(`The ${car.make} ${car.model} is under maintenance.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`The ${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// Demonstration
const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
const car2 = new Car("Ford", "Explorer", 2022, "SUV");
const car3 = new Car("Chevrolet", "Silverado", 2021, "Truck");

const customer1 = new Customer("Alice");
const customer2 = new PremiumCustomer("Bob", 15);

customer1.rentCar(car1);
console.log(`Rental Price for ${car1.model}: $${car1.getRentalPrice()}`);
customer1.returnCar(car1);

customer2.rentCar(car2);
console.log(`Rental Price for ${car2.model} with discount: $${customer2.getDiscountedPrice(car2)}`);
Maintenance(car2, 3000);
