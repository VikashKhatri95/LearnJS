const score=100
new_score=new Number(400)//Explicitly defining it as Number
// console.log(score);
// console.log(new_score);//will give explicit output as Number

// console.log(new_score.toString().length)//3
// console.log(new_score.toFixed(2));//400.00 for precision of 2 decimal

const othernumber=112.144
// console.log(othernumber.toPrecision(2));//1.1e+2 and type=string trying to display only 2 values but since before decimal there is more value 
//therefore 1.1 are 2 values and rest as exponential
// console.log(typeof othernumber);// type again to number
// console.log(othernumber.toPrecision(5));//112.14 will display 5 values nad rounf of other values after decimal
const hundreds=100000
// console.log(hundreds.toLocaleString());//100,000
// console.log(hundreds.toLocaleString('en-IN'));//In Indian standard

// console.log(Number.MAX_SAFE_INTEGER)
// 9007199254740991

// ++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.round(5.5));//Round off
// console.log(Math.abs(-12));//Negative to positive
// console.log(Math.ceil(4.1));//Ceil value
// console.log(Math.floor(3.9));//Floor value
// console.log(Math.min(1,-9,0,14,2));//Give minimum value
// console.log(Math.max(12,-9,0,14,2));//Give maximum value

/*
Random Function
Note- values are always between 0 and 1 between decimal
*/
// console.log(Math.random());
// console.log(Math.random()*10);//now value will be between 00 and 10
// console.log((Math.random()*10)+1);//value will be between 1 to 10

const min=10
const max=20
console.log(Math.floor((Math.random())*(max-min))+min);//value between 10 to 20