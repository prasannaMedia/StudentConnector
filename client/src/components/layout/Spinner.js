import React from "react";
import spinner from "../../img/805.gif";

export default () => {
  return (
    <div className="container mt0">
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
