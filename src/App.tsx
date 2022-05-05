import React, { useState } from "react";
// components
import QuestionCard from "./components/QuestionCard";
// types
import { Difficulty } from "./Types";
import { fetchQuizQuestions } from "./API";

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUsersAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};
	return (
		<div className="App">
			<h1>Quiz Game</h1>
			<button className="Start" onClick={startTrivia}>
				Start
			</button>
			<p className="score">Score: </p>
			<p>Loading Questions ....</p>
			{/* <QuestionCard
				questionNr={number + 1}
				answers={questions[number].answers}
				question={questions[number].question}
				userAnswer={userAnswers ? userAnswers[number] : undefined}
				totalQuestions={TOTAL_QUESTIONS}
				callback={checkAnswer}
			/> */}
			<button className="next" onClick={nextQuestion}>
				NextQuestion
			</button>
		</div>
	);
};

export default App;
