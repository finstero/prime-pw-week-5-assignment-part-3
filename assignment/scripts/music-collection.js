console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
  album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return album;
}

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
}

console.log('Albums by this artist include:', findByArtist('Tame Impala', collection));
console.log('should be an empty array:', findByArtist('Daft Punk', collection));
console.log('Albums by this artist should include 2 objects:', findByArtist('Andrew Bird', collection));

console.log('--- stretch goals ---');

console.log('testing filter ----------');

let filterRes = collection.filter(album => album.artist == 'Andrew Bird');
console.log(filterRes);




function search( obj, array ){
  let searchResults = [];
  if (obj.title == undefined && obj.artist == undefined && obj.yearPublished == undefined){
    console.log('all undefined. here are all the albums');
    return array;
  }
  else if (obj.title == undefined && obj.artist == undefined || obj.title == undefined && obj.yearPublished == undefined || obj.artist == undefined && obj.yearPublished == undefined) {
    console.log('two properties are undefined');
    searchResults = collection.filter(album => album.artist == obj.artist || obj.yearPublished == album.yearPublished || obj.title == album.title);
    // for (album of array){
    //   if (obj.yearPublished == album.yearPublished || obj.artist == album.artist || obj.title == album.title){
    //     searchResults.push(album);
    //   }
    // } leaving this code chunk in comments for myself. This is non filter alternative
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
    }
    return searchResults;
  }
}


console.log('testing if no obj---');
console.log(search({}, collection));

console.log('testing if obj is empty ----');
console.log(search({}, collection));


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

console.log('-------see below for updated functions-------')

function addToCollection2 (title, artist, yearPublished, trackList) {
  album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  album.trackList = trackList;

  collection2.push(album);
  return album;
}

let collection2 = [];

let inColourTrackList = [];
let mysteriousTrackList = [];

function addTracks (trackNumber, trackName, trackDuration, trackList){
  let track = {};
  track.trackNumber = trackNumber;
  track.trackName = trackName;
  track.trackDuration = trackDuration;

  trackList.push(track);
  return track;
}

addTracks (1, 'Loud Places', 3.05, inColourTrackList);
addTracks (2, 'inColour2', 3.25, inColourTrackList);
addTracks (3, 'inColour3', 3.55, inColourTrackList);
addTracks (4, 'inColour4', 3.37, inColourTrackList);

addToCollection2 ('In Colour', 'Jamie xx', 2015, inColourTrackList);
console.log(collection2[0]);

addTracks (1, 'mysterious1', 3.05, mysteriousTrackList);
addTracks (2, 'mysterious2', 3.25, mysteriousTrackList);
addTracks (3, 'mysterious3', 3.55, mysteriousTrackList);

addToCollection2('The Mysterious Production of Eggs', 'Andrew Bird', 2005, mysteriousTrackList);

let seriousTrackList = [];

addTracks (1, 'serious1', 3.05, seriousTrackList);
addTracks (2, 'serious2', 3.25, seriousTrackList);
addTracks (3, 'serious3', 3.55, seriousTrackList);


addToCollection2('Are You Serious', 'Andrew Bird', 2016, seriousTrackList);


function showCollection2(array){
  console.log('There are', array.length, 'albums in this collection:');
  for (album of array){ //needs to match album.title below in order to work
    console.log(album.title, 'by', album.artist + ', published in', album.yearPublished + ':');
    console.log('testing semantics', album.trackList[0]);
    for (track of album.trackList){
      console.log(track.trackNumber + '.', track.trackName + ':', track.trackDuration);
    }
  }
}

console.log('showing collection:')
showCollection2(collection2);


function search2 (array, obj, trackName){
  let searchResults = [];
    if (obj.title == undefined && obj.artist == undefined && obj.yearPublished == undefined && (trackName == undefined || trackName == null)) {
      console.log('all four undefined. here are all the albums');
      return array;
    }
    else if (trackName == undefined){ // starting out with my original search function, where I didn't have to account for trackName. doing this for ease of changing code under a time limit
      if (obj.title == undefined && obj.artist == undefined || obj.title == undefined && obj.yearPublished == undefined || obj.artist == undefined && obj.yearPublished == undefined) {
        console.log('two properties are undefined'); // checking if and which properties are undefined in the case of two properties being undefied
        searchResults = collection.filter(album => album.artist == obj.artist || obj.yearPublished == album.yearPublished || obj.title == album.title);
        return searchResults;
      }
      else if (obj.title == undefined || obj.artist == undefined || obj.yearPublished == undefined){ //loop for if one property is undefined
        for (album of array){ //loop with conditionals for each set of matches
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
          console.log('match with all three') //search with all three criteria input
          searchResults.push(album);
        }
      }
      return searchResults;
    }
    }
    else { //if trackName IS defined
      for (album of array){ //using same logic as first chunk of code above. isolating out each possible situation of matches
        if (obj.title == album.title && obj.artist == album.artist && obj.yearPublished == album.yearPublished){
          console.log('three properties match. then move on to check trackName');
        for (track of album.trackList){ //loop to check if trackName matches. I could replace with function probably to make this way better.
          if (track.trackName == trackName){
            console.log('all four match');
            searchResults.push(album);
        }
      }
    }
        else if (obj.title == album.title && obj.artist == album.artist || obj.title == album.title && obj.yearPublished == album.yearPublished || obj.artist == album.artist && obj.yearPublished == album.yearPublished){
          for (track of album.trackList){
            if (track.trackName == trackName){
              console.log('three defined including trackName');
              searchResults.push(album);
          }
        }
      }
        else if (obj.title == undefined || obj.artist == undefined || obj.yearPublished == undefined){
          for (track of album.trackList){
            if (track.trackName == trackName){
              console.log('two defined including trackname');
              searchResults.push(album);
          }
        }
        }
        else {
          for (track of album.trackList){
            if (track.trackName == trackName){
              console.log('only trackname defined. trackname is working');
              searchResults.push(album);
          }
        }
        }
    }
    return searchResults;
}
}

console.log('testing with Andrew Bird trackName');
console.log(search2(collection2, {artist: 'Andrew Bird'}, 'serious1'));

console.log('testing with artist and trackName');
console.log(search2(collection2, {artist: 'Jamie xx'}, 'Loud Places'));

// console.log('testing empty everything');
// console.log(search2({}, collection2));

console.log('testing empty trackName and artist');
console.log(search2(collection2, {artist: 'Andrew Bird'}));

console.log('testing empty trackName and artist Jamie xx');
console.log(search2(collection2, {artist: 'Jamie xx'}));

console.log('testing with only trackname');
console.log(search2(collection2, {}, 'Loud Places'));
