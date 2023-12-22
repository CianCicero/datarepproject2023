import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./ViewSongs.css"; // Import your custom CSS file

// ... (other imports)

const ViewSongs = () => {
    const navigate = useNavigate();
    const [songs, setSongs] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:4000/songs")
        .then((res) => {
          console.log(res.data);
          setSongs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    const handleDelete = (id) => {
        console.log("Deleting song with id:", id);

      axios
        .delete(`http://localhost:4000/songs/${id}`)
        .then((res) => {
          console.log(res.data);
          setSongs(songs.filter((song) => song._id !== id));
          // Use navigate after successful deletion
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <div>
        <div className="header">
          <h1>Music Library</h1>
        </div>
  
        <div className="song-card-container">
          {songs.map((song) => (
            <Card className="song-card" key={song._id}>
              <Card.Img variant="top" src={song.albumCover} />
              <Card.Body>
                <Card.Title>{song.songName}</Card.Title>
                <Card.Text>{song.artistName}</Card.Text>
                <Card.Text>{song.genre}</Card.Text>
                <Card.Text>{song.rating}</Card.Text>
                <Card.Text>{song.review}</Card.Text>
                <button
                  className="btn btn-danger"
                  onClick={() => navigate(`/deletesong/${song._id}`)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/editsong/${song._id}`)}
                >
                  Edit
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default ViewSongs;
  