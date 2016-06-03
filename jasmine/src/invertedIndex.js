function Index() {
  "use strict";
  //load books.json file
  this.createIndex = function(filepath) {
    var jsonFile = require("../books.json")

  this.getIndex = function() {
     jsonFile.map((book, index1) => {
     var wordsArray = [];
    //console.log(book,index)
    var books = JSON.stringify(book).toLowerCase().split(/\W/g).filter(function (string){
    return string.length != 0;});
    //console.log(books)
    //console.log(books.length) //book1 = 18 book 2 =28
    books.map((words) => {
        var IndexObject = (words + ":" + " " + index1);
        wordsArray.push(IndexObject)

    })
console.log(wordsArray)
})

    }
    this.searchIndex = function(terms){
    var results = [];

  jsonFile.map((book, index) => {
      const wordToSearch = new RegExp(terms, 'gi');
      if (wordToSearch.test(book.title) || wordToSearch.test(book.text)) {
          results.push(index);
          //console.log(book);
      }
  });

  if(results.length > 0) {
      console.log(terms + " has been found in the following documents" + " " + results)
  } else{
      console.log("No match has been made")
  }
  };


    }
  };


var obj = new Index()
obj.createIndex("../books.json");
obj.getIndex()
obj.searchIndex("lord")


