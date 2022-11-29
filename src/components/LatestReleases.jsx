import { Col, Row } from "react-bootstrap";
import horror from "../data/horror.json";
import SingleBook from "./SingleBook";
import AddComment from "./AddComment";
import { useState } from "react";
import CommentArea from "./CommentArea";

const LatestReleases = () => {
  // state = {
  //   selectedBook: null,
  // };

  let [selectedBook, setSelectedBook] = useState(null);

  let changeSelectedBook = (newValue) => {
    console.log("Book clicked, ASIN: " + newValue);
    // this.setState({
    //   selectedBook: newValue,
    // });
    setSelectedBook(newValue);
  };

  return (
    <>
      <Row className="d-flex justify-conent-center text-center">
        <Col>
          <h1 className="text-center mb-3">Horror</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={selectedBook ? 8 : 12} className=" d-flex px-0 ">
          <Row>
            {horror.slice(0, 7).map((book) => (
              <Col className="d-flex" xs={3}>
                <SingleBook
                  book={book}
                  key={book.asin}
                  changeSelectedBook={changeSelectedBook}
                  selectedBook={selectedBook}
                />
              </Col>
            ))}
          </Row>
        </Col>
        {selectedBook && (
          <Col xs={4} className="text-center">
            <h2>Comment Area</h2>
            <CommentArea selectedBook={selectedBook} />
            <AddComment selectedBook={selectedBook} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default LatestReleases;
