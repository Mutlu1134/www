// var slugify = require('slugify') // Bu tanımlama ESC6 dan önce vardı direkt importta edebiliriz. Şöyleki;
// import slugify from "slugify"
// const title= slugify('some string ali veli') // some-string
// console.log(title)
// if you prefer something other than '-' as separator
// slugify('some string', '_')  // some_string

import {topla, hello, multiply} from "./my_module.js"
// import hello from "./my_module.js"
console.log(topla(2,4));
console.log(multiply(4,4));
hello('Mutlu');