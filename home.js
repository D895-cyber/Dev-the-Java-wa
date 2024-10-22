let num = 4
function GetOutput(num) {
    if(num<2){
        return "Prime Number"
    }
    if(num%2==0){
        return "Not Prime Number"
    }
    else{
        return"Prime"
    }
}
console.log(GetOutput(num))