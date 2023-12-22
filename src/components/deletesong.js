import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


//delete song function 
const DeleteSong = () => {
    const navigate = useNavigate();
// Extract the 'id' parameter 
    const { id } = useParams();
    const [songName, setSong] = useState('');

 // Fetch song details using useEffect
    useEffect(() => {
        axios.get(`http://localhost:4000/songs/${id}`)
            .then((res) => {
                setSong(res.data.songName);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    //handle submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //create place-holder object
        const song = {
            songName,
        }

        //send delete request to database
        axios.delete(`http://localhost:4000/songs/delete/${id}`, song)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //double check to avoid misclick
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
