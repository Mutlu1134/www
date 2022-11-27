// Girilen sayı çift mi diye kontrol eden bir fonk olsun.
// çift ise true tek ise false döndürsün 
// 2. parametre olarak bir callback fonk alsın ve sonucu 
// callback fonksiyonuna göndersin. fonksyion sonuç true 
// ise girilen sayının çift false ise tek olduğunu konsole yazsın

// const oddEvenControl = (params, controlFunc) => {(params%2==0)? controlFunc(true) : controlFunc(false)  }
// const controlFunction = (params) => {params==true? console.log("Entered number is Even"): console.log("Entered Number is Odd");}
// oddEvenControl(0, controlFunction);

//2. İçine girilen sayının faktöriyelini hesaplayan recursive fonk yazın.
// fonk içinde özel metot veya döngü kullanmayın.

const calculateFactorial = (params) => {
  
    if (params == 0) { 
    return 1
    } else {    
    return params*calculateFactorial(params-1);
   
    }    
  
}

console.log(calculateFactorial(5)); 
