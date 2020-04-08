import React from "react";
import { quizData } from "./quizdata";
import "../quiz/quiz.css";
import Button from "../button/button.component";
import Timer from "../timer/timer.component";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      userAnswer: "",
      score: 0,
      isQuizend: false,
      seconds: 180
    };
  }

  loadQuiz = () => {
    this.setState(
      () => {
        return {
          questions: quizData[this.state.currentQuestion].question,
          answer: quizData[this.state.currentQuestion].answer
        };
      },
      () => console.log(this.state)
    );
  };

  tick() {
    if (this.state.seconds === 0) {
      clearInterval(this.interval);
      this.setState({ isQuizend: true });
    } else {
      this.setState(state => ({
        seconds: state.seconds - 1
      }));
    }
  }

  componentDidMount() {
    this.loadQuiz();
    this.interval = setInterval(() => this.tick(), 1000);
  }
  handleChange = e => {
    this.setState({ userAnswer: e.target.value });
  };
  handleClick = () => {
    if (this.state.currentQuestion === 9) {
      this.setState({ isQuizend: true });
      return;
    }
    if (
      this.state.userAnswer.toLowerCase() === this.state.answer.toLowerCase()
    ) {
      this.setState({
        score: this.state.score + 1,
        currentQuestion: this.state.currentQuestion + 1,
        userAnswer: ""
      });
    } else {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        userAnswer: ""
      });
    }
  };

  reset = () => {
    this.setState({
      currentQuestion: 0,
      userAnswer: "",
      score: 0,
      isQuizend: false,
      seconds: 180
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          questions: quizData[this.state.currentQuestion].question,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  render() {
    const { isQuizend, score } = this.state;
    if (isQuizend) {
      return (
        <div className="result-box">
          <h3>Quiz Over</h3>

          <div>
            <h4>Your score is : {score} /10</h4>
          </div>

          <button onClick={this.reset} type="button">
            OK
          </button>
        </div>
      );
    } else {
      return (
        <div className="quiz-box">
          <h3>{this.state.questions}</h3>

          <div className="form-group">
            <input
              type="text"
              placeholder="Write your answer here"
              onChange={this.handleChange}
              value={this.state.userAnswer}
            />
          </div>
          <Button handleClick={this.handleClick}>SUBMIT</Button>
          <hr />
          <Timer seconds={this.state.seconds} />
        </div>
      );
    }
  }
}

export default Quiz;
