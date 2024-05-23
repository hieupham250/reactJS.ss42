import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function B3() {
  return (
    <div>
      B3
      <div style={{ display: "flex", gap: "15px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.tgdd.vn/Products/Images/44/313084/hp-15s-fq5229tu-i3-8u237pa-glr-1.jpg"
          />
          <Card.Body>
            <Card.Title>
              Laptop HP 15s fq5229TU i3 1215U/8GB/512GB/Win11 (8U237PA){" "}
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div>
              <Button variant="primary">Xem chi tiết</Button>
              <span style={{ marginLeft: "20px" }}>30.000.000 đ</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.tgdd.vn/Products/Images/44/313084/hp-15s-fq5229tu-i3-8u237pa-glr-1.jpg"
          />
          <Card.Body>
            <Card.Title>
              Laptop HP 15s fq5229TU i3 1215U/8GB/512GB/Win11 (8U237PA){" "}
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Xem chi tiết</Button>
            <span style={{ marginLeft: "20px" }}>30.000.000 đ</span>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
