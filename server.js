const express = require('express');
//const cors = require('cors');
const app = express();
const port = 3000;

//app.use(cors());
app.use('/', express.static('public'));

const budget = {

    myBudget: [
   {
        title: "Eat out",
        budget: 100
    },
    {
        title: "Rent",
        budget: 1200
    },
    {
        title: "Groceries",
        budget: 250
    },
    {
        title: "Phone",
        budget: 89
    },
    {
        title: "Car",
        budget: 400
    },
    {
        title: "Gym",
        budget: 35
    },
    {
        title: "DigitalOcean",
        budget: 4
    },
    ]
};

//app.get('/hello', (req, res) =>{
//   res.send('Hello World!');
//});

const data = require('./newBudget.json');

app.get('/budget', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

app.get('/budget', (req, res) => {
    res.json(budget);
});
//possible myBudget

app.listen(port, () => {
    console.log(`API served at https://localhost:${port}`);
});

