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
// console.log(typeof myfun);
// console.log(typeof myobj);//object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive),Heap(Non Primitive)

let myname="Vikash"
let anothername=myname
// console.log(anothername);
anothername="Vickey"
// console.log(myname);
// console.log(anothername);

let user1={
    name:"vikash",
    email:"vikash@krishmark.com"
}
let user2=user1
console.log(user2.email);
user2.email="mcastudent@gmail.com"
console.log(user1.email);