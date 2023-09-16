const fs = require('fs');

const breedDetailsFromFile = function(breed, functionWhenDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    console.log("In readFile's callback: it has the data.");

    if (!error) functionWhenDone(data);
  });
};

const printData = breed => {
  console.log('Return Value:', breed);
};

breedDetailsFromFile('Bombay', printData);