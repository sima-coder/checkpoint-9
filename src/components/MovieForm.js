import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Col, Input, CustomInput, FormText} from 'reactstrap';


const MovieForm = ({addMovie}) => {
    const [count, setCount] = useState(0);

    const [movie, setMovie] = useState({
        id: 0,
        title:'',
        rating: 0,
        poster:''
    });

    const handleInput = (e) => {
        e.preventDefault();
        setMovie({...movie, title: e.target.value});
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setMovie({...movie, rating: e.target.value});
    }

    const handleFile = (e) => {
        e.preventDefault();
        setMovie({...movie, poster:"/img/" + e.target.files[0].name});
 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (movie.title === '' && movie.poster === '') return;
            setCount(count + 1);
            addMovie({...movie, id: count});
    }


    return( 
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="title" sm={2}>Title</Label>
                <Col sm={10}>
                    <Input type="text" name="title" id="title" 
                    placeholder="Enter the title of the movie" 
                    onChange={handleInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="rating" sm={2}>Rating</Label>
                <Col sm={10}>
                <Input type="select" name="rating" id="rating" onChange={handleSelect}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="poster" sm={2}>Poster</Label>
                <Col sm={10}>
                    <CustomInput
                    type="file"
                    id="poster"
                    name="poster"
                    label={'choose an image file'}
                    onChange={ handleFile }
                     />
                    <FormText color="muted">
                        Add  the posters' movie.
                    </FormText>
                </Col>
            </FormGroup>
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                <Button color="success">Submit</Button>
                <button className="btn btn-primary" type="reset">Reset</button>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default MovieForm;