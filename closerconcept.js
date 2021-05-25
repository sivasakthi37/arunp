// // simple loop self executing annonymous function
// for (var i = 0; i < 5; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   })(i);
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// // addition program with closer
// add = a => b => a + b;

// // simple program
// var text = "aaaa";
// var alfabet = key => {
//   var finalObject = {};
//   for (let i = 0; i < key.length; i++) {
//     if (
//       (65 <= key.charCodeAt(i) && key.charCodeAt(i) <= 90) ||
//       (97 <= key.charCodeAt(i) && key.charCodeAt(i) <= 122) ||
//       (48 <= key.charCodeAt(i) && key.charCodeAt(i) <= 57)
//     ) {
//       finalObject[key[i]] = finalObject[key[i]] ? ++finalObject[key[i]] : 1;
//     }
//   }

//   console.log(finalObject);
// };

// alfabet(text);

// // colser
// function User(name) {

//   var displayName = function(greeting) {

//     return "sivasakthi";
//   };
//   return displayName;
// }
// var myFunc = User("Raj");
// console.log("====================================");
// console.log("myFunc", myFunc("welcome"));
// console.log("====================================");
// //   myFunc('Welcome ');

//hoc
// add = func => (a, b, c) => func(a, b, c);

// hoc = (a, b, c) => {
//   console.log("====================================");
//   console.log("a+b+c", a + b + c);
//   console.log("====================================");
// };

// var data = add(hoc);
// data(1, 2, 3);

//bind
//eventloop
//hoisting
//spred operator
//closer

// Array.prototype.addfl = function name() {
//   console.log("this", this, this.length);
//   return this[0] + this[this.length - 1];
// };

// a = ["a", "b", "c"];

// addedValue = a.addfl();

// console.log("output", addedValue); //ac

function addNumber(pr) {
  let a = pr;
  return function(params) {
    console.log("a", a + params);
  };
}


addNumber(1)(3)


//why ?









