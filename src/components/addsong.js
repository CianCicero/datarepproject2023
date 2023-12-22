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
}