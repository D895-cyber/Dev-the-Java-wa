// let ar1 = [9,8,7,6,5]
// let ar5= [1,8,7,6,10]
// let intersection = ar1.filter((value)=>ar5.includes(value));
// console.log(intersection);

// let arr2 = [1,2,3]
// let arr6 = [3,4,5]
// let newUniqueEleArr = [...new Set([...arr2,...arr6])]
// console.log(newUniqueEleArr[0]);

// let arr = [1,2,3,4,5,6,7]
// function SubArr(arr,size) {
//     let chunks =[];
//     for (let i =0;i < arr.length;i+= size) {
       
//         chunks.push(arr.slice(i,i+size));
        
//     }
//     return chunks;
// }
// let res = SubArr([1,2,3,4,5,[1,[6,7]],8,9,10],1);
// console.log(res.flat(3));
let arr = [1,2,3,4,5,6,7,8,9,10]



let newarr = arr.sort((a,b)=>b-a)
console.log(newarr);
let Sum = arr.filter((value)=>value>4).map((value)=> value *3)
console.log(Sum);