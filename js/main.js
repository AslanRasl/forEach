var arr = [37, 19, 56, 2, 84, 11, 68, 31, 75, 93, 8, 42, 64, 17, 49, 23, 70, 95, 14, 58]

console.log('20-dan 50-gacha');
arr.forEach((item)=>{
    if(item > 20 && item < 50){
        
        console.log(item);
    }
})
console.log(' ');

console.log('50-dan katta va toq');

arr.forEach((item2)=>{
    if(item2 > 50 && item2 % 2 == 0){
        
        console.log(item2);
    }
})

// console.log('50-dan katta va toq index');
// arr.forEach((item3,index,index2)=>{
//     if(index > 50 && index % 2 == 0){
        
//         console.log(index);
       
//     }
// })