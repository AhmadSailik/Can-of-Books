import React from 'react';
import BestBooks from './BestBooks';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import AddForm from './AddForm';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Carousel, Container, Row, Col,CardColumns,Card,Button } from 'react-bootstrap';


class MyFavoriteBooks extends React.Component {
  state = {
    data: []
}
async componentDidMount() {
    const { user } = this.props.auth0;
    try {
        const bookURL = await fetch(`http://localhost:3001/books?email=${user.email}`)
        const resultOfBookURl = await bookURL.json();
        // console.log(resultOfBookURl)
        this.setState({
            data: resultOfBookURl
        })
    } catch {

    }
};
 
  addBook=async(event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const bookObj={
      name:event.target.name.value,
      description:event.target.description.value,
      email:user.email
    }
const newBook= await axios.post(`http://localhost:3001/addBook`,bookObj)
console.log('nnnn');
console.log(newBook.data);
this.setState({
  data:newBook.data
})

};
deletFunction=async (index)=>{
  
  const { user } = this.props.auth0;
  const ownerEmail = {
    email :user.email
  }
  let newBookAfterdelet = await axios.delete(`http://localhost:3001/deletebook/${index}`,{ params: ownerEmail })
  // console.log('ahmad')
  // console.log(newBookAfterdelet.data)

  this.setState({
    data:newBookAfterdelet.data
  })
}




  
  render (){
  
    return (
      <div  >
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <AddForm
        addBookProp={this.addBook}
        />
        {/* <button onClick={()=>this.props.deleteCatProps(idx)}>Delete</button> */}
    {/* <BestBooks/> */}

    <CardColumns>
    {this.state.data.map((item,idx) => {
      return (
    <Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>{item.name}</Card.Title>
  <Card.Text>
  {item.description}
  </Card.Text>
  <Button variant="primary" onClick={()=>this.deletFunction(idx)} >Delete</Button>
</Card.Body>
</Card>
    )})}
    </CardColumns>
   

    {/* <Container style={{ width: '35rem' }}>
                    <Row>
                        <Col> */}
                            {/* <Carousel style={{ width: '35rem' }}>
                                {this.state.data.map((item) => {
                                    return (
                                        <Carousel.Item interval={1000}>
                                            <img
                                                className="d-block w-100"
                                                src={item.img}
                                                alt="First slide"

                                            />
                                            <Carousel.Caption style={{ backgroundColor: 'rgba(96, 96, 96,.8) ' }}>
                                                <h3>{item.name}</h3>
                                                <p>{item.description}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>

                                    )
                                })}

                            </Carousel> */}
                        {/* </Col>
                    </Row>
                </Container> */}
      </div>
      
    )
  }
}

export default withAuth0(MyFavoriteBooks);
