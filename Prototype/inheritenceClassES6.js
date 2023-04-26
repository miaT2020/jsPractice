//ES6 vs object prototype
// In ES6, Javascript classes are primarily syntactic sugar
// over JavaScript’s existing prototype-based inheritance. For example, the prototype based inheritance
// written in function expression as below,
function Bike1(model, color) {
  this.model = model;
  this.color = color;
}

Bike1.prototype.getDetails = function () {
  return this.model + " bike has" + this.color + " color";
};

var john2 = new Person1("John Doe");
console.log(john2);
function Person1(name) {
  this.name = name;
}

console.log(john2.getName());

Person1.prototype.getName = function () {
  return this.name;
};

console.log(john2.getName());

console.log(john2 instanceof Person1); // true
console.log(john2 instanceof Object); // true

let x = 20,
  y = 10;

let result = add(x, y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = function (x, y) {
  return x + y;
};

//-----------------ES6 class-----------

class Bike {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getDetails() {
    return this.model + " bike has" + this.color + " color";
  }
}

// This Person class behaves like the Person type in the previous example. However,
// instead of using a constructor/prototype pattern, it uses the class keyword.
let john3 = new Person("John Doe");
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  //methods using the static keyword
  static createAnonymous(gender) {
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
  }
}

let john = new Person("John Doe");
let name = john.getName();
console.log(name); // "John Doe"

// that classes are special functions, you can use the typeof operator of to check the type of the Person class.
console.log(typeof Person); // function
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

//using static methods
let anonymous = Person.createAnonymous("male");

//First-class citizen
function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi() {
      console.log("Hi");
    }
  }
);

greeting.sayHi(); // 'Hi'

//----Singleton
// Singleton is a design pattern that limits the instantiation
// of a class to a single instance. It ensures that only one
//instance of a class can be created throughout the system.

// Class expressions can be used to

let app = new (class {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`Starting the ${this.name}...`);
  }
})("Awesome App");

app.start(); // Starting the Awesome App...

//static property
class Item {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);

console.log(Item.getCount()); // 2

//computed property
let myName = "fullName";

class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //The get[name] is a computed property name of a getter of the Person class. At runtime, when you access the fullName property,
  //the person object calls the getter and returns the full name.
  get [myName]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Employee("John", "Doe");
console.log(person.fullName);

// /JavaScript Inheritance Using extends & super

//before ES6
function AnimalF(legs) {
  this.legs = legs;
}

AnimalF.prototype.walk = function () {
  console.log("walking on " + this.legs + " legs");
};

function BirdF(legs) {
  AnimalF.call(this, legs);
}

BirdF.prototype = Object.create(AnimalF.prototype);
BirdF.prototype.constructor = Animal;

Birdf.prototype.fly = function () {
  console.log("flying");
};

let pigeon = new BirdF(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly(); // flying

//Class
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("walking on " + this.legs + " legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("flying");
  }
}

let bird = new Bird(2);

bird.walk();
bird.fly();
