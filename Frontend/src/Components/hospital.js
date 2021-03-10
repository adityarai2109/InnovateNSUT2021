import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { Button, Card, Table } from "react-bootstrap";
import SocialFollow from "../SocialFollow";
import Bookanappointment from "./Bookanappointment";

function hospital() {
  return (
    <div className="hospital">
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="navbarheading" href="#home">
            Health+
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <div className="snb">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="danger">Emergency</Button>
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
        <div className="maps">
          <h2 className="tableheadings">Hospitals name </h2>
          <div className="map">
            <iframe
              src="https://maps.google.com/maps?width=700&height=440&hl=en&q=London%2C%20United%20Kingdom+(eatrs)&ie=UTF8&t=&z=10&iwloc=B&output=embed"
              scrolling="no"
              width={800}
              height={600}
              frameBorder={0}
              title={"ourMap"}

            />

            <Card style={{ width: "20vw", height: "600px" }}>
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/random/600x500"
              />
              <Card.Body>
                <Card.Title>Hospital's name</Card.Title>
                <Card.Text>
                  <ul className="hospitaldesc" style={{ textAlign: "left" }}>
                    <li>
                      Description : Some quick example text to build on the card
                      title and make up the bulk of the card's content.
                    </li>
                    <li>Address : esgrtdh</li>
                    <li>Email : fdzgxf@gxfhgcn.com</li>
                    <li>Contact : 4325635</li>
                  </ul>
                </Card.Text>
                <Button variant="success">Book an appointment</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="beds">
        <Container>
          <Card>
            <Card.Header className="tableheadings" style={{ color: "black" }}>
              Beds Status
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Floor</th>
                    <th>Total Beds</th>
                    <th>Occupied Beds</th>
                    <th>ICU Beds</th>
                    <th>COVID-19 Beds</th>
                    <th>Available Beds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>100</td>
                    <td>30</td>
                    <td>10</td>
                    <td>500</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>100</td>
                    <td>30</td>
                    <td>10</td>
                    <td>500</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>100</td>
                    <td>30</td>
                    <td>10</td>
                    <td>500</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <Bookanappointment />
      {/* footer */}
      <div className="footer">
        {/* Footer */}
        <footer className="bg-dark text-center text-white">
          {/* Grid container */}
          <div className="container p-4">
            {/* Section: Form */}
            <section className>
              <form action>
                {/*Grid row*/}
                <div className="row d-flex justify-content-center">
                  {/*Grid column*/}
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-5 col-12">
                    {/* Email input */}
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        className="form-control"
                        placeholder="Email address..."
                      />
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-auto">
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary mb-4">
                      Subscribe
                    </button>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
              </form>
            </section>
            {/* Section: Form */}
            {/* Section: Text */}
            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </section>
            {/* Section: Text */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <SocialFollow />
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              Health+
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    </div>
  );
}
export default hospital;
