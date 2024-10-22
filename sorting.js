// bubble sort 
let arr = [12, 43, 34, 64, 32]
// function Bubblesort(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],[arr[j]]]
//             }
//         }
//     }
//     return arr
// }
// console.log(Bubblesort(arr));

// selection sort

function Selectionsort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i
        for (let j = i + 1; j < arr.length; j++) {
            {
                if (arr[j] < arr[min_index]) {
                    min_index = j
                }
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}
console.log(Selectionsort(arr));
