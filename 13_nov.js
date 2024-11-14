let number = ['dev','drevgd']
let Str = number.toString();
console.log(Str);

let number2 = ['dev','drevgd']
let Str1 = number.join(",");
console.log(Str1);


// let num = 5;
// function Pyramid(num) {
//     for (let i = 1; i <= num; i++) {
//         let str = '';
        
//         // Add spaces before stars for alignment
//         for (let j = 1; j <= num - i; j++) {
//             str += ' ';
//         }
        
//         // Add stars
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             str += '*';
//         }
        
//         console.log(str);
//     }
// }

// Pyramid(num);


// let num = 5
// for(let i=5;i>0;i--){
//     let str = '';
//     for(let j=0;j< i;j++){
//         str+='*'
//     }
//     console.log(str)
// }

let num = 5;
for (let i = num; i > 0; i--) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += '*';
    }
    console.log(str);
}
