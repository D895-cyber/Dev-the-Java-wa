let num = 9
function GetOutput(num) {
    if(num<2){
        return "Prime Number"
    }
    for(let i=0;i<=num;i++){
        if(num%i==0){
            return "Not Prime Number"
        }
    }
    return "Prime Number"
}
console.log("Input Number: ", num)
console.log("Output: ", GetOutput(num)) 
