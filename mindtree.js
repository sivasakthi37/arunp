let a = ["aaa","ccc", "bbb", "ccc", "bbb", "aaa", "aaa","ccc","ccc"];

let count = {};

a.forEach(element => {
  if (count[element]) {
    count[element] = count[element] + 1;
  } else {
    count[element] = 1;
  }
});

let aaa=Object.values(count).sort(function(a, b){return a-b});

index=aaa[aaa.length-2]
let finded;
for (const key in count) { 
    if(count[key]===index){
        finded=key
    }
}


console.log("count1", aaa,finded,index);
