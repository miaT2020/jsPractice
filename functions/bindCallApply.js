function greet(name, age) {
  console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
}

let person = {
  name: "John",
  age: 30,
};

// Using call()
greet.call(person, person.name, person.age); // Output: Hi, my name is John and I'm 30 years old.

// Using apply()
greet.apply(person, [person.name, person.age]); // Output: Hi, my name is John and I'm 30 years old.

//In JavaScript, the bind() method is used to create a
//new function with a specified this value, and any
//additional arguments that are passed to the bound function.
let greetPerson = greet.bind(person, person.name, person.age);
greetPerson(); // Output: Hi, my name is John and I'm 30 years old.

const car = {
  brand: "Toyota",
  model: "Camry",
  getInfo: function () {
    return `${this.brand} ${this.model}`;
  },
};

function showInfo(engine, year) {
  console.log(
    `This car is a ${this.getInfo()} with a ${engine} engine made in ${year}.`
  );
}

const boundShowInfo = showInfo.bind(car, "V6", 2022);
boundShowInfo(); // Output: This car is a Toyota Camry with a V6 engine made in 2022.

const button = document.querySelector("button");
const message = "Button clicked!";

const obj = {
  showMessage: function () {
    console.log(this.message);
  },
  message,
};

button.addEventListener("click", obj.showMessage.bind(obj));
