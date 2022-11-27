try {
    console.log("Basladi");
    throw new Error("Hataaaa")
    
} catch (error) {
    console.log(error);
}
console.log("Devam");