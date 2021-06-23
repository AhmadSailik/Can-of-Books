import React from 'react';
import {  Button, Form, Modal } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class AddForm extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.AddcloseModal} >

                    <Modal.Header closeButton>
                        <Modal.Title>Update Your Book</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={(e) => this.props.addBookProp(e)}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type='text' placeholder="Enter Book Name" name='name' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Book Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" name='description' />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Control as="select" custom name='select' onChange={this.props.UpdateSelectionStatus} style={{ width: '100%', height: '3rem', marginBottom: '1rem' }}>
                                    <option value=''></option>
                                    <option value='Life Changing'>Life Changing</option>
                                    <option value='Favorite Five'>Favorite Five</option>
                                    <option value='Reccomended To Me'>Reccomended To Me</option>
                                </Form.Control>
                            </Form.Group>
                            <Button type="submit" variant="secondary" style={{ width: '100%' }}onClick={this.props.AddcloseModal}>Submit</Button>

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.AddcloseModal} >Close</Button>
                    </Modal.Footer>

                </Modal>
            </>

        )
    }
}
export default AddForm;