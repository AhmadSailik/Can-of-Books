import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Form,Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class AddForm extends React.Component {
    render() {
        return (
            <Form onSubmit={(e)=>this.props.addBookProp(e)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type='text' placeholder="Enter Book Name" name='name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name='description' />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formGroupstatus">
                    <Form.Control aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Control >
                    </Form.Group> */}
                    <Button type="submit" variant="secondary" style={{ width: '100%' }}>Submit</Button>
                
            </Form>
        )
    }
}
export default AddForm;