//Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım.
//Snrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

posts = [{ post: "Post1", author: "Yazar1" },
{ post: "Post2", author: "Yazar2" },
{ post: "Post3", author: "Yazar3" }]

const listPost = (params) => {
    return new Promise((resolve, reject) => {
        if (params) {
            resolve(posts)
        } else {
            reject("Error Posts didnt list")
        }
    })
}

const addPost = (params) => {
    return new Promise((resolve, reject) => {
        if (params) {
            posts.push(params)
            resolve(posts)
        } else {
            reject("Error Post didnt add")
        }
    })
}

async function run() {
    try {
        const res = await listPost(true)
        console.log(res);
        await addPost({ post: "Post4", author: "Yazar4" })
        const res2 = await listPost(true)
        console.log(res2);

    } catch (error) {
        console.log(error);
    }

}

run()