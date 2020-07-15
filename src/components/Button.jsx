import React, { Component } from "react";
class Button extends Component {

    render() {
        return (
            <button onClick={this.props.handleClick}>
                {this.props.value}
                <span>{this.props.icon}</span>
            </button>
        );
    }
}

export default Button;
