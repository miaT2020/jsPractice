// function fn(param1=default1, param2=default2,..) {
// }

function createDiv(
  height = "100px",
  width = "100px",
  border = "solid 1px red"
) {
  let div = document.createElement("div");
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
  return div;
}

createDiv();

createDiv(undefined, undefined, "solid 5px blue");

//Evaluating default parameters
function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}

console.log(put("Toy Car"));
// -> ['Toy Car']
console.log(put("Teddy Bear"));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']

// The parameter can
//take a default value which
//is a result of a function.

function date(d = today()) {
  console.log(d);
}
function today() {
  return new Date().toLocaleDateString("en-US");
}
date();
