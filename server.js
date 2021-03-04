
const express = require('express');
const app = express();
const path = require('path');


// app.use(express.static(path.join(__dirname+ '/client/build')));
app.use(express.static(path.join(__dirname, 'client', 'build')));
// app.use(express.static('client/build'))

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
