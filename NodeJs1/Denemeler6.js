// let object = {
//     "a":1,
//     "b":2,
//     "c":3
// }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key);
//         console.log(element);
//     }
//     // console.log(key, object[key]);
// }



// let timeout = setTimeout(() => {
//     functionName();
// }, 1000);
// const functionName = () => {
//     console.log("test");
// }
// clearTimeout(timeout);
let counter = 0;

let timeout= setInterval(() => {
    functionName();
     counter ++
     console.log(counter);
    
     counter == 2 ? clearInterval(timeout) : console.log();
    // if (counter==2) {
    //     console.log("time outttttttttttttt");
    //     clearInterval(timeout)    
    // }
}, 1000);

const functionName = () => {
        console.log("test");
}

