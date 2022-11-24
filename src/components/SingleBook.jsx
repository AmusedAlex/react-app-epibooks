import { Component } from "react";
import { Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    clickedBook: null,
  };

  render() {
    return (
      <Col xs={6} md={4} lg={3} className="d-flex justify-content-center px-0">
        <Card className="mb-4 " style={{ width: "17rem" }}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ height: "30rem" }}
            onClick={() => {
              this.state.clickedBook
                ? this.setState({
                    clickedBook: false,
                  })
                : this.setState({
                    clickedBook: true,
                  });
            }}
          />
          <Card.Body className="text-center">
            <CommentArea
              clickedBook={this.state.clickedBook}
              asin={this.props.book.asin}
            />
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
