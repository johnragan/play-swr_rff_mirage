// import React, { useState, useEffect } from "react";
import React from "react";

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const RenderCount = (props: { index: number }) => {
  console.log(props.index);
  return <span>{++count[props.index]}</span>;
};

export default RenderCount;
