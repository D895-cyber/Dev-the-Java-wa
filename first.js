// // let num = 5;
// // function Cube_Finder(num)
// // {
// //     let cube =1;
// //     while(num>0){
// //          cube =num*num*num
// //          console.log(`Cube of ${num} is: ${cube}`); 
// //         num--;
// //     }
    
// // }

// // Cube_Finder(num);

// // for(let i=1;i<=4;i++){
// //     console.log(" ");
// //     for(let j=1;j<=i;j++){
// //         console.log(i);
// //     }

// // }

// // let num = 47;
// // for(let i=2;i<num;i++){
// //     if(num%i===0){
// //         console.log("Not Prime");
// //         break;
// //     }
// //     else{
// //         console.log("Prime");
// //         break;
// //     }
// // }

// // for(let i=0;i<=10;i++)
// // {
// //     console.log("this is outer loop",i);
// //     for(let j=0;j<=3;j++){
// //         console.log("this is inner loop",j);
// //     }
// // }
// // let pattern=''

// // for(let i=1;i<=4;i++){
// //     for(let j=1;j<=4;j++){
// //         pattern+=" *"
// //     }
// //     pattern+="\n"

// // }
// // console.log(pattern);  // Output: * * * *



// // let patern=""
// // for(let i= 1;i<=4;i++){
// //     for(let j=1; j<=4;j++){
// //         patern+=`${i}`
        
// //     }
// //     patern+="\n"
// // }
// // console.log(patern)

// // let pattern=""
// // for(let i=5;i>=1;i--){
// //     for(let j=1;j<=i;j++){
// //         pattern+=`${i}`
// //     }
// //     pattern+="\n"
// // }
// // console.log(pattern)

// function pyramid1(){
//     let n=5;
//     let pattern=''
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n-i;j++){
//             pattern+=" "
//         }
//         for(let k=0;k<2*i-1;k++){
//             pattern+='*'
//         }
//         pattern+="\n"
//     }
//     console.log(pattern)
// } 
// pyramid1()
// // function pyramid2(){
// //     let n=3;
// //     let pattern=''
// //     for(let i=1;i<=n;i++){
// //         for(let j=1;j<=n-i;j++){
// //             pattern+=" "
// //         }
// //         for(let k=0;k<2*i-1;k++){
// //             pattern+='*'
// //         }
// //         pattern+="\n"
// //     }
// //     console.log(pattern)
// // } 
// // pyramid2()




// // function pyramid(){
// //     let n=5;
// //     let pattern=''
// //     for(let i=n;i>=1;i--){
// //         for(let j=1;j<=n-i;j++){
// //             pattern+=" "
// //         }
// //         for(let k=0;k<2*i-1;k++){
// //             pattern+='*'
// //         }
// //         pattern+="\n"
// //     }
// //     console.log(pattern)
// // } 
// // pyramid()

let n=8;
    let pattern=''
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i;j++){
            pattern+=" "
        }
        for(let k=0;k<2*i-1;k++){
            pattern+='*'
        }
        pattern+="\n"
    }
    // console.log(pattern)
for(let i=n;i>=1;i--){
        for(let j=1;j<=n-i;j++){
            pattern+=" "
        }
        for(let k=0;k<2*i-1;k++){
            pattern+='*'
        }
        pattern+="\n"
    }
    console.log(pattern)


for (let i = 1; i <= 3; i++) {
    for (let j = 0; j <= 15; j++) {
        if (j >= 4 - i && j <= 4 + i || j >= 12 - i && j <= 12 + i) {
            process.stdout.write("*");  // Print "*" without a newlineC
        } else {
            process.stdout.write(" ");  // Print space without a newline
        }
    }
    console.log("");
}
for(let i=n;i>=1;i--){
        for(let j=1;j<=n-i;j++){
            pattern+=" "
        }
        for(let k=0;k<2*i-1;k++){
            pattern+='*'
        }
        pattern+="\n"
    }
    console.log(pattern)

