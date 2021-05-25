let a = "({(())){}})";

let splitString = [];

let bracket = {
  "]": "[",
  "}": "{",
  ")": "(",
  ">": "<"
};

let splits = a.split("");

// splits.forEach((str, i) => {
//   if (str === "{" || str === "[" || str === "(" || str === "<") {
//     splitString.push(str);
//   } else {
//     if (splitString[splitString.length - 1] === bracket[str]) {
//       splitString.pop();
//     }
//   }
// });

splits.map((str, i) => {
  if (str === "{" || str === "[" || str === "(" || str === "<") {
    splitString.push(str);
  } else {
    if (splitString[splitString.length - 1] === bracket[str]) {
      splitString.pop();
    }
  }
});

if (splitString.length == 0) {
  console.log("string is valid", splitString);
} else {
  console.log("string is Invalid", splitString);
}
