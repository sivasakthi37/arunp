function obj1(firstName, lastName) {
  this.firstName=firstName;
  this.lastName=lastName
}


// obj1={
//     firstName:"siva",
//     lastName:"sivasakthi"
// }

obj1.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
obj = new obj1("siva", "sakthi");

console.log("obj", obj.fullName());

// obj.fullName()
