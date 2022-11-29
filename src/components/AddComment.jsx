import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   comment: "",
  //   rate: 1,
  //   elementId: `${this.props.selectedBook}`,
  // };

  let [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: `${props.selectedBook}`,
  });
  // let [rate, setRate] = useState(1)
  // let [elementId, setElementId] = useState(props.selectedBook)

  let onChangeHandler = (value, fieldToSet) => {
    setComment({
      ...comment, //This creates a copy of the fields
      [fieldToSet]: value,
    });
  };

  let onSubmitHandler = (e) => {
    e.preventDefault(); // This will prevent page from refreshing
    try {
      fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
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
            setComment({
              comment: "",
              rate: 1,
              elementId: `${props.selectedBook}`,
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

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group>
        <Form.Label>Your Comment</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows={3}
          placeholder="Write something"
          required
          value={comment.comment}
          onChange={(e) => onChangeHandler(e.target.value, "comment")}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Select your Rating</Form.Label>
        <Form.Control
          as="select"
          value={comment.rate}
          onChange={(e) => onChangeHandler(e.target.value, "rate")}
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
};

export default AddComment;
