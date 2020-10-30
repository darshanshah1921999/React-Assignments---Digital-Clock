import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
        <h3 id="time">{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
}

export default App;
