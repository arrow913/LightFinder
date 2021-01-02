import React from "react";
import "./style.css";

function addBtn(props) {
  return (
    <span className="add-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default addBtn;
