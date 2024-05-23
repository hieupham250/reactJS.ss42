import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function B2() {
  return (
    <div>
      B2
      <InputGroup size="lg" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Input cỡ lớn"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Input cỡ trung bình"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Input cỡ nhỏ"
        />
      </InputGroup>
    </div>
  );
}
