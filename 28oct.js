// let num = 5
// function Square(num) {
//     for(let i=1;i<=num;i++){
//         let pattern=""
//         for(let j=1;j<=num;j++){
//             if(i==1||i==num||j==1||j==num){
//                 pattern+="*"
//             }
//             else{
//                 pattern+=" "
//             }
//         }
//         console.log(pattern)
//     }

// }
// Square(num)

//Q1 solved
// let arr = [[1, 2, 3, 4, 5],6];
// let arr1 = arr.splice(0, 1,3);
// arr3 = arr1.splice(3,2,10)
// arr.push(10);
// // console.log(arr); 
// //Q2 
// let sort_array = arr.sort((a,b)=>a-b)
// console.log(sort_array);  // [1, 2, 3, 4,]
// //Q3
// //How to find element in array 
// let arr2 = [1,2,3,4,5,6,7,8]
// let index = arr.indexOf(4)
// console.log(index); // 4
//Q4
// let array = [90, 43, 54, 66, 432, 23, 1]
// function Bubblesort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1   ]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }

//         }
        
//     }
//     return arr;
// }
// let sorted_array = Bubblesort(array)
// console.log(sorted_array);
//Q5
let arr = [1,2,43,5,6,67]
let su1m = arr.reduce((a,b)=>a+b,0)
let sum = arr.reduce((a,b)=>a+b,)
console.log(sum); 
console.log(su1m);
//Q6
let arr1 = [90,45,74,23,88,11,10,43]
console.log(arr1);
function Selection_Sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;  
            console.log(arr);    
              
        }
        return arr;
   
}

let sorted_array = Selection_Sort(arr1)
console.log(sorted_array);



