let numbers = [1,2,3,4,5,6];
function sum(total, value){
    console.log("total---- in function",total);
    console.log("value---- in function",value);
  return total + value;
}
let total = numbers.reduce(sum, 0); 
console.log("total -->",total);
