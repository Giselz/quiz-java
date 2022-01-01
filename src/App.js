import './App.css';
import { useState } from 'react'
import questions from './data/database';

//Components 
import Score from './components/score/index';
import QuestionBox from './components/question-box';

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if(isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  return (
    <div className='app'>
      {showScore ? (
        <Score 
        score={score} 
        questions={questions}
        />
      ) : (
        <QuestionBox
        currentQuestion={currentQuestion}
        questions={questions}
        onClick={(isCorrect) => handleAnswer(isCorrect)}
        />
      )}
    </div>
  );
}

export default App;
