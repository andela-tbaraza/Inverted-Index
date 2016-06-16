"use strict";

class Index {

    createIndex(filePath) {
        /* specifies the environment to be used */
        if (typeof window === 'object') {
            $.ajaxSetup({
                async: false
            });

            $.getJSON(filePath, (data) => {
                this.books = data;
            });
        } else {
            // import the file reader using fs
            const fs = require('fs');
            this.books = JSON.parse(fs.readFileSync(filePath));
        }

        this.indexArray = [];

        this.books.forEach((book, docIndex) => {
            this.bookString = JSON.stringify(book).toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim();
            this.indexArray = this.indexArray.concat(this.bookString.split(' ').map((word, wordIndex) => {
                return (word + ' : ' + docIndex + ' : ' + wordIndex);
            }));
        });
    }

    getIndex(term){
        this.docArray;
        console.log(term)
        /*this method gets the index created in createIndex method */
        if (term) {
            this.docArray = this.books.map((obj, objIndex) => {
                if (term === objIndex) {
                    this.bookString.split(" ").map((word) => {
                        return (word +  ':' + objIndex);
                    });
                };
            });       
        } else {
            return this.indexArray;
        }
    };


    searchIndex (term) {
        const results = this.indexArray.filter((wordStatistics) => {
            const wordToSearch = new RegExp(term, 'gi');        // 
            return wordToSearch.test(wordStatistics);
        });

        if (results.length === 0) {

          return -1;
        }

        return results;

    }

}
var object = new Index;
object.createIndex('../books.json')
console.log(object.getIndex())
console.log(object.searchIndex('Powerful'))

