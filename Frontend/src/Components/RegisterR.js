import React from "react";
import { Container, Card } from "react-bootstrap";

export default function RegisterR() {
    return (
        <div>
            <Container>
                <Card>
                    <Container>
                        <form action="/register" method="POST">
                          <Card.Header style={{backgroundColor:"white"}}>

                            <h3>Register</h3>
                          </Card.Header>
                            <Container style={{padding:"2rem"}}>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input
                                    type="username"
                                    className="form-control"
                                    placeholder="Username"
                                    name="Enter Username"
                                />
                            </div>
                            <div className="form-group">
                                <label for="fname">First name</label>
                                <input
                                    type="fname"
                                    className="form-control"
                                    placeholder="First name"
                                    name="fname"
                                />
                            </div>

                            <div className="form-group">
                                <label for="lname">Last name</label>
                                <input
                                    type="lname"
                                    className="form-control"
                                    placeholder="Last name"
                                    name="lname"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                />
                            </div>
                            <div className="form-group">
                                <label for="bgroup">Blood Group</label>
                                <input
                                    type="bgroup"
                                    className="form-control"
                                    placeholder="Blood Group"
                                    name="bgroup"
                                />
                            </div>
                            <div className="form-group">
                                <label for="phn">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phn"
                                />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    name="address"
                                />
                            </div>
                            

                            <div className="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-dark btn-lg btn-block"
                            >
                                Register
                            </button>
                            <p className="forgot-password text-right">
                                Already registered <a href="/login">log in?</a>
                            </p>
                            </Container>
                        </form>
                    </Container>
                </Card>
            </Container>
        </div>
    );
}
