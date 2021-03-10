import React from "react";
import { Container, Card } from "react-bootstrap";

export default function loginR() {
    return (
        <div>
            <Container>
                <Card>
                    <Container>
                        <form action="/login" method="post">
                            <Card.Header style={{ backgroundColor: "white" }}>
                                <h3>Log in</h3>
                            </Card.Header>
                            <Container style={{ padding: "2rem" }}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        type="username"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter your Username"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                >
                                    Log in
                                </button>
                                <p class="text-center">
                                    <a href="/register">
                                        Don't have an account? Register here
                                    </a>
                                </p>
                            </Container>
                        </form>
                    </Container>
                </Card>
            </Container>
        </div>
    );
}
