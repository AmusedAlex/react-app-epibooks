import { Col, Row } from "react-bootstrap";
import horror from "../data/horror.json";
import SingleBook from "./SingleBook";
import AddComment from "./AddComment";
import { Component } from "react";
import CommentArea from "./CommentArea";

class LatestReleases extends Component {
  state = {
    selectedBook: null,
  };

  changeSelectedBook = (newValue) => {
    console.log("Book clicked, ASIN: " + newValue);
    this.setState({
      selectedBook: newValue,
    });
  };

  render() {
    return (
      <>
        <Row className="d-flex justify-conent-center text-center">
          <Col>
            <h1 className="text-center mb-3">Horror</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={this.state.selectedBook ? 8 : 12} className=" d-flex px-0 ">
            <Row>
              {horror.slice(0, 7).map((book) => (
                <Col className="d-flex" xs={3}>
                  <SingleBook
                    book={book}
                    key={book.asin}
                    changeSelectedBook={this.changeSelectedBook}
                    selectedBook={this.state.selectedBook}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          {this.state.selectedBook && (
            <Col xs={4}>
              {/* {horror.slice(0, 1).map((book) => ( */}
              <CommentArea selectedBook={this.state.selectedBook} />
              <AddComment selectedBook={this.state.selectedBook} />
              {/* ))} */}
              <div>Comment Area</div>
            </Col>
          )}
        </Row>
      </>
    );
  }
}

export default LatestReleases;
