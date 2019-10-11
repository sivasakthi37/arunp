
var name = "Ninja";
function bike() {
    console.log(this.name);
  }
  
  
  var obj1 = { name: "Pulsar", bike: bike };
  var obj2 = { name: "Gixxer", bike: bike };
  
  bike();       // "Ninja"
  obj1.bike();      // "Pulsar"
  obj2.bike();      // "Gixxer"


// var obj1 = {
//     name: "Pulsar",
//     bike: function() {
//       console.log(this.name);
//     }
//   }
//   var obj2 = { name: "Gixxer", bike: obj1.bike };
//   var name = "Ninja";
//   var bike = obj1.bike;
  
//   bike();           // "Ninja"
//   obj1.bike();      // "Pulsar"
//   obj2.bike();      // "Gixxer"