let ages=[10,15,19,20,9,23,43,9];
console.log(ages);

for (const iterator of ages) {
    if (iterator<18) continue
    console.log(iterator);
}