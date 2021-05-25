// [
//     {
//       "id": "one",
//       "value": 1
//     },
//     {
//       "id": "two",
//       "value": 2
//     },
//     {
//       "id": "three",
//       "value": 3
//     }
//   ]

//   {
//     "one": 1,
//     "two": 2,
//     "three": 3
//   }

let a = [
  {
    id: "one",
    value: 1
  },
  {
    id: "two",
    value: 2
  },
  {
    id: "three",
    value: 3
  }
];

b = {};

a.map((total, num) => {
  console.log("num", total);
  b[total.id] = total.value;
});

console.log("b", b);

let backtoArray = [];

for (const key in b) {
  backtoArray.push({ id: key, value: b[key] });
}

console.log("backtoArraybacktoArray", backtoArray);
