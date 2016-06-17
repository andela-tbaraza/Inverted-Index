var index = require('./invertedIndex');
var Ind = new index();
var t = Ind.createIndex('../books.json');
console.log(Ind.getIndex());