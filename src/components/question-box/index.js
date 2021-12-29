const QuestionBox = ({currentQuestion, questions, onClick}) => {
    return (
        <>
            <div className='question-section'>
                <div className='question-count'>
                <span>Questão {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>
                {questions[currentQuestion].questionsText}
                </div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
                <button onClick={() => onClick(answerOptions.isCorrect)} key={index}> 
                    {answerOptions.answerText}
                </button>
                ))}
            </div>
        </>
    );
};

export default QuestionBox;