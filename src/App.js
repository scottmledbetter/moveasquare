import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import Select from "./components/Select";

const directions = [
  "None", 
  "Up", 
  "Right", 
  "Down", 
  "Left",
];

const easings = [
  "ease-in-quad cubic-bezier(.55, .085, .68, .53)",
  "ease-in-cubic cubic-bezier(.550, .055, .675, .19)",
  "ease-in-quart cubic-bezier(.895, .03, .685, .22)",
  "ease-in-quint cubic-bezier(.755, .05, .855, .06)",
  "ease-in-expo cubic-bezier(.95, .05, .795, .035)",
  "ease-in-circ cubic-bezier(.6, .04, .98, .335)",
  "ease-out-quad cubic-bezier(.25, .46, .45, .94)",
  "ease-out-cubic cubic-bezier(.215, .61, .355, 1)",
  "ease-out-quart cubic-bezier(.165, .84, .44, 1)",
  "ease-out-quint cubic-bezier(.23, 1, .32, 1)",
  "ease-out-expo cubic-bezier(.19, 1, .22, 1)",
  "ease-out-circ cubic-bezier(.075, .82, .165, 1)",
  "ease-in-out-quad cubic-bezier(.455, .03, .515, .955)",
  "ease-in-out-cubic cubic-bezier(.645, .045, .355, 1)",
  "ease-in-out-quart cubic-bezier(.77, 0, .175, 1)",
  "ease-in-out-quint cubic-bezier(.86, 0, .07, 1)",
  "ease-in-out-expo cubic-bezier(1, 0, 0, 1)",
  "ease-in-out-circ cubic-bezier(.785, .135, .15, .86)",
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movementDirection: "Left",
      movementDistance: "100",
      movementSpeed: "500",
      movementAcceleration: "cubic-bezier(.645, .045, .355, 1)",
      scalingStartWidth: "250",
      scalingStartHeight: "150",
      scalingEndWidth: "300",
      scalingEndHeight: "300",
      scalingSpeed: "500",
      scalingAcceleration: "cubic-bezier(.645, .045, .355, 1)",
      opacityStart: "100",
      opacityEnd: "100",
      opacitySpeed: "500",
      opacityAcceleration: "cubic-bezier(.645, .045, .355, 1)",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(value, name) {
    this.setState({
      [name]: value.replace(/^\S*\s/, "" )
    });
  }

  render() {
    const input = this.state.input;

    const animation = {
      transition: `
                  width ${this.state.scalingSpeed}ms ${this.state.scalingAcceleration}, 
                  height ${this.state.scalingSpeed}ms ${this.state.scalingAcceleration},
                  opacity ${this.state.opacitySpeed}ms ${this.state.opacityAcceleration}
                `,
      width: this.state.scalingStartWidth + "px",
      height: this.state.scalingStartHeight + "px",
      opacity: this.state.opacityStart + "%",
    };

    return (
      <div className="App">
        <div className="Sidebar">
          <div className="SidebarSection">
            <span className="heading">Movement</span>
            <Select
              className="full"
              label="Direction"
              items={directions}
              name="movementDirection"
              onInputChange={this.handleInput}
              defaultValue={this.state.movementDirection}
            />
            <Input
              label="Distance"
              unit="px"
              className="full"
              name="movementDistance"
              onInputChange={this.handleInput}
              defaultValue={this.state.movementDistance}
            />
            <Input
              label="Speed"
              unit="ms"
              placeholder="150ms"
              className="quarter"
              name="movementSpeed"
              onInputChange={this.handleInput}
              defaultValue={this.state.movementSpeed}
            />
            <Select
              className="three-quarter"
              label="Acceleration"
              items={easings}
              name="movementAcceleration"
              onInputChange={this.handleInput}
              defaultValue={this.state.movementAcceleration}
            />
          </div>

          <div className="SidebarSection">
            <span className="heading">Scaling</span>
            <Input
              label="Start width"
              unit="px"
              placeholder="200px"
              className="half"
              name="scalingStartWidth"
              onInputChange={this.handleInput}
              defaultValue={this.state.scalingStartWidth}
            />
            <Input
              label="Start height"
              unit="px"
              placeholder="200px"
              className="half"
              name="scalingStartHeight"
              onInputChange={this.handleInput}
              defaultValue={this.state.scalingStartHeight}
            />
            <Input
              label="End width"
              unit="px"
              placeholder="400px"
              className="half"
              name="scalingEndWidth"
              onInputChange={this.handleInput}
              defaultValue={this.state.scalingEndWidth}
            />
            <Input
              label="End height"
              unit="px"
              placeholder="400px"
              className="half"
              name="scalingEndHeight"
              onInputChange={this.handleInput}
              defaultValue={this.state.scalingEndHeight}
            />
            <Input
              label="Speed"
              unit="ms"
              placeholder="150ms"
              className="quarter"
              name="scalingSpeed"
              onInputChange={this.handleInput}
              defaultValue={this.state.scalingSpeed}
            />
            <Select
              className="three-quarter"
              label="Acceleration"
              items={easings}
              name="scalingAcceleration"
              onInputChange={this.handleInput}
              defaultValue={this.state.scalingAcceleration}
            />
          </div>

          <div className="SidebarSection">
            <span className="heading">Opacity</span>
            <Input
              label="Start"
              unit="%"
              className="half"
              name="opacityStart"
              onInputChange={this.handleInput}
              defaultValue={this.state.opacityStart}
            />
            <Input
              label="End"
              unit="%"
              placeholder="100%"
              className="half"
              name="opacityEnd"
              onInputChange={this.handleInput}
              defaultValue={this.state.opacityEnd}
            />
            <Input
              label="Speed"
              unit="ms"
              placeholder="150ms"
              className="quarter"
              name="opacitySpeed"
              onInputChange={this.handleInput}
              defaultValue={this.state.opacitySpeed}
            />
            <Select
              className="three-quarter"
              label="Acceleration"
              items={easings}
              name="opacityAcceleration"
              onInputChange={this.handleInput}
              defaultValue={this.state.opacityAcceleration}
            />
          </div>
        </div>

        <div className="Pane">
          <div style={animation} className="Element"></div>
        </div>
      </div>
    );
  }
}

export default App;
