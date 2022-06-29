//<-----------------Global Scope of this------------------------------------>
this.space = 'global space';
this.room ={
    name:"Mark",
    
    computer(){
        console.log(`${this.name} has a laptop.`)
    }
}

console.log(this.space);
this.room.computer()

//<--------------------------- this inside an object ------------------------->
let Paul ={
    name:"paul",
    age:16,
    license(){
        console.log(`Since Paul's age is ${this.age} he doesn't have a license.`)
    }
}

console.log(Paul.license());

// <----------------this inside  a function--------------------------------->

const a = function(){
    console.log(`This is declared in the ${this.space}.`)
}
a.call(this);

const b = function(){
    console.log(`${this.name} function is called`);

}
b.call(Paul);
b.call(this.room);

// <--------------------this inside inner function ----------------------->

const outerFunction = function(){
    const innerfunction= ()=>{
        console.log(`${this.name} function is called using inner function.`)
    }
    innerfunction();
    
}
outerFunction.call(Paul);

//<-------------------this inside a constructor---------------------------->


let car = function(name){
    this.brand = `${name}'s car`
}
car.prototype.myCar = function(){
    console.log(`I am using ${this.brand}.`)
}
const davidCar = new car("Ford");
davidCar.myCar()



//<---------------------this inside a class----------------------------------->
class carBrand{
    constructor(name){
        this.brand = `${name}'s car`
    }
    myCar(user){
        console.log(`${user} uses ${this.brand}`)
    }
}

const jill = new carBrand('Nissan');
jill.myCar("Jill");


// design a Student class which stores the name , age , phone number, board marks of each student. 
//Make a constructor to initialize the values.

class Student{
    static count() {
        Student.counter = (Student.counter || 0) + 1;
        return;
    }
    constructor(name,age,phone,marks){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks =marks;
        Student.count();
    }
    eligibility(){
        if(this.marks>=40){
            console.log(`${this.name} with ${this.marks} is eligible.`)
        }else{
            console.log(`${this.name} with ${this.marks} marks is not eligible.`)
        }
    }
}

const s1 = new Student('Luke',22,77113478,30);
s1.eligibility();
const s2 = new Student('Peter',27,77113488,50);
const s3 = new Student('Paul',29,77117578,75);
const s4 = new Student('Tom',32,77913478,23);
const s5= new Student('Lake',18,77111278,33);
console.log(Student.counter);

//<---------------------------Fat arrow---------------->
"use strict"

let getA = a=>a;
console.log(getA(1));

let square =(a) => {
    return a*a
};
console.log(square(3));


let mult=(a,b)=>{
    return a*b;
}
console.log(mult(3,4));


var x = function(){
    this.val =1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val);
    },1);
}

var xx = new x();

var y =(...n)=>{
    console.log(n[0])
};
y(111,22,33)


class Student1{
    static count() {
        Student.counter = (Student.counter || 0) + 1;
        return;
    }
    constructor(name,age,phone,marks){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks =marks;
        Student.count();
    }
    eligibility(){
        if(this.marks>=40){
            console.log(`${this.name} with ${this.marks} is eligible.`)
        }else{
            console.log(`${this.name} with ${this.marks} marks is not eligible.`)
        }
    }
    placementEligibility(maxAge){
        return (minMarks)=>{
            if(this.age<maxAge && this.marks>minMarks){
                console.log("eligible");
            }else{
                console.log("not eligible");
            }
        }

    }
}
const s13 = new Student1('Paul',29,77117578,75);
const s14 = new Student1('Tom',32,77913478,23);
s13.placementEligibility(40)(40);
s14.placementEligibility(40)(40);