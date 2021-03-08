import React, { Component } from 'react';
import {Container,Form,Button } from 'react-bootstrap';

export class DocumentUpload extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {

        return (
            <div>
            <Container style={{padding:"2rem"}}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Add Title</Form.Label>
                        <Form.Control type="Text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Upload File</Form.Label>
                        <Form.Control type="file" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Container>
            </div>
        )
    }
}
