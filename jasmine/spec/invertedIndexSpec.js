var index = new Index();

beforeEach(function(done) {
  index.createIndex('books.json').then(function () { 
    done();
  })
  
});

describe("Index", function() {
    it("should read the JSON file and assert it's not empty", function() {
        // index.createIndex('../jasmine/books.json');
        console.log("hurrray", index)
        console.log("docs", index.books)
        expect(index.books.length).toBeGreaterThan(0);

    });

});



describe("populate Index", function() {
    // it('Does something', function() {
    //     console.log('SOMETHING HAPPENING');
    //     expect(2).toBe(2);
    // });
    it("should check that index is created once the JSON file has been read", function() {
        console.log(index.indexObject)
        expect(index.indexObject.length).not.toBe(0);

    });

    it("should check index maps the string keys to the correct objects in the JSON array.", function() {
        index.getIndex()
        expect(index.indexObject["powerful"]).toEqual([ 1 ]);
        expect(index.indexObject["falls"]).toEqual([ 0 ]);    
    });


});

describe("Search index", function() {
    it("search a term and return -1 if the term is not present", function() {
        expect(index.searchIndex("Tonida")).toEqual(-1);

    });


    it("search a term and return the inverted index", function() {
        expect(index.searchIndex("Alice")).toEqual([ 0, 0 ])
    
    });


    it("search a term and return all the instances of that word in the index", function() {
        expect(index.searchIndex("and")).toEqual([ 0, 1 ]);
    
    })


});
