import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

//handle user inputs
const AddSongReview = () => {

    const navigate = useNavigate();
    const [songName, setSong] = useState('');
    const [artistName, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [albumCover, setCover] = useState('');



const handleSubmit = async (e) => {

    //allow us to manually handle the submission
    e.preventDefault();

    //take data into song object
    const song = {songName, artistName, genre, rating, review, albumCover}

    //send post request to backend
     axios.post('http://localhost:4000/songs/add', song)
        .then((res) => 
        {console.log(res.data);

            //return to home after succesful submission
            navigate("/");
     }).catch((err) => {console.log(err)});

}

//container to hold form, form holds inputs for song variables
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group controlId="songName">
                    <Form.Label>Song Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter song name" onChange={(e) => setSong(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="artistName">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter artist name" onChange={(e) => setArtist(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" placeholder="Enter genre" onChange={(e) => setGenre(e.target.value)} />
                </Form.Group>

            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
                 <Form.Control
                     as="select"
                     onChange={(e) => setRating(e.target.value)}
                    value={rating}
          >
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                </Form.Control>
             </Form.Group>

                <Form.Group controlId="review">
                    <Form.Label>Review</Form.Label>
                    <Form.Control type="text" placeholder="Enter review" onChange={(e) => setReview(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="albumCover">
                    <Form.Label>Album Cover</Form.Label>
                    <Form.Control type="text" placeholder="Enter album cover" onChange={(e) => setCover(e.target.value)} />
                </Form.Group>

                <Button variant="dark" type="submit" style={{ backgroundColor: 'black', color: 'yellow' }}>
                    Submit
                </Button>

            </Form>
        </Container>
    )}

export default AddSongReview;