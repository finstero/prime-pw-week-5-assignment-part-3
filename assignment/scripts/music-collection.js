console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
  album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return album;
};

addToCollection('hello!', 'andrew', 2014);
console.log(collection[0]);
console.log('return function', album);

// albumName = title
// title = {};
// title.album = albumName;

collection = [];

addToCollection('In Colour', 'Jamie xx', 2015);
console.log('I just added:', album);

addToCollection('Norman Fucking Rockwell', 'Lana Del Rey', 2019);
console.log('I just added:', album);

addToCollection('Whack World', 'Tierra Whack', 2018);
console.log('I just added:', album);

addToCollection('Currents', 'Tame Impala', 2015);
console.log('I just added:', album);

addToCollection('The Mysterious Production of Eggs', 'Andrew Bird', 2005);
console.log('I just added:', album);

addToCollection('Are You Serious', 'Andrew Bird', 2016);
console.log('I just added:', album);

console.log(collection);

// function showCollection(array){
//   console.log('There are', array.length, 'albums in this collection.');
//   for (musicRecord of array){
//
//   }
//
// }



// Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
//
// - Test the `showCollection` function.
