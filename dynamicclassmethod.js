// let METADATA = Symbol('metadata');

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
  
//   // example using symbols
//   [METADATA]() {
//     return {
//       make: this.make,
//       model: this.model
//     };
//   }

//   // you can also use any javascript expression

//   // this one is just a string, and could also be defined with simply add()
//   ["add"](a, b) {
//     return a + b;
//   }

//   // this one is dynamically evaluated
//   [1 + 2]() {
//     return "three";
//   }
// }

// let MazdaMPV = new Car("Mazda", "MPV");
// MazdaMPV.add(4, 5); // 9
// MazdaMPV[3](); // "three"
// MazdaMPV[METADATA](); // { make: "Mazda", model: "MPV" }



// ClassOne.js
 class ClassOne {
    constructor () {
        console.log("Hi from ClassOne");
    }
    find(){
        console.log("log from find");
        
    }
}

// ClassTwo.js
 class ClassTwo {
    constructor (msg) {
        console.log(`${msg} from ClassTwo`);
    }

    find(){
        console.log("log from find");
        
    }
}



// Use ES6 Object Literal Property Value Shorthand to maintain a map
// where the keys share the same names as the classes themselves
const classes = {
    ClassOne,
    ClassTwo
};

class DynamicClass {
    constructor (className, opts) {
        return new ClassOne(opts);
    }
}

let a=new DynamicClass("ClassOne")

console.log("a",a.find());

// export default DynamicClass;