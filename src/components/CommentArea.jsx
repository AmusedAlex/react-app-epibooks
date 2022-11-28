import { Component } from "react";
import { Row, Col, ListGroup, Spinner } from "react-bootstrap";
import DeleteButton from "./DeleteButton";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
    commentId: "",
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.selectedBook !== this.props.selectedBook) {
      this.fetchComments();
    }
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.selectedBook}`,
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

  render() {
    return (
      <div>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="danger"></Spinner>
        )}
        {this.props.selectedBook && (
          <ListGroup>
            {this.state.comments.map((c) => (
              <ListGroup.Item key={c._id}>
                <Row>
                  <Col className="text-center">
                    {c.rate} Stars | {c.comment}
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <DeleteButton
                      fetchComments={this.fetchComments}
                      commentId={c._id}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

export default CommentArea;
