import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';

const MovieCard = ({movie}) => {

      return (
        <>
        <Col sm="6">
            <Card className="card">
                <CardImg top width="100%" src={movie.poster} alt="Movie poster" />
                <CardBody>
                    <CardTitle className="text-danger text-center font-weight-bold">{movie.title}</CardTitle>
                    <CardText>
                       <small className="text-muted">{movie.rating}</small>
                        <FontAwesomeIcon
                            icon= {faStar}
                            color="yellow"
                            size="sm"
                        />  
                    </CardText>
                </CardBody>
            </Card> 
        </Col>
        </>
    );
  }

export default MovieCard;