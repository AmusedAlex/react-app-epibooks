import { Component } from "react";
import { Button } from "react-bootstrap";

class DeleteButton extends Component {
  onDeleteHandler = async (e) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmODZkMWQ4MzkzNTAwMTVlOGM1M2MiLCJpYXQiOjE2NjkzMDE5NjksImV4cCI6MTY3MDUxMTU2OX0.YaQdMFZU3MeqxnCSHlo-NBTQ5kRZipYzklw5N2EkFdA",
          },
        }
      );
      if (response.ok) {
        alert("Comment sucessfully deleted");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Button
        variant="danger"
        key={this.props.commentId}
        onClick={(e) => this.onDeleteHandler()}
      >
        Delete Comment
      </Button>
    );
  }
}

export default DeleteButton;
