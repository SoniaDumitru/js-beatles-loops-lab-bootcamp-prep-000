var arrayOfMusicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var arrayOfInstruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var array=[];
  for (let i=0; i < arrayOfMusicians.length; i++) {
    array.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i])
  }
  return array;
}

function johnLennonFacts(arrayOfFacts) {
  var newArray = [];
  var i = 0;
  while (arrayOfFacts.length > i) {
    newArray.push(arrayOfFacts[i] + "!!!")
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  function incrementNumber() {
    i++;
    return i;
  }
  do {
    array.push('I love the Beatles!')
  }
  while (incrementNumber() < 15);
}
