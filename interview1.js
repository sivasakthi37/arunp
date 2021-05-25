let i = 0;

let setTimmer = setInterval(() => {
  console.log(i++);
  console.log("log",typeof 1);
  
  if (i===11) {
    clearInterval(setTimmer)
  }
}, 1000);

i:undefined


console.log("i",i);//error


const i;



//key lookup 







