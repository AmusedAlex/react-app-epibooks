import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    elementId: `${this.props.book.asin}`,
  };

  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      ...this.state, // This creates a copy of all reservation properties
      [fieldToSet]: value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault(); // This will prevent page from refreshing
    try {
      fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmODZkMWQ4MzkzNTAwMTVlOGM1M2MiLCJpYXQiOjE2NjkzMDE5NjksImV4cCI6MTY3MDUxMTU2OX0.YaQdMFZU3MeqxnCSHlo-NBTQ5kRZipYzklw5N2EkFdA",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            alert("Comment successfully saved!");
            this.setState({
              comment: "",
              rate: 1,
              elementId: `${this.props.book.asin}`,
            });
          } else {
            alert("Something went wrong");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitHandler}>
        <Form.Group>
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            placeholder="Write something"
            required
            value={this.state.comment}
            onChange={(e) => this.onChangeHandler(e.target.value, "comment")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select your Rating</Form.Label>
          <Form.Control
            as="select"
            value={this.state.rate}
            onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
          >
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
