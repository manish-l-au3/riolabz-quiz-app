import React from 'react';
import './App.css';
import Quiz from './components/quiz/quiz.component';
import Footer from './components/footer/footer.components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>riolabz-quiz App</h1>
        
      </header>
      <Quiz/>
      <Footer/>
    </div>
  );
}

export default App;
