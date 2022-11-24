import { Component } from "react";
import { ListGroup, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
    commentId: "",
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmODZkMWQ4MzkzNTAwMTVlOGM1M2MiLCJpYXQiOjE2NjkzMDE5NjksImV4cCI6MTY3MDUxMTU2OX0.YaQdMFZU3MeqxnCSHlo-NBTQ5kRZipYzklw5N2EkFdA",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("🚀 data", data);
        setTimeout(() => {
          this.setState({
            comments: data,
            isLoading: false,
          });
        }, 1000);
      } else {
        console.log("Fetching failed!");
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isError: true,
          });
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.fetchComments(this.props.asin);
  }

  render() {
    return (
      <div>
        {this.state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {this.props.clickedBook && (
          <ListGroup>
            {this.state.comments.map((c) => (
              <ListGroup.Item>{c.comment}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

export default CommentArea;
