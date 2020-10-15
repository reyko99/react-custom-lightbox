import React from "react";

export const CardText = ({ children, ...restProps }) => {
  return (
    <div className="text-section" {...restProps}>
      {children}
    </div>
  );
};
