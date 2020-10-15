import React from "react";
import "./styles.css";

export const CardText = ({ children, ...restProps }) => {
  return (
    <div className="text-section" {...restProps}>
      {children}
    </div>
  );
};
