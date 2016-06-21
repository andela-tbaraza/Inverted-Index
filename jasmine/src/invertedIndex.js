'use strict';

class Index {
  createIndex(filePath) {
    var self = this;
    this.indexObject = {};

    /* specifies the environment to be used */
    if (typeof window === 'object') {
      return fetch(filePath).then(function(response) {
          return response.json();
        })
        .then(function(data) {
          self.books = data;
          makeIndex();
        });
    } else {
      // import the  json file using require

      self.books = require(filePath);

      makeIndex();
    }

    function makeIndex() {

      /* this method creates the index and is to be called
      after the JSON file has been read */
      self.books.forEach((book, docIndex) => {

        /* self.bookString is now a string without any special characters and trailing spaces */
        self.bookString = JSON.stringify(book).toLowerCase()
          .replace(/\W/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        /* self.stringArray is converted to a set to remove any duplication of words */
        self.stringArray = new Set((self.bookString.split(' ')));

        self.stringArray.forEach((word) => {
          if (!self.indexObject.hasOwnProperty(word)) {
            self.indexObject[word] = [docIndex];
          } else {
            self.indexObject[word].push(docIndex);
          }
        });
      });
    }
  }

  getIndex() {

    /* returns the index created by createIndex method*/
    return this.indexObject;
  }

  getFrequency() {

    /* this method checks how many times a word occurs in the contents JSON file
    and returns an object with the count */
    const frequencyObject = {};

    const frequencyArray = this.bookString.split(' ');

    frequencyArray.map(word => {
      if (!frequencyObject.hasOwnProperty(word)) {
        frequencyObject[word] = 1;
      } else {
        frequencyObject[word] += 1;
      }
    });
    return frequencyObject;
  }

  searchIndex(wordInput) {

    /* depending on the input provided this method will return an object specifying the
    location of the word in the JSON file contents */
    if (typeof wordInput === 'string') {
      const wordToSearch = wordInput.toLowerCase();

      if (this.indexObject.hasOwnProperty(wordToSearch)) {
        return this.indexObject[wordToSearch];
      }
    }

    if (Array.isArray(wordInput) === true) {
      const resultsObject = {};

      wordInput.map(word => {
        const wordToSearch = word.toLowerCase();

        if (this.indexObject.hasOwnProperty(wordToSearch)) {
          resultsObject[wordToSearch] = this.indexObject[wordToSearch];
        }
      });
      return resultsObject;
    }
  }

}
