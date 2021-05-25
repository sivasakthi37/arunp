let state={
    firstname:"sivasakthi",
    lastname:"chandrasekaran37",
    name:function(){
       return this.firstname+" "+this.lastname
    }
}

let fuc=function(){
    console.log("this",this);
    
    return this.firstname +" " +this.lastname;
}

console.log("state",fuc.bind(state)());

function  declaration() {
  console.log("declaration this", this);
}
 expression= () => {
  console.log("expression this", this);
};



declaration()
expression()