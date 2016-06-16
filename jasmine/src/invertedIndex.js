"use strict";

class Index {



    createIndex(filePath) {
        var self = this;
        this.indexObject = {};
        
        /* specifies the environment to be used */
        if (typeof window === 'object') {

            return fetch(filePath).then(function(response) {

                return response.json()
            })
            .then(function(data) {
                
                self.books = data;
                
                makeIndex()

            });
            
        } else {
            // import the file reader using require
            const fs = require('fs');
            
            self.books = JSON.parse(fs.readFileSync(filePath));
            
            makeIndex()
        }


        function makeIndex() {
        /* this method creates the index and is to be called after the JSON file has been read */
            
            self.books.forEach((book, docIndex) => {

                self.bookString = JSON.stringify(book).toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim();
            
            self.stringArray = self.bookString.split(' ');
            
            self.stringArray.forEach((word, wordIndex) => {
                    if (self.indexObject.hasOwnProperty(word)){

                            self.indexObject[word].push(docIndex)
                        
                    }
                    else {
                        
                        self.indexObject[word] = [docIndex]
                    }
                    
                });
        
            });
    
        }
    }

    getIndex(docIndex){
        if 

        return this.indexObject

    
    };


    searchIndex (word) {
        if (typeof word === 'string') {
           const wordToSearch = word.toLowerCase();

            if (this.indexObject.hasOwnProperty(wordToSearch)) {

                return this.indexObject[wordToSearch]
            }

            return -1
        }
    
    }



    

}



