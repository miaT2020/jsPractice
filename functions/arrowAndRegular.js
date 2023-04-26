const arr = [1, 2, 3, 5];

//arrow
// const double = arr.map((num) => num * 2);
// console.log(double);

// //regular
// const double2 = arr.map(function (num) {
//   return num * 2; //implicit return
// });
// console.log("regular: " + double2);

// const bt = document.getElementById("test");
// bt.addEventListener("click", function () {
//   this.innerHTML = "click";
// });

const bt2 = document.getElementById("test");
bt2.addEventListener(
  "click",
  () => (document.getElementById("test").innerHTML = "click")
);
//() => (this .innerHTML = "click")
//this keyword in arrow founction is not working , reference error
