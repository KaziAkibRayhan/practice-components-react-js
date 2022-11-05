import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Product = (props) => {
  const { title, price, description, image } = props.product;
  return (
    <div>
      <CardGroup
        style={{
          width: "300px",
        }}
      >
        <Card>
          <Card.Img variant="top" src={image} className="img-fluid" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description ? description.slice(0, 100) + "..." : "No Data"}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Price: {price}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Product;
