// var x = 5;

// if (function f() {}) {
//   // console.log("inside", typeof f);

//   x = x + typeof f;
// }

// console.log("x", x);


// var x = 5;

// output = (() => {
//   delete x;
//   return x;
// })();

// console.log("output",output);




let obj1={
  a:"a",
  b:"b",
  c:{c1:"c1"}
}

let obj2={...obj1}

obj2.c.c1="d1"

console.log("obj1",obj1);

