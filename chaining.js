// class Chainning {
//   constructor(a, b) {
//     // Constructor
//     this.a = a;
//     this.b = b;
//     this.c;
//   }

//   add() {
//     this.c = this.a + this.b;
//     return this;
//   }

//   sub() {
//     this.c = this.a - this.b;
//     return this;
//   }

//   result() {
//     return this.c;
//   }
// }

// let math = new Chainning(3, 2);
// console.log("math.add().result()", math.result());

function Chaining(firstName, LastName, age) {
  this.firstName = firstName;
  this.LastName = LastName;
  this.age = age;
  this.address = "address";
  this.PersonName = function() {
    return this.firstName + "-----------" + this.LastName;
  };
}

let a = new Chaining("siva", "sakthi", "24");
Chaining.address = function() {
  return this.address;
};

console.log("math.add().result()", a.address());
