import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddSongReview from './components/addsong';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';


function App() {
  return (
    <BrowserRouter>
      <>
      <NavBar>
        <Container>
          <NavBar.Brand href="/">Music Review</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/addsong">Add Song</Nav.Link>
          </Nav>
        </Container>
      </NavBar>

      <div>
      <Routes>
        <Route path="/addsong" element={<AddSongReview />} ></Route>
        
      </Routes>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;

