import React from "react";
import Row from "./Row"; 

function Chart(props) {
  console.log(props);

  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
      {props.children}
    </div>
  );
}

export default Chart;