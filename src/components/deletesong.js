import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

const DeleteSong = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [songName, setSong] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:4000/songs/${id}`)
            .then((res) => {
                setSong(res.data.songName);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const song = {
            songName,
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
            <h1>Are you sure you want to delete this song?</h1>

            <Form onSubmit={handleSubmit}>
                <Button variant="primary" type="submit" className="btn danger-btn">
                    Yes, delete this song
                </Button>
            </Form>
        </div>
    );
}

export default DeleteSong;
