let date=new Date()
// console.log(date);//Fri Jun 14 2024 06:43:13 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString());//Fri Jun 14 2024
// console.log(date.toISOString());//2024-06-14T06:48:03.135Z
// console.log(date.toLocaleDateString());//6/14/2024
// console.log(date.toJSON());//2024-06-14T06:51:10.078Z

let createDate=new Date(2024,0,23)
// console.log(createDate);//Tue Jan 23 2024 00:00:00 GMT+0000
// let createDate1=new Date(2023,0,23,5,3)
// console.log(createDate1);//Mon Jan 23 2023 05:03:00 GMT+0000
// console.log(createDate.getTime());//date in milisec 1718349466921
// console.log(Date.now());//1718348643309 returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
// console.log(Math.floor(Date.now()/1000)) //time in secs
let createtimestamp=Date.now()
// console.log(createtimestamp);
let newdate=new Date()
console.log(newdate);//Fri Jun 14 2024 07:25:50 GMT+0000 

newdate.toLocaleDateString('default',{
    weekday:"long"
})
console.log(newdate);