class a8Sheets {
  constructor() {
    let obj = {};
    ["Data", "Sheets"].map(d => {
      console.log("ddddddd", d);
      obj[d] = new crud()
    });
    return obj;
  }
}

class crud {
  find() {
      console.log("from find");
      
  }
  findone() {
    console.log("from find");
  }
}

let a = new a8Sheets();

console.log("a", a.Data.find());
