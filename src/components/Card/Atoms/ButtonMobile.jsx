import React from "react";

export const ButtonMobile = ({ action, direction = "left" }) => {
  return (
    <div
      onClick={action}
      className={`buttonMobile ${
        direction === "left" ? "buttonMobileLeft" : "buttonMobileRight"
      }`}
    >
      {direction === "left" ? (
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
        </svg>
      )}
    </div>
  );
};
