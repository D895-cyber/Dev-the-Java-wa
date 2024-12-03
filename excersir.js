//If else 
// //q1
// function Prime_Number(num) {
    
// }
Num = [90,87,56,34,22,11]
function CalculateNumber(Num) {
    
}
function calculatePercentageAndLowest(marks) {
    if (marks.length === 0) {
        console.log("No marks provided.");
        return;
    }

    // Calculate total marks 
    let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    
    // Calculate percentage
    let percentage = (totalMarks / (marks.length * 100)) * 100;

    // Find lowest mark
    let lowestMark = Math.min(...marks);

    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Lowest Mark: ${lowestMark}`);
}

// Example usage:
let marks = [85, 92, 78, 64, 89, 73];
calculatePercentageAndLowest(marks);



let arr1 =[89,32,54,23,52]

let sum = arr1.reduce((a,b)=>a*b,1) 
console.log(sum);x  