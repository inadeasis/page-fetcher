const request = require('request');
const fs = require('fs');

// Parse CL ars using process.argv
const url = process.argv[2];
const filePath = process.argv[3];

// Make HTTP request asynchronously using req lib 
request(url, (error, response, body) => {
  if (error) {
    console.error('Error: ', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status: ', response.statusCode);
  } else {
    fs.writeFile(filePath, body, (writeError) => {
      if (writeError) {
        console.error('Error writing to file: ', writeError);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    });
  }
});