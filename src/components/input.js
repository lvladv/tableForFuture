import React, { Component } from "react";
import List from "./list";

class Input extends Component {
  render() {
    const { data } = this.props;
    return <List data={data} />;
  }
}

export default Input;
