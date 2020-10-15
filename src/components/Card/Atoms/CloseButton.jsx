import React from "react";
import "./styles.css";

export const CloseButton = ({ action, ...restProps }) => {
  return (
    <div
      role="button"
      tabIndex="0"
      className="closeButton"
      onClick={action}
      {...restProps}
    >
      x
    </div>
  );
};
