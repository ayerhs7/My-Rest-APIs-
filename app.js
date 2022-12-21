const express = require('express');
const app  = express();

// now you can create routes

// Routes
app.get('/', (req,res) => {
    res.send('We are on home');
});

// How do we start listening
app.listen(3000);
