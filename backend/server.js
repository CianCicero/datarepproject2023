const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
});

async function connect() 
{
    try {
        await mongoose.connect('mongodb+srv://cianmccann:EBUabV6sdBY5Nqqq@cluster0.ppjp1lm.mongodb.net/Songs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }

}
connect();