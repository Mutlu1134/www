books = [
  {bookName: "Kitap1", AuthorName: "Yazar1"},
  {bookName: "Kitap2", AuthorName:"Yazar2"},
  {bookName: "Kitap3", AuthorName:"Yazar3"}
]

bookList = () => {
  books.map( (param)=> {
    console.log("Kitap Adımız  :" + param.bookName + "   Yazar Adımız  :" + param.AuthorName);
  })
}

bookAdd = (param,callback) => { // işte burada  bookList fonksiyonunu callback olarak alıyruz ve bu fonksiyondan hemen sonra çalıştırıyoruz.
  books.push(param);
  callback()
}

bookAdd({bookName: "Kitap4", AuthorName:"Yazar4"}, bookList) // İşte burada bookList fonksiyonunu Callback olarak gönderiyoruz.