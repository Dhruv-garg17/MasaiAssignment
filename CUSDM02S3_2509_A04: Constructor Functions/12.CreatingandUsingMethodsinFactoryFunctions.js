
function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    describeCar() {
      console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
    }
  };
}


const car = createCar("Toyota", "Camry", 2022);
car.describeCar();  


const car2 = createCar("Honda", "Civic", 2021);
car2.describeCar();

