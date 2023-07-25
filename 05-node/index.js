// steps - 
// 1. Write codes in package.json and index.js
// On CMD run - 
// 2. npm install 
// 3. npm start 
// 4. On Browser, visit http://localhost:9000/welcome
// 5. To stop - Ctrl + C Y 

const express = require('express');
const app = express();
const portNumber = 9000;


// app.get(arg1, arg2);
// app.get('/API', () => { });

app.get('/welcome',
    (req, res) => {
        console.log('welcome');
        res.send('Welcome to my app...');
    });

app.get('/contact',
    (req, res) => {
        console.log('contact');
        res.send('Please contact us...');
    });



// app.get();
// app.post();

// app.listen( arg1, arg2 );
// app.listen(portNumber, () => { });

app.listen(portNumber, () => {
    console.log(`Server is running at ${portNumber}.`);
});
