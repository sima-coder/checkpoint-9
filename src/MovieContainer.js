import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import './Movie.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilm } from '@fortawesome/fontawesome-free-solid';

const MovieContainer = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [movies, setMovies] = useState([]);

    const addMovie = (movie) => {
      setMovies([...movies, movie]);
    }
   

    return (
        <div className="list">
            <FontAwesomeIcon
                icon= {faFilm}
                color="#C82333"
                size="5x"
                className="movie-icon mb-3"
            />

            <h1>Movie App</h1>

            <Button className="my-5 px-5 addBtn" color="danger" onClick={toggle}>
                <FontAwesomeIcon
                    icon= {faPlus}
                    color="white"
                    size="lg"
                />
                Add new movie
            </Button>
           
            <Modal isOpen={modal} toggle={toggle} >
            
                <ModalHeader toggle={toggle} charCode="X">Add a new movie</ModalHeader>
                <ModalBody>
                    <MovieForm addMovie = {addMovie}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        
            <MovieList movies = {movies}/>
   
        </div>
    );
  }

export default MovieContainer;