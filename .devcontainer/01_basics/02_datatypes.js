// Primitive
// 7 Types: String,Number,Boolean,null,undefined,Symbol,BigInt
//Dynamicaaly types language
const id=Symbol('123')
const anotherid=Symbol('123')
// console.log(id==anotherid);


//Reference (Non Primitive)
// Array,Objects,Functions
const heros=["Shaktimaan","Doga","Naagraj"]
// console.log(heros);
let myobj={
    name:"Vikash",
    age:22
}
// console.log(myobj);
const myfun=function () {
    // console.log("Hello World");//function
}
console.log(typeof myfun);
// console.log(typeof myobj);//object