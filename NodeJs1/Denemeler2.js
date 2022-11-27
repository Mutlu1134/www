//for ve while kullanarak 7'ye ve 9'a tan bölünen ilk 5 sayıyı bulunuz.
// bulunan sayıları biz dizi içerisinde saklayıp işlemin sonunda diziyi console'a yazdır.

// if'li 
// let counter = 1;
// for (let index = 0; index < 1000 ; index++) {
//     index++
//     if (index%7 == 0 && index%9==0) {
//         console.log(index);
//         if (counter == 5) {
//             break;
//         }     
//         counter++     
//     }    
// }


//while 'lı
let counter = 0; 
let array =[];  
for (let index = 1; index < 1000 ; index++) {
   while (index%7 == 0 && index%9 ==0 && counter <5) {
    array.push(index);
    index++
    counter++
   }
}

console.log(array);


    

