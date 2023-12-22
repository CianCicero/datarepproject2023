import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddSongReview from './components/addsong';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import ViewSongs from './components/viewsongs';
import EditSong from './components/editsong';
import DeleteSong from './components/deletesong';


function App() {
  return (
    <BrowserRouter>
      <>
      <NavBar>
        <Container>
          <NavBar.Brand href="/">Music Review</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/addsong">Add Song</Nav.Link>
            <Nav.Link href="/viewsongs">View Songs</Nav.Link>

          </Nav>
        </Container>
      </NavBar>

      <div>
      <Routes>
        <Route path="/addsong" element={<AddSongReview />} ></Route>
        <Route path="/viewsongs" element={<ViewSongs />} ></Route>
        <Route path="/editsong/:id" element={<EditSong />} ></Route>
        <Route path="/deletesong/:id" element={<DeleteSong />} ></Route>
      </Routes>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;

