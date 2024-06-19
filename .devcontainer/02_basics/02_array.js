const marvel_heros=["Thor","Iron","Spider"]
const dc_heroes=["Superman","Flash","Batman"]

// marvel_heros.push(dc_heroes)//it will push whole array in the marvel_heroes as a single entity
// console.log(marvel_heros);//"Thor","Iron","Spider",["Superman","Flash","Batman"]
// console.log(marvel_heros.length);//4

// const all_heroes=marvel_heros.concat(dc_heroes)
// console.log(all_heroes);//['Thor', 'Iron', 'Spider', 'Superman', 'Flash', 'Batman']

//spread operator
const all_heroes=[...marvel_heros, ...dc_heroes]
// console.log(all_heroes);

const anotherarray=[1,2,3,[4,5,6,],7,[6,7,[4,5]]]

const real_another_array=anotherarray.flat(Infinity) //returns a new array with all sub-array elements concatenated into it recursively upto
//the specified path inside flat we need to put the level of depth for simplicity we can put infinity.
// console.log(real_another_array);

// console.log(Array.isArray("Vikash"));//check if array or not?
// console.log(Array.from("Vikash"));//Make array if cannot make then return [].
// console.log(Array.from({name:"Vikash"}));//[]
let score1=100
let score2=200
let score3=300
//Convert multiple values into single array
// console.log(Array.of(score1,score2,score3));//(3) [100, 200, 300]


