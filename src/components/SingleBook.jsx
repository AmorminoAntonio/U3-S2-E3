import { Card, Col, Container, Row } from "react-bootstrap";


const SingleBook = (props) => {
  return (
    <Container className="mb-5 mt-5">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Card>
            <Card.Img variant="top" src={props.book.img} />
            <Card.Body>
              <Card.Title>{props.book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
