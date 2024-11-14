// // let str = 'hello,abhishek,😘ello,abhishek,world'
// // console.log(str.indexOf('😘', 4));
// // console.log(str.includes("llo"));

// function hello(x,y,z) {
//     console.log(x,y,z());
// }
// hello("hfjhjsdf","dev",()=>{console.log("this is call back function");});

// //add two Numbers

// function AddtwoNum(x,y) {
//     // console.log(x+y);
//     return x+y
// }
// let data = AddtwoNum(5,7);
// console.log(data);

// //fat arrow function 
// le// Define a function to add two numbers with input validation
// function addTwoNumbers(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('Both inputs must be numbers');
//     }
//     return x + y;
// }

// // Define a function to log a message with a callback
// function logMessage(x, y, callback) {
//     if (typeof callback !== 'function') {
//         throw new Error('Callback must be a function');
//     }
//     console.log(x, y);
//     callback();
// }

//fat arrow function
// let finArr = (a,b)=>{return(a+b)}
// console.log(finArr(12,13));

// function addthremul(x,y,z) {
//     console.log("printing",(x+y)*z);
//     return x+y;
// } 
// let result = addthremul(5,6,7)
// console.log(result); 
// console.log(addthremul(5,6,7));

// function printnameandarray(str){
//     console.log(str);
//     return str.length;
// }
// let a = printnameandarray("dev")
// console.log(a);

// function addwhole(num) {
//     let ans = 0
//     for(let i=0;i<=num.length;i++){
//          ans +=num
//          num--
//     }
//     return ans;
// }
// let b = addwhole(5);
// console.log(b);  // output 0
function factorial(num) {
    let ans = 1; 
    for (let i = 1; i <= num; i++) {
        ans *= i;
    }
    return ans;
}

let c = factorial(4);
console.log(c);  // Output: 120s
 function factorial(num) {
    let ans = 1;
    for (let i = num; i >= -num; i--) {
        if(i==0){
            continue; //This statement is use to skip 0 
        }
        ans*=i
    }
    return ans;
 }
