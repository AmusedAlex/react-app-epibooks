import { Row, Col, Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <div>
    <Row>
      <Col>
        <Jumbotron className="fluid text-center">
          <h1>Hello, Readers!</h1>
          <p>This is a simple BookStore built with React and Bootstrap.</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  </div>
);

export default Welcome;
