import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contactForm.css";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "24rem" }} className="mx-auto">
        <Card.Body>
          <Card.Title>Contact Page</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Shoot me a message!
          </Card.Subtitle>
          <Form>
            <Form.Group controlId="personName">
              <Form.Label>Your Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group controlId="personEmail">
              <Form.Label>Your Email (Optional): </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="personText">
              <Form.Label>Your Message: </Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="Enter message"
                autoComplete="off"
                required
                style={{ resize: "none" }}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Button variant="primary" className="sbmt-btn mx-auto">
          Submit
        </Button>
      </Card>
    );
  }
}

export default ContactForm;
