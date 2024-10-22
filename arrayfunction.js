//array function 
// let arr = [3,4,5,5,6,6,6,6,67,78,23]
// let newarr =arr.slice(2,3);
// console.log(newarr);

// let arr = [1,2,3,4,5,6,7,8]
// let newarr = arr.splice(2,1,"hello");
// console.log('return array ',newarr,'original array',arr);

// let arr = [1,2,3,4]
// let newarr = arr.splice(1,2,"x","y");
// console.log('return array ',newarr,'original array',arr);  //splice() method returns

// 

// let arr = [1,2,3,4,5,6]
// let newarr = arr.includes(10);
// console.log(newarr);  //includes() method returns boolean value

// arr.indexOf(3);
// console.log(arr.indexOf(2));  //indexOf() method returns index of the element if it i

// for(let i of arr){
//     console.log(i);
// }

// arr.forEach((val,index)=>{
//     console.log(val,index);
// })


// let arr1= [1,2,3,4,5,6,7]
// let arrnew = arr1.reduce((acc,val,index,arr1)=>{
//     return acc+=val
// })
// console.log(arrnew);

// let arr = [23,43,66,42,11,55,33,56,333,332]
// // let newarr = arr.sort((a,b)=>a-b)
// // console.log(newarr);  //sort() method sorts the array in ascending order
// let evenfil = arr.filter((val)=>val>30).map((val)=>val*2).reduce((acc,val)=>{
//     return acc+=val
// })


//   //filter() method returns a new array with all elements that pass
// console.log(evenfil);  //filter() method returns a new array with all elements that pass


let findarr = [12,43,65,34,55,77,30,12]
console.log(findarr.find((val,index)=>val===77));