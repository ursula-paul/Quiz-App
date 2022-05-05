// export type Question = {
// 	category: string;
// 	correct_answer: string;
// 	difficulty: string;
// 	incorrect_answer: string[];
// 	question: string;
// 	type: string;
// };

// export enum Difficulty {
// 	EASY = "easy",
// 	MEDIUM = "medium",
// 	HARD = "hard",
// }

import { Difficulty } from "./Types";
import { Question } from "./Types";
import { shuffleArray } from "./utils";

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
	const data = await (await fetch(endpoint)).json();
	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
