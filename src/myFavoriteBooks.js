import React from 'react';
import BestBooks from './BestBooks';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import AddForm from './AddForm';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Carousel, Container, Row, Col, CardColumns, Card, Button, Form, Modal } from 'react-bootstrap';
import UpdateForm from './UpdateForm';
import ShowResult from './ShowResult';

class MyFavoriteBooks extends React.Component {
  state = {
    data: [],
    showUpdate: false,
    showAddMod:false,
    close: true,
    index: 0,
    REname: '',
    Redescription: '',
    status:''

  }
  async componentDidMount() {
    const { user } = this.props.auth0;
    try {
      const bookURL = await fetch(`https://can-of-books-backend-class12.herokuapp.com/books?email=${user.email}`)
      const resultOfBookURl = await bookURL.json();
      this.setState({
        data: resultOfBookURl
      })
    } catch {

    }
  };

  addBook = async (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    const bookObj = {
      name: event.target.name.value,
      description: event.target.description.value,
      email: user.email,
      status:this.state.status
    }
    const newBook = await axios.post(`https://can-of-books-backend-class12.herokuapp.com/addBook`, bookObj)
    console.log(bookObj);
    console.log(newBook.data);
    this.setState({
      data: newBook.data

    })

  };
  openAddModal=()=>{
    this.setState({
      showAddMod: true
    })
  }
  AddcloseModal=()=>{
    this.setState({
      showAddMod: false
    })
  }

  deletFunction = async (index) => {
    const { user } = this.props.auth0;
    const ownerEmail = {
      email: user.email
    }
    let newBookAfterdelet = await axios.delete(`https://can-of-books-backend-class12.herokuapp.com/deletebook/${index}`, { params: ownerEmail })
    this.setState({
      data: newBookAfterdelet.data
    })
  }
  updateShowModal = (index) => {
    this.setState({
      showUpdate: true,
      index: index,
      REname: this.state.data[index].name,
      Redescription: this.state.data[index].description,

    })
  }
  updatecloseModal = () => {
    this.setState({
      showUpdate: false
    })
  }
  udateBookProp = async (event) => {
    event.preventDefault();

    const { user } = this.props.auth0;
    const update = {
      name: event.target.name.value,
      description: event.target.description.value,
      email: user.email,
      status:this.state.status,
    }
    console.log(update)
    const updateBook = await axios.put(`https://can-of-books-backend-class12.herokuapp.com/updateBook/${this.state.index}`, update)
    console.log(updateBook.data)
    this.setState({
      data: updateBook.data,
      showUpdate: false
    })
  }
  updateName = (event) => {
    this.setState({
      REname: event.target.name.value,
    })
  }
  updateDescription = (event) => {
    this.setState({
      Redescription: event.target.name.value,
    })
  }
  UpdateSelectionStatus=(event)=>{
    this.setState({
      status: event.target.value,
    })
  }

  render() {


    return (
      <div >
        <Container>
        <Row>
          <Col>
        <h1 style={{marginLeft:'1.5rem'}}>My Favorite Books</h1>
        <p style={{marginLeft:'1.5rem'}}>This is a collection of my favorite books</p>
        <Button variant="primary" onClick={this.openAddModal} style={{marginBottom:'1rem',width:'30rem',marginLeft:'1.5rem'}}>Add Book</Button>
        <UpdateForm
        show={this.state.showUpdate}
        updatecloseModal={this.updatecloseModal}
        udateBookProp={this.udateBookProp}
        updateName={this.updateName}
        REname={this.state.REname}
        updateDescription={this.updateDescription}
        Redescription={this.state.Redescription}
        UpdateSelectionStatus={this.UpdateSelectionStatus}
        udateBookProp={this.udateBookProp}
        />

        <AddForm
          show={this.state.showAddMod}
          AddcloseModal={this.AddcloseModal}
          UpdateSelectionStatus={this.UpdateSelectionStatus}
          addBookProp={this.addBook}
        />

<CardColumns>
        <Container>
          <Row>
        {this.state.data.map((item, idx) => {
          return (
            <ShowResult
            name={item.name}
            description={item.description}
            deletFunction={this.deletFunction}
            updateShowModal={this.updateShowModal}
            status={item.status}
            idx={idx}
            />
          )
        })}
        </Row>
        </Container>
</CardColumns>
</Col>     
</Row>   
</Container> 
      </div>

    )
  }
}

export default withAuth0(MyFavoriteBooks);
