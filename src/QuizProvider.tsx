import { createContext, useContext, useReducer, useState } from "react";
import { quizReducer, initialQuizState } from "./quizReducer";

const QuizContext = createContext<any>({});

export function QuizProvider({ children }: any) {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [userClick, setUserClick] = useState(false);
  const [selected, setSelected] = useState<String>("");
  return (
    <QuizContext.Provider
      value={{
        state,
        dispatch,
        showNextBtn,
        setShowNextBtn,
        userClick,
        setUserClick,
        selected,
        setSelected
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
