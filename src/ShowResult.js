import React from "react";
import { Carousel, Container, Row, Col, CardColumns, Card, Button, Form, Modal } from 'react-bootstrap';


class ShowResult extends React.Component{
    render(){
        return(
            <>
            <Col>
            <Card style={{ width: '25rem' ,marginBottom:'1rem'}}>
              <Card.Header style={{backgroundColor: 'pink'}} >
              <Card.Title>📖🔰📖</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text style={{backgroundColor: 'rgba(96, 96, 96,.8) '}}>{this.props.description}</Card.Text>
                <Button variant="primary" onClick={() => this.props.updateShowModal(this.props.idx)} style={{ width: '100%' ,height:'2rem',marginBottom:'.5rem'}}>Update</Button>
                <Button variant="primary" onClick={() => this.props.deletFunction(this.props.idx)} style={{ width: '100%' ,height:'2rem',backgroundColor: 'gray'}}>Delete</Button>
              </Card.Body>
              <Card.Footer style={{backgroundColor: 'pink'}}>{this.props.status}</Card.Footer>
            </Card>
            </Col>
            </>

        )
    }
}
export default ShowResult;