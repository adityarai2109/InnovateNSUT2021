import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import SocialFollow from "../SocialFollow";
import "../App.js";
//import ImageCarousel from "../ImageCarousel";

export default function HospitalUser() {
  let [BedStatus, SetBedStatus] = useState({
    Floor: "",
    TotalBeds: "",
    OccupiedBeds: "",
    ICUBeds: "",
    COVIDBeds: "",
    AvailableBeds: "",
  });

  function InputEvent3(event) {
    const { name, value } = event.target;

    SetBedStatus((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

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
          <h2 className="tableheadings">Hospitals name(Users) </h2>
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

      {/* <ImageCarousel/> */}

      <div className="beds">
        <Container>
          <Card>
            <Card.Header className="tableheadings" style={{ color: "black" }}>
              Beds Status
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Row className="bedStatus">
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Floor</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      name="Floor"
                      value={BedStatus.Floor}
                      onChange={InputEvent3}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Total Beds</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      name="TotalBeds"
                      value={BedStatus.TotalBeds}
                      onChange={InputEvent3}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Occupied Beds</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      name="OccupiedBeds"
                      value={BedStatus.OccupiedBeds}
                      onChange={InputEvent3}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>ICU Beds</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      name="ICUBeds"
                      value={BedStatus.ICUBeds}
                      onChange={InputEvent3}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>COVID-19 Beds</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      name="COVIDBeds"
                      value={BedStatus.COVIDBeds}
                      onChange={InputEvent3}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Available Beds</Form.Label>
                    <Form.Control
                      as="select"
                      custom
                      name="AvailableBeds"
                      value={BedStatus.AvailableBeds}
                      onChange={InputEvent3}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form>
              <Button variant="primary" size="lg" type="submit">
                Save
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <div className="pricing">
        <Container>
          <Card>
            <Card.Header className="tableheadings" style={{ color: "black" }}>
              Pricing
            </Card.Header>
            <Card.Body>
              <Container>
                <Form.Group>
                  <Form.Control as="select">
                    <option>Beds </option>
                    <i>1190</i>
                    <option> ICU</option>
                    <option>Default select </option>
                    <option>Default select </option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select">
                    <option>surgery</option>
                  </Form.Control>
                </Form.Group>
              </Container>

              <Button variant="primary" size="lg" type="submit">
                Save
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <div className="ScheduledAppointments tableheadings">
        Scheduled Appointments
      </div>
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
            ?? 2020 Copyright:
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
