import { useNavigate } from "react-router-dom";
import { useQuiz } from "./QuizProvider";
import { Header } from "./Header";
import { Button, Heading } from "@chakra-ui/react";
export function QuizEnd() {
  const {
    state,
    dispatch,
    setUserClick,
    setShowNextBtn,
    setSelected
  } = useQuiz();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Heading as="h3" size="lg">
        Questions Correct : {state.score / 10}/10
      </Heading>
      <Heading as="h4" size="lg">
        Total score :{state.score} /100
      </Heading>
      <Button
        onClick={() => {
          dispatch({ type: "RESET" });
          navigate("/");
          setUserClick(false);
          setShowNextBtn(false);
          setSelected("");
        }}
      >
        Play Again
      </Button>
    </>
  );
}
