// import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
// import fantasy from "./books/fantasy.json";
// import history from "./books/history.json";
// import horror from "./books/horror.json";
// import romance from "./books/romance.json";
// import scifi from "./books/scifi.json";
// import { Component } from "react";

// class AllTheBooks extends Component {
//   state = {
//     books: fantasy
//   };
//   render() {
//     return (
//       <Container className="mb-5 mt-5">
//         <div>
//           <Button
//             onClick={() => this.setState({ books: fantasy })}
//             variant="primary"
//           >
//             fantasy
//           </Button>
//           <Button
//             onClick={() => this.setState({ books: history })}
//             variant="info"
//           >
//             history
//           </Button>
//           <Button
//             onClick={() => this.setState({ books: horror })}
//             variant="secondary"
//           >
//             horror
//           </Button>
//           <Button
//             onClick={() => this.setState({ books: romance })}
//             variant="warning"
//           >
//             romance
//           </Button>
//           <Button
//             onClick={() => this.setState({ books: scifi })}
//             variant="success"
//           >
//             scifi
//           </Button>
//         </div>
//         <Row sm={1} md={2} lg={3} xl={4} className="gy-4 gx-4">
//           {this.state.books.map((book) => (
//             <Col key={book.asin}>
//               <Card className="shadow p-3 mb-5 bg-light rounded">
//                 <Card.Img variant="top" src={book.img} />
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <Card.Text>
//                     <Badge>{book.price}€</Badge>
//                   </Card.Text>
//                   <Button variant="primary">{book.category}</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     );
//   }
// }

// export default AllTheBooks;
