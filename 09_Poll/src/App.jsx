import React, { useState, useEffect } from "react";
import './App.css'

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=10");
        if (!res.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await res.json();
        setQuestions(data.results.map(question => ({
          ...question,
          options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5)
        })));
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    const correct = answer === questions[currentQuestionIndex].correct_answer;
    setSelectedAnswer(answer);
    setFeedback(correct ? "Correct!" : "Incorrect. Try again!");
  };

  const handleNext = () => {
    setFeedback(null); 
    setSelectedAnswer(null); 
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  if (questions.length === 0) return <div className="loading">Loading...</div>;

  const { question, options } = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <h2>{question}</h2>
      <ul className="option-list">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswer(option)}
            className={`option-list-item ${
              selectedAnswer === option 
                ? (option === questions[currentQuestionIndex].correct_answer ? 'correct' : 'incorrect') 
                : ''
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
      {selectedAnswer !== null && (
        <div>
          <p className="feedback">{feedback}</p>
          {currentQuestionIndex < questions.length - 1 && (
            <button className="next-button" onClick={handleNext}>Next</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
