import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Your Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select your Rating</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit Comment
        </Button>
      </Form>
    );
  }
}

export default AddComment;
