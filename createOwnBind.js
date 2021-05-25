





Function.prototype.mybindMethod=function(obj){

    console.log("this",this,obj);
let fun=this

    return function(){
        fun.call(obj)
    }    

}

let a={fname:"sivasakthi",lastName:"chandrasekaran"}

let fun=function(){
    console.log("sivasakthi",this,this.fname+" "+this.lastName);
    
}
// fun.call(a)

fun.mybindMethod(a)()