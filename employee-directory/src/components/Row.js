import React from "react";

function Row(props) {
  console.log(props);

  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
      {props.children}
    </div>
  );
}

export default Row;