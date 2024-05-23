import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function B7() {
  return (
    <div>
      B7
      <ToastContainer className="position-static">
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Cảnh báo</strong>
          </Toast.Header>
          <Toast.Body>Lỗi kết nối đến máy chủ</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
