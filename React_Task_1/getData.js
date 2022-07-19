import axios from "axios";

 export async function getData( Number) {
     const {data: users} = await axios('https://jsonplaceholder.typicode.com/users/'+Number)
     const {data: posts} = await axios('https://jsonplaceholder.typicode.com/posts?userId='+Number)
     return {users,posts};
    // console.log({users,posts});
}

// getData(2);