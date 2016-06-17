# Inverted-Index

This creates an inverted index object. An inverted index basically maps the contents of a file, i.e words, numbers e.t.c to their location in the file(s). This concept is mainly applied in search engines indexing algorithm to facilitate faster full text searches.

***

# Getting started

* Install [NodeJs](https://nodejs.org/en/)
* Install httpster `npm install -g httpster`
* Clone the repository from [here](https://github.com/andela-tbaraza/Inverted-Index.git)

***

# Usage

## To run it on node:

* Navigate at your terminal to the root project folder
* Change directory to jasmine/src
* Get to nodeJS environment `$ node`
* Require the source file and create an instance of the Index module
```> var index = require('./invertedIndex')
 > var index = new Index()
 ```

## Create the index
The creatIndex methosd takes in a string variable that represents the path to the JSON file that its contents will be to used to create the index.

```index.createIndex('../books.json')
```

## Generate index

```console.log(index.getIndex())
logs
{ title: [ 0, 1 ],
alice: [ 0 ],
in: [ 0 ],
wonderland: [ 0 ],
text: [ 0, 1 ],
lord: [ 0, 1 ],
 falls: [ 0 ]....
```
## Search index
The search method takes in different arguments and generates their index

```console.log(index.searchIndex('Alice'))
logs
[ 0 ]

console.log(searchIndex(['Alice', 'lord', 'falls', 'hole']))
logs
{ alice: [ 0 ], lord: [ 0, 1 ], falls: [ 0 ], hole: [ 0 ] }

```

***

# Running the tests

* On your terminal change directory to the root project folder.
* Start the server `httpster`.
* Navigate to http://localhost:3333/jasmine/SpecRunner.html on your browser to run the tests.

