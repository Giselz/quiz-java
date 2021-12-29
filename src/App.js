import './App.css';
import { useState } from 'react'

//Components 
import Score from './components/score/index';
import QuestionBox from './components/question-box';

const questions = [
  {
    questionsText: "O que é?",
    answerOptions: [
      {answerText: "1", isCorrect: true},
      {answerText: "2", isCorrect: false},
      {answerText: "3", isCorrect: false},
      {answerText: "4", isCorrect: false},
    ],
  },
  {
    questionsText: "O que é e?",
    answerOptions: [
      {answerText: "12", isCorrect: true},
      {answerText: "23", isCorrect: false},
      {answerText: "34", isCorrect: false},
      {answerText: "45", isCorrect: false},
    ],
  },
];

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
