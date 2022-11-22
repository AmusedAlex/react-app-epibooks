import { Row, Col, Card } from "react-bootstrap";
import horror from "../data/horror.json";

const LatestReleases = () => (
  <div>
    <h1 className="text-center mb-3">Horror</h1>
    <Row>
      {horror.map((book) => (
        <Col xs={3}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={book.img}
              style={{ height: "30rem" }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default LatestReleases;
