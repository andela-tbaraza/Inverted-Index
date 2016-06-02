function Index() {
  // load books.json file
  this.createIndex = function(filepath) {
    var jsonFile = require(filepath);
        // console.log(jsonFile);

  this.getIndex = function() {

    // var arr = [];
    // jsonFile.forEach(function(objects) {
    //   (Object.keys(objects)).forEach(function(key) {
    //     console.log(objects[key].toString().split("-"))
    //     var str = objects[key].toString();
    //     // console.log(typeof(str))
    //     // arr.push(str);
    //     // console.log(arr)
    //   });
    //   });


    }
    this.searchIndex = function(terms){
    results = [];

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

  // searchIndex('lord')


    // }z
    // var r;
    // for (var i = 0; i < f.length; i++) {
    //   console.log(JSON.stringify(f[i]).split(" "))
    //   // for (var key in f[i]) {
    //   //   r += f[i][key]
    //   // }
    //   }

    }
  };


var obj = new Index()
obj.createIndex("../books.json");
obj.getIndex()
obj.searchIndex("and")


//console.log(f[0]["title"]);
// for (var i in f) {
//   console.log(f[i])
// }
// for (var l of f[i]) {
//   console.log(l)
// }