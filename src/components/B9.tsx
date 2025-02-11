import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function B9() {
  return (
    <div>
      B9
      <h1 style={{ textAlign: "center" }}>Đăng ký tài khoản</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Thành phố</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Hà Nội</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Quận</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Thanh Xuân</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Mã bưu điện</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="primary" type="submit" style={{ width: "500px" }}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
