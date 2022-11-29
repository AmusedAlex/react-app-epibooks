import { useState, useEffect } from "react";
import { Row, Col, ListGroup, Spinner } from "react-bootstrap";
import DeleteButton from "./DeleteButton";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: true,
  //   isError: false,
  //   commentId: "",
  // };

  let [comments, setComments] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let [commentId, setCommentId] = useState("");

  // !let componentDidMount = () => {
  //   fetchComments();
  // };

  useEffect(() => {
    console.log("componentDidMount");
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // !let componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.selectedBook !== props.selectedBook) {
  //     fetchComments();
  //   }
  // };

  useEffect(() => {
    console.log("componentDidUpdate");
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.selectedBook]);

  let fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.selectedBook}`,
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
          setComments(data);
          setIsLoading(false);
        }, 1000);
      } else {
        console.log("Fetching failed!");
        setTimeout(() => {
          setIsLoading(false);
          setIsError(true);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div>
      {isLoading && (
        <Spinner animation="border" role="status" variant="danger"></Spinner>
      )}
      {props.selectedBook && (
        <ListGroup>
          {comments.map((c) => (
            <ListGroup.Item key={c._id}>
              <Row>
                <Col className="text-center">
                  {c.rate} Stars | {c.comment}
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <DeleteButton
                    fetchComments={fetchComments}
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
};

export default CommentArea;
