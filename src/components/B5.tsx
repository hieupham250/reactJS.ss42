import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function B5() {
  return (
    <div>
      B5
      <Alert variant="success" dismissible>
        <p>Thêm tài khoản thành công</p>
      </Alert>
      <Alert variant="danger" dismissible>
        <p>Thêm mới tài khoản thất bại</p>
      </Alert>
      <Alert variant="warning" dismissible>
        <p>Tên không được để trống</p>
      </Alert>
    </div>
  );
}
