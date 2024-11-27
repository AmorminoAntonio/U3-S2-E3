import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = () => (
  <>
    <Alert variant="success" className="d-flex justify-content-center">
      <Alert.Link href="#">link d`esempio.</Alert.Link> Give it a click if you
      like.
    </Alert>
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={4}>
        <h1 className="display-1 fw-bold text-bg-primary px-2 py-2 rounded-pill text-center">Benvenuto</h1>
          <h3 className="display-5 fs-3 text-center">
            Qui puoi trovare tutti i <strong>best seller</strong> del momento.
          </h3>
        </Col>
      </Row>
    </Container>
  </>
);

export default Welcome;
