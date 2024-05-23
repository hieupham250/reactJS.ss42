import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function B10() {
  return (
    <div>
      B10
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>Hà Nội</td>
            <td>
              <Button variant="warning" type="submit">
                sửa
              </Button>
              <Button
                variant="danger"
                type="submit"
                style={{ marginLeft: "10px" }}
              >
                xóa
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nguyễn văn B</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>Đà Nẵng</td>
            <td>
              <Button variant="warning" type="submit">
                sửa
              </Button>
              <Button
                variant="danger"
                type="submit"
                style={{ marginLeft: "10px" }}
              >
                xóa
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nguyễn văn C</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>HCM</td>
            <td>
              <Button variant="warning" type="submit">
                sửa
              </Button>
              <Button
                variant="danger"
                type="submit"
                style={{ marginLeft: "10px" }}
              >
                xóa
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
