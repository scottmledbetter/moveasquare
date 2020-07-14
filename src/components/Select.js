import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value, e.target.name);
  }

  render() {
    const input = this.props.input;
    return (
      <span className={`select-div ` + this.props.className}>
        <label>{this.props.label}</label>

        <select
          onChange={this.handleChange}
          name={this.props.name}
          defaultValue={this.props.defaultValue}
        >
          {this.props.items.map((item) => (
            <option>{item}</option>
          ))}
        </select>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3.33334V12.6667"
            stroke="white"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.6667 8L8.00001 12.6667L3.33334 8"
            stroke="white"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    );
  }
}

export default Select;
