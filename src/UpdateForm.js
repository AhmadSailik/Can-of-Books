import React from 'react';
import {  Button, Form, Modal } from 'react-bootstrap';

class UpdateForm extends React.Component{
    render(){
        return(
            <>

<Modal show={this.props.show} onHide={this.props.updatecloseModal} >

<Modal.Header closeButton>
  <Modal.Title>Update Your Book</Modal.Title>
</Modal.Header>

<Modal.Body>
  <Form onSubmit={(e) => this.props.udateBookProp(e)}>

    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Book Name</Form.Label>
      <Form.Control type='text' placeholder="Enter Book Name" name='name' onChange={(e) => this.props.updateName(e)} value={this.props.REname} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Book Description</Form.Label>
      <Form.Control type="text" placeholder="Description" name='description' onChange={(e) => this.props.updateDescription(e)} value={this.props.Redescription} />
    </Form.Group>

    <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Control as="select" custom name='select' onChange={this.props.UpdateSelectionStatus} style={{ width: '100%', height: '3rem', marginBottom: '1rem' }}>
        <option value=''></option>
        <option value='Life Changing'>Life Changing</option>
        <option value='Favorite Five'>Favorite Five</option>
        <option value='Reccomended To Me'>Reccomended To Me</option>
      </Form.Control>
    </Form.Group>

    <Form.Group>
      <Button type="submit" variant="secondary" onSubmit={(e) => this.props.udateBookProp(e)} style={{ width: '100%' }}>Submit</Button>
    </Form.Group>

  </Form>
</Modal.Body>

<Modal.Footer>
  <Button variant="secondary" onClick={this.props.updatecloseModal} >Close</Button>
</Modal.Footer>

</Modal>
        
            </>
        )
    }
}
export default UpdateForm;