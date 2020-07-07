import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contactForm.css";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "24rem" }} className="mx-auto card-contact">
        <Card.Body>
          <Card.Title>Contact Page</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Shoot me a message!
          </Card.Subtitle>
          <Form>
            <Form.Group controlId="personEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" placeholder="..." autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="personName">
              <Form.Label>Name (Optional): </Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group controlId="personSubject">
              <Form.Label>Subject: </Form.Label>
              <Form.Control
                placeholder="..."
                autoComplete="off"
                required
                style={{ resize: "none" }}
              />
            </Form.Group>
            <Form.Group controlId="personText">
              <Form.Label>Message: </Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                placeholder="..."
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
