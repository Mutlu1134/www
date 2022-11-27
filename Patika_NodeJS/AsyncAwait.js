const setData = (params) => {
    console.log("Veriler Set Ediliyor.");
    return new Promise((resolve, reject) => {
        if (params) {
            resolve("Veriler Set Edildi.")
        } else {
            reject("Veriler Set EdileMEdi.")
        }
    })
       
}

const getData = (params) => {
    console.log("Veriler Get Ediliyor.");
    return new Promise((resolve, reject) => {
        if (params) {
            resolve("Veriler Get Edildi.")
        } else {
            reject("Veriler Get EdileMEdi.")
        }
    })
}

async function runCode() {
    try {
       const SettedData = await setData(true)
       console.log(SettedData);
        const GettedData = await getData(true)    
        console.log(GettedData);
    } catch (error) {
        console.log(error);
    }
    
}

runCode()