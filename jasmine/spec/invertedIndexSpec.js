var Index = require('../src/invertedIndex')
var index = new Index();

// index.readJSONFromFile('../books.json')
describe("Index", function(){
        describe("Read JSON", function(){
            it("should read the JSON file and assert its not empty", function(){
              index.readJSONFromFile(__dirname + '/../books.json')
               expect(index.books.length).toBeGreaterThan(0);
               console.log((index.books))
            });
        });
  });
 beforeEach(function() {
  index.books = [
                  {
                   toni: "Tonida"
                  }
  ]
 })
describe("populate Index", function() {
  it("should check that index is created once the JSON file has been read", function(){
    index.createIndex()
    expect(index.indexArray.length).not.toBe(0)
  })
  it("should check index maps the string keys to the correct objects in the JSON array.", function() {
    index.getIndex()
    expect(index.indexArray).toEqual(['toni : 0 : 0', 'tonida : 0 : 1' ])
  })
})

describe("Search index", function(){
  it("search a term and return the inverted index", function(){
    expect(index.searchIndex("Tonida")).toEqual(['tonida : 0 : 1'])
  })
})