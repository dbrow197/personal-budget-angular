const express = require('express');
const app = express();
const port = 3000;



app.use('/', express.static('public'));


//var fs = require('fs');
//var obj = JSON.parse(fs.readFileSync('/newBudget', 'utf8'));

app.get('/hello', (req, res) =>{
   res.send('Hello World!');
});

const data = require('./newBudget.json');

app.get('/budget', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

app.get('/budget', (req, res) => {
    res.json(myBudget);
});


app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});

