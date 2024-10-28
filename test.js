//javascript -> chapter of english data types let -> int = 3,4,5 long integer string 
// let a = "A"
// console.log(a);
//if else 

//odd even 

//
// num = 2;
// function nandani(num) {
//     if(num%2==0){
//         // console.log(num + " is even");
//         return "even";
//     }
//     else{
//         // console.log(num + " is odd");
//         return "odd";
//     }

// }
// console.log(nandani(num));

// // Find_Odd_Even(num);

// let num = 5;
// function Desinger_Dev(num) {
//     for(let i=1;i<=num;i++){
//         let pattern=""
//         for(let j=1;j<=num;j++){
//             if(j==i||j==num-i+1){
//                 pattern+="*"
//             }
//             else{
//                 pattern+=" "
//             }
//         }
//         console.log(pattern);
//     }

// }

// Desinger_Dev(num)

// let num = 5

    // function EqualTriangle(num) {
    //     for(let i=1;i<=num;i++){
    //         let pattern=""
    //         for(let j=i;j<=num;j++){
    //             pattern+=" "
    //         }
    //         for(let j=1;j<=(2*i-1);j++){
    //             if(j==1||j==(2*i-1)||i==num){
    //                 pattern+="*"
    //             }
    //             else{
    //                 pattern+="*"
    //             }
    //         }
    //         console.log(pattern);
    //     }
    // }
    // EqualTriangle(num)  // Output:

// function Mansi(num){
//     for(let i=1;i<=num;i++){
//         let row=""
//         for(let j=1;j<=num;j++){
//             if(j==i||j==num-i+1){
//                 row+="*"
//             }
//             else{
//                 row+=" "
//             }
//         }
//         console.log(row);
//     }

// }
// Mansi(num)  // Output:


// let num=5;
// function pattern(num){
//     for(let i=1;i<=num;i++){
//         let row=""
//         for(let j=1;j<=num;j++){
//             if(j==i||j==num-i+1){
//                 row+="*"
//             }
//             else{
//                 row+=" "
//             }
//         }
//         console.log(row);
//     }
// }
// pattern(num)

// let num =5
// function nandu(num) {
//     for(let i=1;i<=num;i++){
//         let row=""
//         for(let j=1;j<=num;j++){
//             if(j==i||j==num-i+1){
//                 row+="*"
//             }
//             // else{
//             //     row+=" "
//             // }
//         }
//         console.log(row);
//     }

// }
// nandu(num)  // Output:

// let num =5;
// function NanduBhai(num){
//     for(let i=1;i<=num;i++){
//         let row=""//empty string
//         for(let j=1;j<=num;j++){
//             row+=" "
//         }
//         for(let k=1;k<=2*i-1;k++){
//             if(k==1||k==2*i-1||i==num){
//                 row+="*"
//             }
//             else{
//                 row+=" "
//             }
//         }
//         console.log(row);
//     }


// }
// NanduBhai(num)  

function EqualTriangle(num) {
    for (let i = 1; i <= num; i++) {
        let pattern = ""
        for (let j = i; j <= num; j++) {
            pattern += " "
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            if (j == 1 || j == (2 * i - 1) || i == num) {
                pattern += "*"
            }
            else {
                pattern += " "
            }
        }
        console.log(pattern);
    }
}
EqualTriangle(num)// Output: _ _ _ _ _  // _ _