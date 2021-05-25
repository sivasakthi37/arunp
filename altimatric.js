function xyz() {
  let a = 100;

  function abc() {
    //   console.log(a);
    return a++;

  }

  return abc;
}

let z = xyz();

console.log(z());
console.log(z());
