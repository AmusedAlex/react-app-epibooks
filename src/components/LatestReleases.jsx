import { Row, Col, Card } from "react-bootstrap";
import horror from "../data/horror.json";

const LatestReleases = () => (
  <div>
    <h1 className="text-center mb-3">Horror</h1>
    <Row>
      {horror.map((book) => (
        <Col
          xs={6}
          md={4}
          lg={3}
          xl={2}
          className="d-flex justify-content-center px-0"
          key={book.asin}
        >
          <Card className="mb-4 " style={{ width: "17rem" }}>
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
