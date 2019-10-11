// simple loop self executing annonymous function
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// addition program with closer
add = a => b => a + b;

// simple program
var text = "aaaa";
var alfabet = key => {
  var finalObject = {};
  for (let i = 0; i < key.length; i++) {
    if (
      (65 <= key.charCodeAt(i) && key.charCodeAt(i) <= 90) ||
      (97 <= key.charCodeAt(i) && key.charCodeAt(i) <= 122) ||
      (48 <= key.charCodeAt(i) && key.charCodeAt(i) <= 57)
    ) {
      finalObject[key[i]] = finalObject[key[i]] ? ++finalObject[key[i]] : 1;
    }
  }

  console.log(finalObject);
};

alfabet(text);

// colser
function User(name) {
  
  var displayName = function(greeting) {
    
    return "sivasakthi";
  };
  return displayName;
}
var myFunc = User("Raj");
console.log("====================================");
console.log("myFunc", myFunc("welcome"));
console.log("====================================");
//   myFunc('Welcome ');
