const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    console.log("In readFile's callback: it has the data.");

    if (!error) return data;
  });
  // Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const bombay = breedDetailsFromFile('Bombay');
console.log('Return Value:', bombay);