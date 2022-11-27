// function topcarp(param1,param2) {
//     return (param1+param2)*2
// }
// console.log(topcarp(2,3));


// let topla = (params1,params2) => { return console.log(params1 + params2);}
// topla(2,5)


// Callback Function

const toplayaz = (params1, params2, func1) => {
    let sum = params1+params2;
    func1(sum)
}

const cbFunction = (params) => {console.log(params);}

toplayaz(8,9, cbFunction)




