import React, { useState } from "react";
import { Form, Col, Button, Container, FormGroup, Card } from "react-bootstrap";

export default function Bookanappointment() {


    let [AppointmentForm, SetAppointmentForm] = useState({
        Name : "",
        PhoneNo : "",
        Email : "",
        Department : "",
        Doctor : "",
        TimeSlot : "",
        Description : ""
    });

    function InputEvent2(event)
    {
        const {name, value} = event.target;

        SetAppointmentForm( (preValue) => {
            return{
                ...preValue,
                [name] : value,
            };
        } )
    }


  return (
    <div>
      <Container>
        <Card>
          <Card.Header className="tableheadings" style={{ color: "black" }}>
            Book an Appointment
          </Card.Header>
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
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      required
                      name="Name"
                      value={AppointmentForm.Name}
                      onChange={InputEvent2}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      required
                      name="PhoneNo"
                      value={AppointmentForm.PhoneNo}
                      onChange={InputEvent2}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Enter email" 
                    name="Email"
                      value={AppointmentForm.Email}
                      onChange={InputEvent2}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select" 
                    defaultValue="Choose..."
                    name="Department"
                      value={AppointmentForm.Department}
                      onChange={InputEvent2}
                    >
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
                    <Form.Control as="select"
                     defaultValue="Choose..."
                     name="Doctor"
                      value={AppointmentForm.Doctor}
                      onChange={InputEvent2}
                     >
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
                    <Form.Control as="select" 
                    defaultValue="Choose..." required
                    name="TimeSlot"
                      value={AppointmentForm.TimeSlot}
                      onChange={InputEvent2}
                    >
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
                  <Form.Control placeholder="Specify your reason to visit" 
                  name="Description"
                  value={AppointmentForm.Description}
                  onChange={InputEvent2}
                  />
                </Form.Group>

                <Button variant="primary" size="lg" type="submit">
                Book
                </Button>
              </Form>
            </FormGroup>
          </Container>
        </Card>
      </Container>
    </div>
  );
}