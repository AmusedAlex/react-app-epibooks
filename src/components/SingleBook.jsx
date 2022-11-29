import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Card
      className="mb-4 cardElement"
      onClick={() => props.changeSelectedBook(props.book.asin)}
    >
      <Card.Img variant="top" src={props.book.img} style={{ height: "100%" }} />
    </Card>
  );
};
export default SingleBook;
