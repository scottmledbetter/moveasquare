import React, { Component } from "react";
import "./app.css";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import { origins } from './data.js';
import { directions } from './data.js';
import { easings } from './data.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movementDirection: "None",
      movementDistance: "0",
      scalingOrigin: "Center",
      scalingStartWidth: "100",
      scalingStartHeight: "100",
      scalingEndWidth: "300",
      scalingEndHeight: "300",
      opacityStart: "100",
      opacityEnd: "100",
      acceleration: "cubic-bezier(.645, .045, .355, 1)",
      speed: "500",
      elementMarkup: "",
      keyframes: "",
    };

    this.elementStyle = {
      transition: `all ${this.state.speed}ms ${this.state.acceleration}`,
      transformOrigin: `${this.state.scalingOrigin}`,
      width: this.state.scalingStartWidth + "px",
      height: this.state.scalingStartHeight + "px",
      opacity: this.state.opacityStart + "%",
      backgroundColor: '#6256E9',
      boxShadow: '0px 8px 10px rgba(19, 18, 30, 0.25), 0px 2px 5px rgba(19, 18, 30, 0.5), 0px 0px 1px rgba(19, 18, 30, 0.75)',
      willChange: 'auto',
    }

    this.animation = {
      duration: parseInt(this.state.speed, 10),
      easing: this.state.acceleration,
      iterations: 1,
      fill: 'forwards',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleDirectionSelect = this.handleDirectionSelect.bind(this);
    this.handleEasingSelect = this.handleEasingSelect.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  handleInput(value, name) {
    this.setState({
      [name]: value,
      elementMarkup: document.querySelector('.Element').outerHTML,
    });
    document.querySelector('.modal').innerHTML =
      `
      <pre>
        <code>
          <div>${this.state.elementMarkup.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</div>
        </code>
      </pre>
      `
  }

  handleDirectionSelect(value, name) {
    this.setState({
      [name]: value
    });
  }

  handleEasingSelect(value, name) {
    this.setState({
      [name]: easings[value]
    });
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      this.handleAnimation();
    }
  }

  handleAnimation(event) {

    const keyframes = {
      none: [
        {
          transform: `scaleX(1) scaleY(1)`,
          opacity: `${this.state.opacityStart / 100}`
        },
        {
          transform: `scaleX(${parseInt(this.state.scalingEndWidth, 10) / parseInt(this.state.scalingStartWidth, 10)})
                      scaleY(${ parseInt(this.state.scalingEndHeight, 10) / parseInt(this.state.scalingStartHeight, 10)})`,
          opacity: `${this.state.opacityEnd / 100}`
        },
      ],
      up: [
        {
          transform: `translateY(0) scaleX(1) scaleY(1)`,
          opacity: `${this.state.opacityStart / 100}`

        },
        {
          transform: `translateY(-${this.state.movementDistance}px) 
                      scaleX(${ parseInt(this.state.scalingEndWidth, 10) / parseInt(this.state.scalingStartWidth, 10)})
                      scaleY(${ parseInt(this.state.scalingEndHeight, 10) / parseInt(this.state.scalingStartHeight, 10)})`,
          opacity: `${this.state.opacityEnd / 100}`
        },
      ],
      right: [
        {
          transform: `translateX(0) scaleX(1) scaleY(1)`,
          opacity: `${this.state.opacityStart / 100}`
        },
        {
          transform: `translateX(${this.state.movementDistance}px)
                      scaleX(${ parseInt(this.state.scalingEndWidth, 10) / parseInt(this.state.scalingStartWidth, 10)})
                      scaleY(${ parseInt(this.state.scalingEndHeight, 10) / parseInt(this.state.scalingStartHeight, 10)})`,
          opacity: `${this.state.opacityEnd / 100}`
        },
      ],
      down: [
        {
          transform: `translateY(0) scaleX(1) scaleY(1)`,
          opacity: `${this.state.opacityStart / 100}`
        },
        {
          transform: `translateY(${this.state.movementDistance}px)
                      scaleX(${ parseInt(this.state.scalingEndWidth, 10) / parseInt(this.state.scalingStartWidth, 10)})
                      scaleY(${ parseInt(this.state.scalingEndHeight, 10) / parseInt(this.state.scalingStartHeight, 10)})`,
          opacity: `${this.state.opacityEnd / 100}`
        },
      ],
      left: [
        {
          transform: `translateX(0) scaleX(1) scaleY(1)`,
          opacity: `${this.state.opacityStart / 100}`
        },
        {
          transform: `translateX(-${this.state.movementDistance}px)
                      scaleX(${ parseInt(this.state.scalingEndWidth, 10) / parseInt(this.state.scalingStartWidth, 10)})
                      scaleY(${ parseInt(this.state.scalingEndHeight, 10) / parseInt(this.state.scalingStartHeight, 10)})`,
          opacity: `${this.state.opacityEnd / 100}`
        },
      ]
    }

    const element = document.querySelector('.Element');

    if (this.state.movementDirection === 'None') {
      this.setState({
        keyframes: keyframes.none
      });
      element.animate(keyframes.none, this.animation);
    }
    if (this.state.movementDirection === 'Up') {
      this.setState({
        keyframes: keyframes.up
      });
      element.animate(keyframes.up, this.animation);
    }
    if (this.state.movementDirection === 'Right') {
      this.setState({
        keyframes: keyframes.right
      });
      element.animate(keyframes.right, this.animation);
    }
    if (this.state.movementDirection === 'Down') {
      this.setState({
        keyframes: keyframes.downm
      });
      element.animate(keyframes.down, this.animation);
    }
    if (this.state.movementDirection === 'Left') {
      this.setState({
        keyframes: keyframes.left
      });
      element.animate(keyframes.left, this.animation);
    }
  }

  render() {

    document.addEventListener('keydown', this.handleEnter)

    return (
      <div className="App" >
        <div className="modal"></div>
        <div className="Sidebar">
          <div className="logo">
            moveasquare <span aria-label="Moving trucky" role="img">🚚</span>
            <div>
              Simple in-browser motion prototypes
            </div>
          </div>
          <div className="SidebarSection">
            <span className="heading">Movement</span>
            <Select
              className="half"
              label="Direction"
              items={directions}
              name="movementDirection"
              onInputChange={this.handleDirectionSelect}
              defaultValue={this.state.movementDirection}
            />
            <Input
              label="Distance"
              unit="px"
              className="half"
              name="movementDistance"
              onInputChange={this.handleInput}
              defaultValue={this.state.movementDistance}
            />
          </div>

          <div className="SidebarSection">
            <span className="heading">Scaling</span>
            <Select
              className="full"
              label="Origin"
              items={origins}
              name="scalingOrigin"
              onInputChange={this.handleDirectionSelect}
              defaultValue={this.state.scalingOrigin}
            />
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
              label="End width"
              unit="px"
              placeholder="400px"
              className="half"
              name="scalingEndWidth"
              onInputChange={this.handleInput}
              defaultValue={this.state.scalingEndWidth}
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
              label="End height"
              unit="px"
              placeholder="400px"
              className="half"
              name="scalingEndHeight"
              onInputChange={this.handleInput}
              defaultValue={this.state.scalingEndHeight}
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
          </div>
          <div className="SidebarSection">
            <span className="heading">Timing</span>
            <Input
              label="Speed"
              unit="ms"
              placeholder="150ms"
              className="quarter"
              name="speed"
              onInputChange={this.handleInput}
              defaultValue={this.state.speed}
            />
            <Select
              className="three-quarter"
              label="Easing"
              items={easings}
              name="acceleration"
              onInputChange={this.handleEasingSelect}
              defaultValue={this.state.acceleration}
            />
          </div>
          <div className="SidebarSection">
            <Button
              value="Animate"
              icon="↵"
              handleClick={this.handleAnimation}
            />
          </div>
        </div>
        <div className="Pane">
          <div style={this.elementStyle} className="Element"></div>
        </div>
        <div className="attribution">Made by @scottmled</div>
      </div>
    );
  }
}

export default App;
