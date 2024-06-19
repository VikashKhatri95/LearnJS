//singleton created only with the help of constructor
Object.create//Object method

//Object literal no singleton object is created with this method
myArray=["v","i"]
// console.log(myArray[1]);
const mysym=Symbol("mykey1");
// console.log(typeof mysym);//Symbol type
const JsUser={
    name:"Vikash",
    // mysym:"mykey123" //it is not a symbol
    [mysym]:"mykey456",
    "full name":"vikash Khatri",
    age:23,
    location:"navi Mumbai",
    email:"vikash.khatri@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

JsUser.email="vikashkh@gmail.com"
// console.log(JsUser["email"]);//change vaule inside of the object

// Object.freeze(JsUser);//Will freeeze the user and no changes will occur in the object.
JsUser,email="mca@gmail.com"
// console.log(JsUser);

JsUser.greeting=function() {
    console.log("Hello User");
}
JsUser.greeting2=function(){
    console.log(`Hello User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
