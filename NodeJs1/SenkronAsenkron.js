const test = (Callback) => {
 setTimeout(() => {
    console.log("Timeout bitti");
    Callback()
 }, 2000);   
}

test( Callback = (params) => {console.log("Bitti");})
