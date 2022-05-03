import React from "react";
// components
import QuestionCard from "./components/QuestionCard";

const App = () => {
	const startGame = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};
	return (
		<div className="App">
			<h1>Quiz Game</h1>
			<button className="Start" onClick={startGame}>
				Start
			</button>
			<p className="score">Score: </p>
			<p>Loading Questions ....</p>
			<QuestionCard
				question={""}
				answers={[]}
				callback={undefined}
				userAnswer={""}
				questionNum={0}
				totalQuestions={0}
			/>
			<button className="next" onClick={nextQuestion}>
				NextQuestion
			</button>
		</div>
	);
};

export default App;
