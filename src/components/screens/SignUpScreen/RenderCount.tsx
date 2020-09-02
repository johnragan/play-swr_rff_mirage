import React, { Component } from "react";

class RenderCount extends Component {
  renders = 0;
  render() {
    return <span>{++this.renders}</span>;
  }
}

export default RenderCount;
