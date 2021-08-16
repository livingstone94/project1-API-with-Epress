const express = require('express');

//express app
const app = express();
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/welcome', (req, res) => {
    res.sendFile('./views/welcome.html', { root: __dirname });
});

app.get('/welcome/:name', (req, res) => {
    let name = "Mr febe";
    // res.sendFile('./views/name.html', {root: __dirname}); 
    res.send("<h3>Hey " + "" + req.params.name + " " +
        "thanks for calling a parameterized route in my API first application </h3>");
});