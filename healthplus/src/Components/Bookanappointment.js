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
            borderRadius: "5px",
          }}
        >
          <Form variant="dark">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" required />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" required />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                  <option>Endodontics</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDoctor">
                <Form.Label>Doctor available</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                  <option>Dr. ABC XYZ</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Time Slot</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." required>
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

            <Form.Group controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Specify your reason to visit" />
            </Form.Group>

            <Button variant="success" type="submit">
              Book
            </Button>
          </Form>
        </FormGroup>
      </Container>
    </div>
  );
}
