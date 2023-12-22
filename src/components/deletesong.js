import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

const DeleteSong = () => {
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

        axios.delete(`http://localhost:4000/songs/delete/${id}`, song)
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
            <h1>Delete Song</h1>


                <Button variant="primary" type="submit" className="btn btn-danger">
                    Delete Song
                </Button>

       </div>
        
    )
    }
    export default DeleteSong;
