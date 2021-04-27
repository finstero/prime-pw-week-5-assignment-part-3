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

function showCollection(array){
  console.log('There are', array.length, 'albums in this collection.');
  for (album of array){ //needs to match album.title below in order to work
    console.log(album.title, 'by', album.artist + ', published in', album.yearPublished);
  }
}

showCollection(collection);

function findByArtist(artist, array){
  let artistArray = [];
  for (album of array){
    if (album.artist == artist){
      artistArray.push(album);
    }
  }
  return artistArray;
};

console.log('Albums by this artist include:', findByArtist('Tame Impala', collection));
console.log('should be an empty array:', findByArtist('Daft Punk', collection));
console.log('Albums by this artist should include 2 objects:', findByArtist('Andrew Bird', collection));
