const ShowOnConsole = () => {
    const promise1 = new Promise((resolve, reject) => {
     //resolve("Çözüldü.")
      reject("Çözülemedi")   
    })
return promise1;
}

    ShowOnConsole()
        .then((res)=>{
            console.log(res);
        })
        .catch ((err)=>{
            console.log(err);
        })
