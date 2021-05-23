import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { quizOne } from "./quizData";
import { useQuiz } from "./QuizProvider";
import { Header } from "./Header";
import { Button, Text, Heading ,useColorModeValue} from "@chakra-ui/react";
import { Option } from "./quiz.type";

export function QuizPlayCard() {
  const { id } = useParams();
  const getQuiz = quizOne.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  const {
    state,
    dispatch,
    showNextBtn,
    setShowNextBtn,
    setUserClick,
    userClick,
    selected,
    setSelected
  } = useQuiz();
  const color = useColorModeValue("gray.800", "gray.800");
  function answerClick({ text, isRight }: Option) {
    setSelected(text);
    setShowNextBtn(true);
    setUserClick(true);
    getQuiz?.questions[state.questionNumber].options.find((item) => {
      if (item.text === text && item.isRight === true)
        dispatch({ type: "SCORE", payload: { score: 10 } });
    });
  }

  function selectOptionHandler({ text, isRight }: Option) {
    
    if (selected === text && isRight === true) return "wright";
    else if (selected === text && isRight === false) return "wrong";
    else if (isRight === true) return "wright";
  }
  function nextHandler() {
    if (state.questionNumber <= 10) {
      dispatch({ type: "QUESTION" });
      setShowNextBtn(false);
      setUserClick(false);
      setSelected("");
    }
  }
  return (
    <>
      <Header />
      <div style={{ width: "70%", margin: "auto" }}>
        <Heading as="h2" size="xl">
          {getQuiz?.quizName} Quiz !!
        </Heading>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Heading as="h4" size="md">
            Questions {state.questionNumber + 1}/{getQuiz?.questions.length}
          </Heading>
          <Heading as="h4" size="md">
            Score {state.score}/100
          </Heading>
        </div>
        <div style={{ textAlign: "initial", marginTop: "2rem" }}>
          <Text fontSize="2xl">
            {state.questionNumber + 1}.
            {getQuiz?.questions[state.questionNumber]?.question}
          </Text>
          {getQuiz?.questions[state.questionNumber]?.options.map((option) => {
            return (
              <div key={option.text}>
                <button
                  key={option.text}
                  disabled={userClick}
                  className={`btnstyle  ${
                    selected && selectOptionHandler(option)
                  }`}
                  value={option.text}
                  onClick={() => answerClick(option)}
                >
                   <Heading as="h5" size="sm" mt={1} color={color}>
                   {option.text}
              </Heading>
                </button>
              </div>
            );
          })}
          {state.questionNumber <= 8 && showNextBtn && (
            <Button
              size="md"
              marginTop="1rem"
              border="2px"
              borderColor="green.500"
              onClick={nextHandler}
            >
              Next
            </Button>
          )}
          {state.questionNumber === 9 && (
            <Button
              size="md"
              marginTop="1rem"
              border="2px"
              borderColor="red.500"
              onClick={() => navigate("/quizendpage")}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
