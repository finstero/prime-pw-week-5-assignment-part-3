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

console.log('--- stretch goals ---');

function search( obj, array ){
  let searchResults = [];
  // if (obj == {}){
  //   return array;
  // }
  if (obj.title == undefined && obj.artist == undefined && obj.yearPublished == undefined){
    console.log('all undefined');
    return array;
  }
  else if (obj.title == undefined && obj.artist == undefined || obj.title == undefined && obj.yearPublished == undefined || obj.artist == undefined && obj.yearPublished == undefined) {
    console.log('two properties are undefined');
    for (album of array){
      if (obj.yearPublished == album.yearPublished || obj.artist == album.artist || obj.title == album.title){
        searchResults.push(album);
        console.log('search input has one defined property: message repeats x number of times where x is number of matches');
      }
    }
    console.log('return should work');
    return searchResults;
  }
  else if (obj.title == undefined || obj.artist == undefined || obj.yearPublished == undefined){
    for (album of array){
      if (obj.artist == album.artist && obj.yearPublished == album.yearPublished){
        searchResults.push(album);
        console.log('title property is undefined. match with artist and yearPublished');
      }
      if (obj.title == album.title && obj.yearPublished == album.yearPublished){
        searchResults.push(album);
        console.log('artist property is undefined. match with title and yearPublished');
      }
      if (obj.artist == album.artist && obj.title == album.title){
        searchResults.push(album);
        console.log('yearPublished property is undefined. match with artist and title');
      }
    }
    return searchResults;
  }
  else {
    for (album of array){
      if (obj.title == album.title && obj.artist == album.artist && obj.yearPublished == album.yearPublished){
        console.log('match with all three')
        searchResults.push(album);
      }
      else {
        console.log('there is no match');
      }
    }
    return searchResults;
  }
  // {
  //     if (album.title == obj.title && album.artist == obj.artist && album.yearPublished == obj.yearPublished) {
  //       searchResults.push(album);
  //       console.log('search input has three defined matching properties')
  //     }
  //     else if (album.title == obj.title && album.artist == obj.artist || album.title == obj.title && album.yearPublished == obj.yearPublished || album.artist == obj.artist && album.yearPublished == obj.yearPublished){
  //       console.log('at least two match');
  //     }
  // }
  //console.log(searchResults);
}


//(obj.title == undefined || obj.artist == undefined || obj.yearPublished == undefined )
console.log('testing empty obj---');
console.log(search({}, collection));

console.log('testing if no input other than array ----');
console.log(search(collection));

console.log('testing if no input other than object ----');
console.log(search({}));

console.log('testing yearPublished property---');
console.log(search({yearPublished: 2015}, collection));

console.log('testing artist property---');
console.log(search({artist: 'Tame Impala'}, collection));

console.log('testing artist property2---');
console.log(search({artist: 'Andrew Bird'}, collection));

console.log('testing two properties: artist and yearPublished ---');
console.log(search({artist: 'Tame Impala', yearPublished: 2015}, collection));

console.log('testing two properties: title and artist---');
console.log(search({title: 'Currents', artist: 'Tame Impala'}, collection));

console.log('testing title and year published');
console.log(search({title: 'Currents', yearPublished: 2015}, collection));

console.log('testing artist and year published');
console.log(search({artist: 'Tame Impala', yearPublished: 2015}, collection));

console.log('testing three properties');
console.log(search({title: 'Currents', artist: 'Tame Impala', yearPublished: 2015}, collection));


console.log('testing if no matches --------------');
console.log(search({artist: 'Lady Gaga'}, collection));

console.log('testing if some object input other than array ----');
console.log(search('Andrew Bird', collection));





// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. The search criteria might look
//    sosomething like this:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - Return a new array of all items in the `collection` matching *all* of the search criteria.
//   - If no results are found, return an empty array.
//   - If there is no search object or an empty search object provided as input, then
//    return all albums in the `collection`.
