// Define a constructor function for a Vehicle object
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.start = function () {
  console.log("Start the engine....");
};

// Define a constructor function for a Car object
function Car(make, model, year, numDoors) {
  //Vehicle.call(this, make, model, year, numDoors);
  //test apply
  Vehicle.apply(this, [make, model, year]);
  this.numDoors = numDoors;
}

//Inherit from Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.drive = function () {
  console.log("driving...");
};

let car1 = new Car("Toyota", "Corolla", 2022, 4);

car1.start();
car1.drive();
