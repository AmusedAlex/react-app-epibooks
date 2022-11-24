import { Row } from "react-bootstrap";
import horror from "../data/horror.json";
import SingleBook from "./SingleBook";
import AddComment from "./AddComment";

const LatestReleases = () => (
  <div>
    <h1 className="text-center mb-3">Horror</h1>
    <Row>
      {horror.slice(0, 7).map((book) => (
        <>
          <SingleBook book={book} key={book.asin} />
          <AddComment book={book} key={`AddComment${book.asin}`} />
        </>
      ))}
    </Row>
  </div>
);

export default LatestReleases;
