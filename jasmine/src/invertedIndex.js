function Index() {
  this.createIndex = function(filepath) {
    var f = require(filepath);
    var r;
    for (var i = 0; i < f.length; i++) {
      console.log(JSON.stringify(f[i]).split(""))
      // for (var key in f[i]) {
      //   r += f[i][key]
      // }
      }
    return r;
    }
  };


var obj = new Index()
console.log(obj.createIndex("../books.json"));


//console.log(f[0]["title"]);
// for (var i in f) {
//   console.log(f[i])
// }
// for (var l of f[i]) {
//   console.log(l)
// }