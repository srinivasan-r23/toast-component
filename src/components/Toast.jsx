import React, { useEffect } from "react";

const Toast = (props) => {


  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        width: "75%",
        padding: "24px",
        margin: "24px",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p>{props?.msg}</p>
      <button onClick={props?.onClose}>X</button>
    </div>
  );
};

export default Toast;
