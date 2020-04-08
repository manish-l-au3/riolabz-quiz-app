import React from "react";
import '../timer/timer.css'

class Timer extends React.Component {
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="timer">Total 30 mins for 10 questions - Remaining Seconds for this question: {this.props.seconds}  </div>;
  }
}

export default Timer;
