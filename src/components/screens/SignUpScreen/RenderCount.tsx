// import React, { useState, useEffect } from "react";
import React from "react";

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// @ts-ignore
const RenderCount = (props) => {
  console.log(props.index);
  return <span>{++count[props.index]}</span>;
};

export default RenderCount;
