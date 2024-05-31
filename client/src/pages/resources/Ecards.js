import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { contents1 } from "./content/content.js";
import "./ecards.css";

function ECards() {
  const cardKeys = Object.keys(contents1);

  const cardComponents = cardKeys.map((cardKey) => {
    const { title, tags, description, imageUrl } = contents1[cardKey]; // Assuming imageUrl is the URL of the image

    return (
      <div key={cardKey} className="col-md-4 mb-4">
        {/* Bootstrap's col-md-4 sets 3 cards per row on medium devices */}
        <Card>
          {/* Include the image */}
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <div
              style={{
                width: "5px",
                height: "20px",
                backgroundColor: "violet",
                float: "left",
                marginRight: "10px",
              }}
            ></div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              variant="primary"
              className="registerButton1" // Add this class for animations
              style={{
                backgroundColor: "violet",
                color: "black",
                borderRadius: "0px",
                borderColor: "black",
              }}
            >
              LEARN MORE
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{cardComponents}</div>
    </div>
  );
}

export default ECards;
