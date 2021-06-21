import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
class BestBooks extends React.Component {

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
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <Container style={{ width: '35rem' }}>
                    <Row>
                        <Col>
                            <Carousel style={{ width: '35rem' }}>
                                {data.map((item) => {
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

                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withAuth0(BestBooks)