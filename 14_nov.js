// let array = [1,2,3,4,5,6,7]
// // function print(n) {
    
// //     console.log(n+1);
// // }
// // array.forEach(print)

// let newarr = []
// array.forEach((num)=>{
//     newarr.push(num*2) 
// })
// console.log(newarr) // [2,2,2,2]
// console.log(array);

function Myfun() {
    function hello() {
        console.log("hello world");
    }
    return hello;
}
let data  = Myfun()
data() // hello world  // nested function

let arr = [2,3,4,5,6]
let newMaparr = arr.map((val,index,arr)=>val*3)
console.log(newMaparr);
//filter array
let newFilterarr = newMaparr.filter((val,index,arr)=>val>7)
console.log(newFilterarr);
//reduce array
let newReducearr = newFilterarr.reduce((acc,val)=>acc+val,0)
console.log(newReducearr); // 24
//sort array
let newSortarr = newFilterarr.sort((a,b)=>a-b)
console.log(newSortarr); // [9, 10]
//find array
let newFindarr = newFilterarr.find((val)=>val>10)
console.log(newFindarr); // 10
//every array
let newEveryarr = newFilterarr.every((val)=>val>7)
console.log(newEveryarr); // true   
//some
let newSomearr = newFilterarr.some((val)=>val>7)
console.log(newSomearr); // true
//fill
let newFillarr = newFilterarr.fill(-2)
console.log(newFillarr); // [0, 0, 10]
//splice
let newSplicearr = newFilterarr.splice(1,1)
console.log(newSplicearr);
//
let new_employee = ["Garav","Kunal","Saraubh","Abhishek","Avinash"]
let new_employee1 = new_employee.slice(0,3)
console.log(new_employee1); // 

let employee_open = new_employee.join("_")  