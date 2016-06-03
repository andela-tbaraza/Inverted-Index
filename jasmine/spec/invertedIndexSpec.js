describe("Read book data", function(){
  var invertedIndex = new Index();

  // Before each test can run do this.
  beforeEach(function(done) {
    invertedIndex.createIndex('./books.json').done(function(data) {
      invertedIndex.results = data;
      // invertedIndex.getIndex(data);
      done();
    });
  });

  describe('Read book data', function() {
    // Check whether the JSON data is an array containing objects
    it('Loads JSON data successfully', function() {
      expect(invertedIndex.results).not.toBeUndefined();
      // expect(invertedIndex.results.length).not.toEqual(0);
      // expect(invertedIndex.results.length).toBe(2);
      // expect(Array.isArray(invertedIndex.results)).toBe(true);
    });
    // The array should contain objects.
    // it('Contents of the array are objects', function() {
    //   expect(invertedIndex.results[0] instanceof Object).toBe(true);
    //   expect(invertedIndex.results[1] instanceof Object).toBe(true);
    // });
  });

  // it("check JSON file is present", function() {
  //   fetch("../books.json")
  //   .then(function(response){
  //       jsonFile = response.json();
  //       return jsonFile;
  //     })
  //  //var f = require("../books.json");
  //       expect(jsonFile).not.toBe(null);
  // });
  // it("checks if the file is empty", function() {
  //   fetch("../books.json")
  //   .then(function(reponse){
  //     return response.json();
  //     // return jsonFile.toString();
  //   })
  //   .then(function(myblob) {
  //     var objectURL = URL.createObjectURL(myBlob);
  //   })
  //   expect(jsonFile.length).not.toBe(0);
  // })
});

// describe("populate index", function() {
//   it("check if the index is populated", function() {
//     expect(getIndex).not.toBe(null);
//   });
// });
// describe('Tests', function() {
//   it('tests true', function() {
//     expect(true).toBe('true');
//   });
// });
