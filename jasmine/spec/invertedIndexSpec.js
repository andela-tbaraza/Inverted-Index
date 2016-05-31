var f = require("../books.json");
describe("Read book data", function(){
  it("check JSON file is not empty", function() {
   //var f = require("../books.json");
   expect(f).not.toBe(null);
  });
});
// describe('Tests', function() {
//   it('tests true', function() {
//     expect(true).toBe('true');
//   });
// });
