import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from 'reactstrap';
import MovieRating from './MovieRating';


const MovieCard = ({movie}) => {
    
      return (
        <>
        <Col sm="6">
            <Card className="card">
                <CardImg top width="100%" src={movie.poster} alt="Movie poster" />
                <CardBody>
                    <CardTitle className="text-danger text-center font-weight-bold">{movie.title}</CardTitle>
                    <CardText id="stars">  
                        <MovieRating stars={movie.rating} key={movie.id}/>
                        <small className="text-muted ml-5 pl-5 font-italic">{movie.rating} stars</small>  
                    </CardText>
                   
                </CardBody>
            </Card> 
        </Col>
        </>
    );
  }

export default MovieCard;