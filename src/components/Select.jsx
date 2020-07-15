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
    return (
      <span className={`select-div ` + this.props.className}>
        <label>{this.props.label}</label>

        <select
          onChange={this.handleChange}
          name={this.props.name}
          defaultValue={this.props.defaultValue}
        >
          {
            Object.keys(this.props.items).map((key, index) => {
              return <option key={key}>{key}</option>
            })
          }
        </select>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    );
  }
}

export default Select;
