var index = new Index();

beforeEach(function(done) {
  index.createIndex('books.json');
  done();
});

describe("Index", function() {
    it("should read the JSON file and assert it's not empty", function() {
        // index.createIndex('../jasmine/books.json');
        expect(index.books.length).toBeGreaterThan(0);

    });

});



describe("populate Index", function() {
    it("should check that index is created once the JSON file has been read", function() {
        expect(index.indexArray.length).not.toBe(0);

    });

    it("should check index maps the string keys to the correct objects in the JSON array.", function() {
        index.getIndex()
        expect(index.indexArray[0]).toEqual('title : 0 : 0');
        expect(index.indexArray[10]).toEqual('rabbit : 0 : 10');

    
    });


});

describe("Search index", function() {
    it("search a term and return -1 if the term is not present", function() {
        expect(index.searchIndex("Tonida")).toEqual(-1);

    });


    it("search a term and return the inverted index", function() {
        expect(index.searchIndex("Alice")).toEqual([ 'alice : 0 : 1', 'alice : 0 : 5' ])
    
    });


    it("search a term and return all the instances of that word in the index", function() {
        expect(index.searchIndex("and")).toEqual([ 'wonderland : 0 : 3', 'and : 0 : 12', 'and : 1 : 20' ]);
    
    })


});
