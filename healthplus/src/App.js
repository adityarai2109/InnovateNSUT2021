import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Carousel, Accordion, Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="navbarheading" href="#home">
            Health+
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <div className="snb">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Form inline>
              <Button variant="outline-primary" className="mr-2">
                Log In
              </Button>
              <Button variant="outline-light">Sign Up</Button>
            </Form>
          </div>
        </Navbar>
      </>

      <div className="famousHospitals">
        <div className="head">Famous Hospitals Near You</div>
        <div className="FHcontainer">
          {/* <div className="category"> Heart </div> */}
          <Container>
            <Table striped bordered hover className="text-dark">
              <thead>
                <tr>
                  <th>Name </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Container>
          <div className="hospitaltable">
            <Carousel>
              <Carousel.Item interval={1000} className="carouselitem">
                <Container>
                  <Table striped bordered hover className="text-dark">
                    <thead>
                      <tr>
                        <th>Name </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </Carousel.Item>
              <Carousel.Item interval={1000} className="carouselitem">
                <img
                  className="d-block w-60 h-40"
                  src="https://source.unsplash.com/random/400x300"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000} className="carouselitem">
                <img
                  className="d-block w-60 h-40"
                  src="https://source.unsplash.com/random/400x300"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="pricing"></div>
      </div>
    </div>
  );
}

export default App;
