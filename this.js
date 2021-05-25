// var name = "Ninja";
// function bike() {
//   console.log(this.name);
// }

// var obj1 = { name: "Pulsar", bike: bike };
// var obj2 = { name: "Gixxer", bike: bike };

// bike(); // "Ninja"
// obj1.bike(); // "Pulsar"
// obj2.bike(); // "Gixxer"

// var obj1 = {
//   name: "Pulsar",
//   bike: function() {
//     console.log(this.name);
//   }
// };
// var obj2 = { name: "Gixxer", bike: obj1.bike };
// var name = "Ninja";
// var bike = obj1.bike;

// bike(); // "Ninja"
// obj1.bike(); // "Pulsar"
// obj2.bike(); // "Gixxer"

// var arr = [2, 7, 11, 15];

// var target = 9;

// output[(0, 1)];

// console.log(" hai hellow  how are u");

// let a = (a, b) => a + b;

// let b = (a, b) => {
//   return a + b;
// };

// console.log("b", a(1, 2));

// (() => {
//   console.log("entred");
// })();

function name() {
  this.firsname = "sivasakthi";
  this.lastName = "chandrasekaran";
  name1=()=>console.log("name",this.firsname+" "+this.lastName);
  // name1()
  b = () => {
    a();
  };
  b()
}
function a() {
  console.log("this from arrow", this);
}
name();

// let b = function() {
//   console.log("this from declaration", this);
// };
// b();
