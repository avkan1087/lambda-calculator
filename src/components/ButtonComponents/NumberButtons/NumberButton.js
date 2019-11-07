import React from "react";

const NumberButton = (props) => {
  if (props.value === '0') {
    var extraClassname = 'button-big';
  } else {
    var extraClassname = '';
  }

  let updateCalculator = ()=> {
    let newValue;
    if (props.calcValue == 0) {
      newValue = props.value;
    } else {
      newValue = props.calcValue + props.value;
    }
    props.setCalcValue(newValue)
  }

  return (
    <div className={`button button--number ${extraClassname}`} onClick={updateCalculator}>
      {props.value}
    </div>
  );
};


export default NumberButton
