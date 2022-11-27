let meyveler= ["Elma", "Armut"]



try {
    meyveler.forEach(element => { console.log(element);
        
    });
} catch (error) {
    console.log("forEach'te sorun var", error);
    throw "Selam";
}
