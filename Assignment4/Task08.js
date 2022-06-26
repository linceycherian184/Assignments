var obj ={num:2};

//------Call--------->
var addtoSum =function(a){
    return this.num+a;
}
console.log(addtoSum.call(obj,5));


// <-----------Apply---------->
var arr = [9,2,3];
var addSum =function(a,b,c){
    return this.num+a+b+c;
}

console.log(addSum.apply(obj,arr));


// <--------Bind----------------->
 
var bound = addSum.bind(obj);
console.log(bound(1,2,3));


//<------------Question4----------->

var student = {age:20}

var prints = function(){
    return this.age;
}

var bindFn =prints.bind(student);
console.log(bindFn());

//<--------------Currying using bind---------------->


let multiply = function(x,y){
    console.log(x*y);
}

let multiplybytwo = multiply.bind(this,2);
multiplybytwo(5);
let multiplybythree = multiply.bind(this,3);
multiplybythree(5);


//<----------------Currying using closures------------>

let mult= function(a){
    return function(y){
        console.log(a*y)
    }

}

let multByTwo = mult(2);
multByTwo(5);
let multbythree = mult(3);
multbythree(5);