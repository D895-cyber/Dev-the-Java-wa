// class Library {
//     constructor(dev){
//         this.dev = dev;
//         this.books = [];
//         this.location = location
//         this.owner = owner;
//         this.listofuser = [];
//     }
// }

//prime Number 

num = 8;
function isPrime(num) {
    for(let i=0;i<num;i++){
        if(num%i==0){
            return(`is not prime`);
            break;
        }
        else{
            return(`is prime`);
            break;
        }
    }
    
}
console.log(isPrime(num));




