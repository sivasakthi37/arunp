// function Details(firstName, LastName) {
//   (this.name = firstName), (this.LastName = LastName);

//   this.fullname = function() {
//     return this.name + " " + this.LastName;
//   };
// }

class Detail {
  constructor(firstName, LastName) {
    (this.name = firstName), (this.LastName = LastName);
  }
  fullname() {
    return this.name + " " + this.LastName;
  }
}

let D = new Detail("siva", "sakthi");
console.log("details", D.fullname());
