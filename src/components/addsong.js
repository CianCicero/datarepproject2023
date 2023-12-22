import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const AddSongReview = () => {

    const navigate = useNavigate();
    const [songName, setSong] = useState('');
    const [artistName, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [albumCover, setCover] = useState('');



const handleSubmit = async (e) => {

    e.preventDefault();

    const song = {songName,
        artistName,
        genre,
        rating,
        review,
        albumCover
    }

     axios.post('http://localhost:4000/songs/add', song)
        .then((res) => 
        {console.log(res.data);

            navigate("/");
}).catch((err) => {console.log(err)});

}


const songForm = () => {
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
                    <Form.Control type="text" placeholder="Enter rating" onChange={(e) => setRating(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="review">
                    <Form.Label>Review</Form.Label>
                    <Form.Control type="text" placeholder="Enter review" onChange={(e) => setReview(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="albumCover">
                    <Form.Label>Album Cover</Form.Label>
                    <Form.Control type="text" placeholder="Enter album cover" onChange={(e) => setCover(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )}
}

export default AddSongReview;