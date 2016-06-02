describe("Read book data", function(){
  var jsonFile;
  it("check JSON file is present", function() {
    fetch("../books.json")
    .then(function(response){
        jsonFile = response.json();
        return jsonFile;
      })
   //var f = require("../books.json");
        expect(jsonFile).not.toBe(null);
  });
  it("checks if the file is empty", function() {
    fetch("../books.json")
    .then(function(reponse){
      return response.json();
      // return jsonFile.toString();
    })
    .then(function(myblob) {
      var objectURL = URL.createObjectURL(myBlob);
    })
    expect(jsonFile.length).not.toBe(0);
  })
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
