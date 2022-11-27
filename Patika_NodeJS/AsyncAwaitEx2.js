books = [
    { bookName: "Kitap1", AuthorName: "Yazar1" },
    { bookName: "Kitap2", AuthorName: "Yazar2" },
    { bookName: "Kitap3", AuthorName: "Yazar3" }
]

bookList = () => {
    books.map((param) => {
        console.log("Kitap Adımız  :" + param.bookName + "   Yazar Adımız  :" + param.AuthorName);
    })
}

bookAdd = (param) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(param)
        resolve(books)
        //reject("Calismadi, Hata!")
    })
    return promise1;
}

// bookAdd({ bookName: "Kitap5", AuthorName: "Yazar5" })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err);
//     })

async function AsyncFunc() {
    try {
        const result = await bookAdd({ bookName: "Kitap15", AuthorName: "Yazar15" })
        console.log(result);
        await bookList()

    } catch (error) {
        console.log(error);
    }
}


AsyncFunc()

