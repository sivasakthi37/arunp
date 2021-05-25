// var arr1 = [1, 3, 5, 7, 9];
// var arr2 = [1, 2, 4, 5, 7];
// var arr3 = [1, 2, 5, 7, 8];

// let uniqueValue = [];

// for (let index = 0; index < arr1.length; index++) {
//   if (arr2.includes(arr1[index]) && arr3.includes(arr1[index])) {
//     uniqueValue.push(arr1[index]);
//   }
// }
// console.log("uniqueValue", uniqueValue);

var numbers = [1, 2, 10, 5, 6, 10, 5, 3, 2, 2];

// Remove the numbers from array If it occurs n number of times

removeNumber = (numbers, times) => {
  let tempArray = [];
  let numberInTwoTimes = [];
  let newarry = [];

  for (let index = 0; index < numbers.length; index++) {
    if (tempArray.includes(numbers[index])) {
      console.log("numbers[index]", numbers[index]);

    } else {
      tempArray.push(numbers[index]);
    }
  }
  console.log("a", a);
};

removeNumber(numbers, 2);
