// Array Functions:
// push
// Map
// find
// filter
// some
// every
// includes
const users= [ {name : "Ali", age : 20}, {name : "Ali", age : 30},{ name :"Veli", age : 30}, {name : "Fatma", age:40}]

// // push
// users.push("Ayşe")
// users.push("Ahmet")
// console.log(users);

// Map
// users.map((item) =>{console.log(item)})

// Find
// const result = users.find( (item) => item.name=="Ali")
// console.log(result);

// Filter
// const filtered = users.filter( (item) => item.name==="Ali" && item.age>25)
// console.log(filtered);

// some : array içindeki herhangi bir eleman uyuyorsa true uymazsa false döner
// const some = users.some( (item) => item.age===20)
// console.log(some);

// every : arrayin tüm elemanları şarta uyarsa true uymazsa false

// include : array içinde girilen ifade var mı yokmu?
const fruits = ["apple", "watermelon", "orange"]
const isinclude = fruits.includes("apple")
console.log(isinclude);