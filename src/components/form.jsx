import React, { Component } from "react";
import "../components/styles.css";
class Form extends Component {
  state = {};
  render() {
    return (
      <div class="">
        <div class="row  ">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  class="validate"
                  onBlur={this.props.onChangeValue}
                />
                <label for="name">Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="email"
                  type="email"
                  class="validate"
                  onBlur={this.props.onChangeValue}
                />
                <label for="email">Email</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
