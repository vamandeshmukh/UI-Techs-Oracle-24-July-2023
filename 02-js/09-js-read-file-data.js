

const fs = require('fs');

// const filePath = './data.json';
const filePath = 'D:/VamanPro/Codes/00_Oracle_July_2023/02-js/data.json';

let jsonToJs = '';

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        jsonToJs = JSON.parse(data);
        console.log(jsonToJs);
    }
});



