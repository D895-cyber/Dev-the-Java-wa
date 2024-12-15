// let fname = `pritam`
// function PrintName(name) {
//     console.log(arguments);
//     let lname = name;
//     console.log(fname,lname);
// }

// function PrintFullName() {
    
//     let fname = `Dev`
//     let lname = `Gulati`
    
//     function PrintName() {
//         return(`${fname},${lname}`);   
//     }
//     return PrintName();
//     // let dev = PrintName();
//     // console.log(dev);
// }
// console.log(PrintFullName());

function Callme() {
    let Counter =0;
    return function(){
    if(Counter<1){
        console.log("Welcome");
        Counter++
    }
    else{
        console.log("Welcome 2nd Time");
    }
}
}
const Myfun = Callme();
Myfun();
Myfun();

// making a new program to understand functions and Objects 
function AddTwoNumber(num1,num2) {
    if(num1&&num2!=0){
    let res = num1+num2;
    return res;
    }
    else{
        return "Invalid input";
    }
}
let result = AddTwoNumber(10,0);
console.log(result);

function Welcome() {
    let Count = 0;
    return function(){
        if(Count<1){
            console.log("Welcome");
            Count++;
        }
        else if(Count<2){
            console.log("Welcome 2nd Time");
            Count++;
        }
        else if(Count<3){
            console.log("Welcome 3rd Time");
            Count++;
        }
        else{
            console.log("You Sessiojn is Now Over Please Try Again Later");
        }

    }
}
const Myfun3 = Welcome();
Myfun3();
Myfun3();
Myfun3();
Myfun3();
Myfun3();
Myfun3();

