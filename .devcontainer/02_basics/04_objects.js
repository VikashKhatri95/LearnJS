const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false;

console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vikash",
            lastname:"Khatri"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",5:"f"}

// const obj3=Object.assign({},obj1,obj2,obj4);
const obj3={...obj1,...obj2,...obj4}
console.log(obj3);