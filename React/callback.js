// setTimeout(() => {
// console.log("Merhaba");    
// }, 3000);

// setInterval(() => {
//     console.log("Merhaba");
// }, 1000);

// const sayHi = () => {console.log("Merhaba");}
// sayHi();

import  fetch  from "node-fetch";


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then( users => {console.log("Users Yüklendi", users)})

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(data => data.json())
// .then(posts => console.log("Posts yüklendi", posts))

// Sırasıyla fetch yapmak için

async function getData() {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()

    console.log("users: ", users);
    console.log("posts: ", posts);
}

// getData();

import axios from "axios";

async function getData2() {

    const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(users);
}

getData2();