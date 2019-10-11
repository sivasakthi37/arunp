
// console.log(a);
//  a = 7;

// function hoist() {
//     a = 20;
//     var b = 100;
//   }
  
//   hoist();
  
//   console.log(a); 
  /* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */
  
//   console.log(b); 


expression(); //Output: "TypeError: expression is not a function

function  expression (){
  console.log('Will this work?');
};
