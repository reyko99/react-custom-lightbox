import React from "react";

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
