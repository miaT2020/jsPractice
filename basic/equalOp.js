0 == false; // true
0 === false; // false
1 == "1"; // true
1 === "1"; // false
null == undefined; // true
null === undefined; // false
"0" == false; // true
"0" === false; // false
let a = [];
let b = [];
a == b; //false refer different objects in memory
a === b; //false refer different objects in memory
a = {};
b = {};
a == b; //false refer different objects in memory
a === b; //false, refer different objects in memory
