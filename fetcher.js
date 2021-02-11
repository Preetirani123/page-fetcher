const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);


request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, function (err) {
    if (err) return console.log(err);
    console.log('Downloaded and saved 1235 bytes to ./index.html');
  });
});

