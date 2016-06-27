/* global Index b:true*/
/* eslint no-undef: "error"*/

const index = new Index();
index.indexObject = null;

beforeEach(done => {
  index.createIndex('books.json').then(() => {
    done();
  });
});

describe('Index', () => {
  it('should read the JSON file and assert it is not empty', () => {
    expect(index.books.length).toBeGreaterThan(0);
  });
});

describe('populate Index', () => {
  it('should check that index is created once the JSON file has been read', () => {
    expect(index.indexObject).not.toBe(null);
  });

  it('should check index maps the string keys to the correct objects in the JSON array.', () => {
    index.getIndex();
    expect(index.indexObject.powerful).toEqual([1]);
    expect(index.indexObject.falls).toEqual([0]);
  });
});

describe('Search index', () => {
  it('searches for terms in a given array', () => {
    expect(index.searchIndex(['Alice', 'lord', 'falls', 'hole', 'and'])).toEqual({
      alice: [0],
      lord: [0, 1],
      falls: [0],
      hole: [0],
      and: [0, 1],
    });
  });

  it('searches a term and return its location in the JSON', () => {
    expect(index.searchIndex('Alice')).toEqual([0]);
  });

  it('search a term and return all the instances of that word in the index', () => {
    expect(index.searchIndex('and')).toEqual([0, 1]);
    expect(index.searchIndex('Alice')).toEqual({
      alice: [0],
    });
  });

  it('searches a term and return all the instances of that word in the index', () => {
    expect(index.searchIndex('and')).toEqual({
      and: [0, 1],
    });
  });

  it('searches for a phrase and return its location in the JSON', () => {
    expect(index.searchIndex('LORD of the rings')).toEqual({
      lord: [0, 1],
      of: [0, 1],
      the: [1],
      rings: [1],
    });
  });

  it('returns -1 if term does not exist in the index object', () => {
    expect(index.searchIndex(['moniq', 'Alice'])).toEqual({
      moniq: [-1],
      alice: [0],
    });
  });
});
