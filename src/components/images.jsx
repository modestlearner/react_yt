import React, { Component } from "react";
import "../components/styles.css";

class Images extends Component {
  state = {};
  render() {
    // console.log(this.props)
    return (
      <img
        src={this.props.val}
        class="rsize"
        onClick={() => this.props.onLoad(this.props.val)}
      />
    );
  }
}

export default Images;
