import React from "react";
import { Form, Col, Button, Container, FormGroup } from "react-bootstrap";

export default function Bookanappointment() {
  return (
    <div>
      <Container>
        <FormGroup
          variant="dark"
          style={{
            backgroundColor: "white",
            padding: "2rem",
            marginTop: "2rem",
          }}
        >
          <Form variant="dark">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="password" placeholder="Phone Number" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridProblem">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Specify your reason to visit" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Time Slot</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                  <option>8:00 AM to 8:30AM</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button variant="success" type="submit">
              Book
            </Button>
          </Form>
        </FormGroup>
      </Container>
    </div>
  );
}
