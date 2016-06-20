const index = new Index();

beforeEach(function(done) {
  index.createIndex('books.json').then(function() {
    done();
  });
});

describe('Index', function() {
  it('should read the JSON file and assert it is not empty', function() {
    expect(index.books.length).toBeGreaterThan(0);

  });
});

describe('populate Index', function() {

  it('should check that index is created once the JSON file has been read', function() {
    console.log(index.indexObject);
    expect(index.indexObject.length).not.toBe(0);
  });

  it('should check index maps the string keys to the correct objects in the JSON array.', function() {
    index.getIndex();
    expect(index.indexObject.powerful).toEqual([1]);
    expect(index.indexObject.falls).toEqual([0]);
  });
});

describe('Search index', function() {
  it('searches for terms in a given array', function() {
    expect(index.searchIndex(['Alice', 'lord', 'falls', 'hole', 'and'])).toEqual({
      alice: [0],
      lord: [0, 1],
      falls: [0],
      hole: [0],
      and: [0, 1]
    });
  });

  it('searches a term and return its location in the JSON', function() {
    expect(index.searchIndex('Alice')).toEqual([0]);
  });

  it('search a term and return all the instances of that word in the index', function() {
    expect(index.searchIndex('and')).toEqual([0, 1]);

  });
});
