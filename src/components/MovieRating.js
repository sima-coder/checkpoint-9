import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';

const MovieRating = ({stars}) => {

      return (
        <>
            {
                [...Array(parseInt(stars))].map(star => {
                    return <FontAwesomeIcon
                            icon={ faStar }
                            color="yellow"
                            size="lg"
                            />;
                })
            }
        </>
    );
  }

export default MovieRating;