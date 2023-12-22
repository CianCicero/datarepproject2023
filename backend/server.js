const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

//
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//log to console to show port connection
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
});

//connection to mongoose database
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

//schema for song reviews
const songSchema = new mongoose.Schema({
    songName: String,
    artistName: String,
    genre: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    review: String,
    albumCover: String
});


const Song = mongoose.model('Song', songSchema);

//adding song review to database
app.post('/songs/add', async (req, res) => {
    try {
        const song = new Song(req.body);
        const saveSong = await song.save();
        res.status(200).json(saveSong);
    }
    catch (error) {
        res.status(500).json(error);
    }
});

//pull song reviews from database
app.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    }
    catch (error) {
        res.status(500).json(error);
    }
});

//edit song reviews in database
app.put('/songs/update/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        song.songName = req.body.songName;
        song.artistName = req.body.artistName;
        song.genre = req.body.genre;
        song.rating = req.body.rating;
        song.review = req.body.review;
        song.albumCover = req.body.albumCover;
        const updateSong = await song.save();
        res.status(200).json(updateSong);
    }
    catch (error) {
        res.status(500).json(error);
    }
});

//delete songs from database
app.delete('/songs/delete/:id', async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);
        res.status(200).json(song);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
