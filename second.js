let num=5;
let pattern =""
for(let i=num;i>=1;i--){
    pattern +=" ";
    for(let j=1;j<=i;j++){
        pattern+="* "
    }
    pattern+="\n"
}
console.log(pattern);

// Now We Gonna Print Pyramid 

// let num=5
// function Pyramid(num) {;
//     let pattern=''
//     for(let i=num;i>=1;i--){
//         for(let j=1;j<=num-i;j++){
//             pattern+=" "
        
//         for(let k=1;k<=2*i-1;k++){
//             pattern+="*"
//         }
//     }
//         pattern+="\n"
//     }
    
//     console.log(pattern)
// }
// console.log(Pyramid(num))  



// function Pyramid(num) {
//     let pattern = '';
//     for (let i = 1; i <= num; i++) {
//         for (let j = 1; j <= num - i; j++) {
//             pattern += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             pattern += "*";
//         }
//         pattern += "\n";
//     }
//     console.log(pattern);  // This will display the pyramid
// }

// Pyramid(num);  // Just call the function without logging it

// let num =5 
// let pattern=""
function Pyramid(num) {
    for(let i=1;i<=num;i++){
        for(let j=1;j<=num-i;j++){
            pattern+=" "
        }
            for(let k=1;k<=2*i-1;k++){
                pattern+="*"
            }
            pattern+="\n"
        
    }
    console.log(pattern)

}
Pyramid(num)  // This will display the pyramid