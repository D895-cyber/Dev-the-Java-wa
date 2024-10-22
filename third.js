// let a=[5,6,7,8,9,10,11];
// // console.log(a);
// // console.log(a[0]);
// let b=0
// for(let i=0;i<a.length;i++){
//         b+=a[i]       
// }
// console.log(b);
// // console.log(a.length); 
// let a=10;
// let b=20;
// let c=0;
// c=a
// a=b
// b=c
// console.log(a,b);

// let d=5;
// let e=10;
// let f=0
// f=d
// d=e
// e=f
// console.log(d,e);


// let a=10;
// let b=15
// let c=20
// let d=0
// let e=0
// let j=0
// d=a
// console.log(d);
// a=b
// // console.log(a);
// b=d
// console.log(b);
// e=c
// a=e
// console.log(a);
// let a=10;
// let b=20;
// let c=90;

// [a,b,c] = [c,a,b]
// console.log({a,b,c});

// let arr =[10,30,40,50,45]
// function NumberChecker(arr) {
//     let max=-1;
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max;
// }

// console.log(NumberChecker(arr));  

// let xyz = function(){
//     console.log("Hello");
// }
// //anominous function
 
// let abc = () => {
//     console.log("Hello from arrow");
// }
// //arrow function or fat arrow function

// let arr1 =[10,30,40,50,45]
// function NumberMin(arr1) {
//     let max= Number.MAX_VALUE;
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]<max){
//             max=arr[i]
//         }
//     }
//     return max;
// }

// console.log(NumberMin(arr1));  

// let arr = [1,2,3,4,5,6,7,8]
// // let arr2 = []
// // let arr3 = []
// function OddEvenFinder(arr) {
//     let even =[];
//     let odd =[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){ 
//             even.push(arr[i])
//             // console.log(arr[i]+" is even");
//         }
//         else{
//             odd.push(arr[i])
//             // console.log(arr[i]+" is odd");
//         }
//     }
//     // return even,arr3;
//     console.log(even,odd);
// }
// // console.log(OddEvenFinder(arr));  
// OddEvenFinder(arr) 

// console.log(arr2,"for even");
// console.log(arr3,"for odd");  //this will print all the elements of the array as

// function ReverseFinder(arr) {
//     let rev =[];
//     for(let i=0;i<arr.length;i++){
//         rev.push(arr[arr.length-i-1])
//     }
//     return rev;
// }
// console.log(ReverseFinder(arr));  //this will print the array in reverse order

// function reverse(arr) {
//     let rev =[];
//     for(let i=arr.length;i>=0;i--){
//         rev.push(arr[i]);
//     }
//     return(rev);
// }
// reverse(arr);  //this will print the array in reverse order
// console.log(reverse);

// function TargetSum(arr,Target) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             if(arr[i]+arr[j]==Target){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(TargetSum(arr,10));  //this will print true if the sum of any two elements in
arr = [13,43,53,2,1,4,5,6]
function sumarray(arr) {
    for(let i=0;i<=arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];  
                 arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(sumarray(arr));  //this will print the array in ascending order

let num = 5

for(let i=1;i<=num;i++){
    let pattern=""
    for(let j=1;j<=num;j++){
        if(i==1||i==num||j==1||j==num){
            pattern+="*"
        }
        else {
            pattern+=" "
        }
    }
    console.log(pattern)
}

