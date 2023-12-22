import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditSong =() => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [songName, setSong] = useState('');
    const [artistName, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [albumCover, setCover] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:4000/songs/${id}`)
        .then((res) => {
            setSong(res.data.songName);
            setArtist(res.data.artistName);
            setGenre(res.data.genre);
            setRating(res.data.rating);
            setReview(res.data.review);
            setCover(res.data.albumCover);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const song = {
            songName,
            artistName,
            genre,
            rating,
            review,
            albumCover
        }

        axios.put(`http://localhost:4000/songs/update/${id}`, song)
        .then((res) => {
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Edit Song</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="songName">
                    <Form.Label>Song Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter song name" value={songName} onChange={(e) => setSong(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="artistName">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter artist name" value={artistName} onChange={(e) => setArtist(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" placeholder="Enter genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="Enter rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="review">
                    <Form.Label>Review</Form.Label>
                    <Form.Control type="text" placeholder="Enter review" value={review} onChange={(e) => setReview(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="albumCover">
                    <Form.Label>Album Cover</Form.Label>
                    <Form.Control type="text" placeholder="Enter album cover" value={albumCover} onChange={(e) => setCover(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit`
                </Button>
            </Form>
        </div>
    )

}

    export default EditSong;






