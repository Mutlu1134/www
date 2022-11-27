// Verilen 2 sayı arasındaki asal sayıları bulma
// Find prime numbers between given 2 number
let number1;
let number20;
let primeNumbers = [];
const findPrimeNumbers = (number1, number2) => {
    skipThisNumber:
    for (let index = number1; index < number2; index++) {
        for (let index2 = 2; index2 < index; index2++) {
            if (index % index2 == 0) {
                continue skipThisNumber
            }
        }
        if (!(primeNumbers.includes(index))) {
            primeNumbers.push(index)
        }
    }
}

findPrimeNumbers(70, 100);
console.log(primeNumbers);

export default findPrimeNumbers// export ediyor bu fonksiyonu