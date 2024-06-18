//aaray
const myArr=[0,2,4,5]
// console.log(myArr[1]);
/*
Note-arrays can can more then one type of elemets
Javascript arrays-copy operations create shallow copies rather than deep copies.
shallow copies reffeence point
*/
const myArr2=new Array(1,2,3,4,5);
// console.log(myArr2[0]);

//Array Methods


// myArr.push(6);//Add a value in the array
// console.log(myArr);

// myArr.pop()//Delete last item from the array
// console.log(myArr);

// myArr.unshift(9)//Add item at the begining of the array and shift all the elements to right
// console.log(myArr);

// myArr.shift(9)//Add item at the begining of the array and shift all the elements to right
// console.log(myArr);

//returns index of the element
// console.log(myArr.indexOf(9));//-1 since there is no 9 in the array

//incudes check whether an element is pressent on the array or not.
// console.log(myArr.includes(9));//false Since there is no 9 in the array

const newArr=myArr.join();//join and convert the dta into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

const nmyarr=myArr.slice(0,2);//doesnot not affect original array.
//0 to 1 position is added to new array
console.log(myArr);
console.log(nmyarr);

const nymyarr=myArr.splice(0,2);//Affects the original array to
//0 to 2 is added to the new array
console.log(myArr);
console.log(nymyarr);