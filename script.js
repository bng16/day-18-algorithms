let arr=[4,73,4,6,23,8544,3,5,34,32,4556,4,45,34,6,345,32,6,34,323,34,5534,45,345,6745,67];



// const bubbleSort=(arr)=>{
//     for (let i=0; i<arr.length-1;i++){
//         for (let j=0; j<arr.length-i-1;j++){
//             if (arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
// }
// bubbleSort(arr);
// console.log(arr);





const selectionSort=(arr)=>{
    for(var i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[j]<arr[i]){
                arr[i]+=arr[j];
                arr[j]=arr[i]-arr[j];
                arr[i]=arr[i]-arr[j];
            }
        }
    }
}

console.log(arr)
selectionSort(arr)
console.log(arr)