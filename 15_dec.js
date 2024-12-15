// function Counting() {
//     let b = `dev`;   // Assigns the string "dev" to variable b
//     console.log(b);  // Logs the value of b to the console
// }
// let a = 9;
// console.log(a);
// console.log(b);
// Counting();

// let arr = [10,20,30,40,50];
// for(let i=0;i<=4;i++){
//     let sum = 0;
//     console.log(arr[i]);
// }
// let arr1 = arr.reduce((acc,value,index,arr)=>{
//      return acc+=value;

// })
// console.log(arr1);  // Output: 150

// let arr3 = [3,4,5,5,6,6,6,6,67,78,23] 
// let newarr =arr3.slice(2,5);
// console.log(newarr);
// let arr13 = [10,20,30,40,50]
// let newarr13 = arr13.slice(1,4);
// console.log(newarr13);  // Output: [30, 40, 50]
// let arr = [1,2,3,4,5,6,7,8]
// let newarr = arr.splice(2);
// // console.log('return array ',newarr,'original array',arr);
// console.log((arr));
// console.log(newarr);
// let arr43 = [1,2,3,4,5,6]
// let newarr4 = arr43.indexOf(5);
// console.log(newarr4);  
// //index of find the value index 
// let arr = [23,43,33,43,34,23]
// arr.forEach((val,index)=>{
//         console.log(val,index);
//     })

// let arr = [23,43,66,42,11,55,33,56,333,332]
// let newarr = arr.sort((a,b)=>a-b)
// console.log(newarr);  //sort() method sorts the array in ascending order
// let evenfil = arr.filter((val)=>val>30).map((val)=>val*2).reduce((acc,val)=>{
//     return acc+=val
// })

//filter() method returns a new array with all elements that pass
// console.log(evenfil);

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);

let findarr = [10,20,30,40,50,77]
console.log(findarr.find((val,index)=>val<=77));