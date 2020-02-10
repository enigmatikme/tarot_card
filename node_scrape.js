const https = require('https');

function getHtml () {

  https.get('https://www.tarot.com/tarot/cards', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(data);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

getHtml();
