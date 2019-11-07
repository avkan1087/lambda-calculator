import React from "react";

const OperatorButton = (props) => {
  return (
    <div className="button button--operator">
      {props.value.char}
    </div>
  );
};


export default OperatorButton
