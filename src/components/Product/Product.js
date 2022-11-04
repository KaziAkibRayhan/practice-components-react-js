import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Product = (props) => {
  const { title, price, description, image } = props.product;
  return (
    <Container>
      <Row>
        <Col>
          <CardGroup
            style={{
              width: "500px",
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Price: {price}</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
