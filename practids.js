// console.log("Program started");
// setTimeout(()=>{
//     console.log("Timeout func");
// },1000)
// console.log("Program ended");

//callback function
function saymyName(cb){
    console.log(`hi sir nice to meet you`);
    cb();
}

function task(){
    console.log(`your task has been finished`);
}
saymyName(task);
