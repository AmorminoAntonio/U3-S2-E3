import { Card, Col, Container, Row } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Container className="mb-5 mt-5">
      <Row className="justify-content-center">
        <Col>
          <Card className="shadow">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
