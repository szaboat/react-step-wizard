import React from 'react';
import ReactDOM from 'react-dom';

class Step1 extends React.Component {
  render() {
    return <pre>Step1</pre>
  }
}

class Step2 extends React.Component {
  alert(e) {
    alert(this.refs.shoutInput.value)
  }
  render() {
    return (
      <div>
        <pre>Step2</pre>
        <p>
           <input ref="shoutInput" type="text" />
           <button onClick={this.alert.bind(this)}>shout</button>
        </p>
      </div>
    )
  }
}

class Step3 extends React.Component {
  render() {
    return <pre>Step3</pre>
  }
}

class Step4 extends React.Component {
  render() {
    return <pre>Step4</pre>
  }
}

export {
    Step1, Step2, Step3, Step4
}
