
const express = require('express');
const app = express;
const portNumber = 9000;


// app.get(arg1, arg2);
// app.get('/API', () => { });

app.get('/welcome',
    (req, res) => {
        console.log('welcome');
        res.send('Welcome to my app...');
    });


// app.get();
// app.post();

// app.listen( arg1, arg2 );
// app.listen(portNumber, () => { });

app.listen(portNumber, () => {
    console.log(`Server is running at ${portNumber}.`);
});
