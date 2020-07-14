import React, { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value, e.target.name);
  }

  render() {
    return (
      <span className={`input-div ` + this.props.className}>
        <label>{this.props.label}</label>
        <input
          onChange={this.handleChange}
          name={this.props.name}
          defaultValue={this.props.defaultValue}
        ></input>
        <span className="unit">{this.props.unit}</span>
      </span>
    );
  }
}

export default Input;
