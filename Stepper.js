import React from 'react';
import ReactDOM from 'react-dom';

import { Step1, Step2, Step3, Step4 } from './Steps';


class NextButton extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <button
                disabled={this.props.stepIndex >= this.props.numSteps - 1 ? 'disabled' : ''}
                onClick={this.props.clickHandler}>next</button>
        )
    }
}

class PrevButton extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <button
                disabled={this.props.stepIndex <= 0 ? 'disabled' : ''}
                onClick={this.props.clickHandler}>prev</button>
        )
    }
}

class Stepper extends React.Component {
  constructor(props) {
    super(props);

    this.steps = [Step1, Step2, Step3, Step4];

    this.state = {
      active: 0
    }

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  render() {
    let step = React.createElement(this.steps[this.state.active], {key: this.state.active}, null);
    return (
      <div>

       {step}

       <PrevButton
         stepIndex={this.state.active}
         numSteps={this.steps.length} 
         clickHandler={this.prev} />

       <NextButton
         stepIndex={this.state.active} 
         numSteps={this.steps.length} 
         clickHandler={this.next} />
      </div>
    )
  }

  next() {
    if (this.state.active < this.steps.length - 1){
      let next = this.state.active + 1
      this.setState({active: next})
    }
  }

  prev() {
    if (this.state.active > 0) {
      let prev = this.state.active - 1
      this.setState({active: prev})
    }
  }
}

export default Stepper
