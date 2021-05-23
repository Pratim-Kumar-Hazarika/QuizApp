export type QuizState = {
  score: number;
  questionNumber: number;
};
export const initialQuizState: QuizState = {
  score: 0,
  questionNumber: 0
};
export type Action =
  | { type: "RESET" }
  | { type: "SCORE"; payload: { score: number } }
  | { type: "QUESTION"; payload: { questionNumber: number } };

  
export function quizReducer(state: QuizState, action: Action) {
  switch (action.type) {
    case "RESET":
      return { ...state, score: 0, questionNumber: 0 };
    case "SCORE":
      return { ...state, score: state.score + action.payload.score };
    case "QUESTION":
      return { ...state, questionNumber: state.questionNumber + 1 };
    default:
      return state;
  }
}
