'use strict';

// import the file reader

const fs = require('fs');

class Index {
    // method to read the json file

    createIndex(filePath) {
        this.books = JSON.parse(fs.readFileSync(filePath));
        this.indexArray = [];
        this.books.forEach((book, docIndex) => {
            var bookObjectString = JSON.stringify(book).toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim();
            // console.log('++' + bookObjectString + '++');
            this.indexArray = this.indexArray.concat(bookObjectString.split(' ').map((word, wordIndex) => {
                return (word + ' : ' + docIndex + ' : ' + wordIndex);

            }));
        });

    }

    getIndex() {
        return this.indexArray;

    }
    searchIndex(term) {
        var results = this.indexArray.filter(wordStatistics => {
            const wordToSearch = new RegExp(term, 'gi');
            // if a true boolean is returned, wordStatistics is added to results array
            return wordToSearch.test(wordStatistics);

        });
       if (results.length === 0) {
            console.log('No match has been made');
            return;
        }
        return results;

    }

}


// var obj = new Index();
// obj.createIndex("../books.json")
// console.log(obj.getIndex())


module.exports = Index;
