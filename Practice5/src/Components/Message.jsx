import React, { memo, useMemo } from "react";

const Message = ({ count,onHandleIncrement }) => {
  console.log("Msg rendering");

  const calculatedNumber = useMemo(() => {
    let number=0
  for (let index = 0; index < 900000000; index++) {
    number++;
  }
  return number;
  }, [])

  return <div>
    <h1>Number: {calculatedNumber}</h1>
    <p>{count} Message Showing</p>
    <button onClick={onHandleIncrement}>Increment Message Number</button>
    </div>;
};

export default memo(Message);
