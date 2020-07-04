import React from 'react';
import { Row } from 'reactstrap';
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    return (
        <Row>
            { movies.map(movie => ( 
            <MovieCard key={movie.id} 
                movie={movie} 
            /> )) }
        </Row>
    );
  }

export default MovieList;