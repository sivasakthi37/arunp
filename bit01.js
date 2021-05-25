

(() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 1000);
  setTimeout(() => {
    console.log("3");
  }, 0);
  console.log("4");
})();


let a=["a","b","c"]

// a.splice(0,0,"d")

// console.log("a",a);
