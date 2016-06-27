/* eslint no-unused-vars: "error"*/
/* global Index*/

class Index {

  makeIndex(books) {
    // this method creates the index and is to be called after the JSON file has been read

    this.indexObject = {};
    books.forEach((book, docIndex) => {
      /* self.bookString is now a string without any special
         characters and trailing spaces
      */
      this.bookString = JSON.stringify(book).toLowerCase()
        .replace(/\W+/g, ' ')
        .trim();

      // self.stringArray is converted to a set to remove any duplication of words
      this.stringArray = new Set((this.bookString.split(' ')));

      this.stringArray.forEach(word => {
        if (!this.indexObject.hasOwnProperty(word)) {
          this.indexObject[word] = [docIndex];
        } else {
          this.indexObject[word].push(docIndex);
        }
      });
    });
  }

  createIndex(filePath) {
    // specifies the environment to be used

    return new Promise((resolve, reject) => {
      if (typeof window === 'object') {
        return fetch(filePath)
          .then(response => response.json())
          .then(data => {
            this.books = data;
            this.makeIndex(data);
            return resolve();
          })
          .catch((error) => reject(error));
      }
      //  else import the  json file using require in order to run on node

      try {
        const books = require(filePath); // eslint-disable-line global-require
        this.makeIndex(books);
        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }

  getIndex() {
    // returns the index created by createIndex method

    return this.indexObject;
  }

  searchIndex(wordInput) {
    /*
    depending on the input provided this method will return an object specifying
    the location of the word in the JSON file contents
    */

<<<<<<< HEAD
    /* depending on the input provided this method will return an object specifying the
    location of the word in the JSON file contents */
    if (typeof wordInput === 'string') {
      const wordToSearch = wordInput.toLowerCase();

      if (this.indexObject.hasOwnProperty(wordToSearch)) {
        return this.indexObject[wordToSearch];
=======
    if (Array.isArray(wordInput) || typeof wordInput === 'string') {
      const resultsObject = {};
      if (typeof wordInput === 'string') {
        wordInput = wordInput.split(' '); // this makes the string an array
>>>>>>> dev
      }
    }

    if (Array.isArray(wordInput) === true) {
      const resultsObject = {};

      wordInput.forEach(word => {
        const wordToSearch = word.toLowerCase().replace(/\W+/g, '');

        if (this.indexObject.hasOwnProperty(wordToSearch)) {
          resultsObject[wordToSearch] = this.indexObject[wordToSearch];
        } else {
          resultsObject[wordToSearch] = [-1];
        }
      });
      return resultsObject;
    }
  }

  getFrequency() {
    /*
    this method checks how many times a word occurs in the contents JSON file
    and returns an object with the count
    */

    const frequencyObject = {};

    const frequencyArray = this.bookString.split(' ');

    frequencyArray.forEach(word => {
      if (!frequencyObject.hasOwnProperty(word)) {
        frequencyObject[word] = 1;
      } else {
        frequencyObject[word] += 1;
      }
    });
    return frequencyObject;
  }

}
