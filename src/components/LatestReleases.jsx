import { Row } from "react-bootstrap";
import horror from "../data/horror.json";
import SingleBook from "./SingleBook";

const LatestReleases = () => (
  <div>
    <h1 className="text-center mb-3">Horror</h1>
    <Row>
      {horror.slice(0, 10).map((book) => (
        <SingleBook book={book} key={book.asin} />
      ))}
    </Row>
  </div>
);

export default LatestReleases;
