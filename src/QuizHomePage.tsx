import "./styles.css";
import { Link } from "react-router-dom";
import { Button, Text, Heading, Box ,useColorModeValue} from "@chakra-ui/react";
import { Header } from "./Header";
import { QuizPhotos } from "./QuizPhotos";


export function QuizHomePage() {
  const color = useColorModeValue("gray.800", "gray.800");
  return (
    <>
        <Header />
        <Heading as="h2" size="xl">
          Welcome to Quizzify
        </Heading>
        <Text fontSize="xl"> Are you ready to play some quizes?</Text>
        <Text fontSize="xl">We provide the below quizes</Text>
        <QuizPhotos />
        <div style={{ width: "70%", margin: "auto" }}>
          <Link to="/quizplaycard/4">
            <button className="btnstyle"><Text color={color} fontSize="lg">Play Biology Quiz </Text></button>
          </Link>
          <Box>
            <Box>
              <Link to="/quizplaycard/2">
                <button className="btnstyle" >  <Text color={color} fontSize="lg">Play Chemistry Quiz</Text></button>
              </Link>
            </Box>
            <Box>
              <Link to="/quizplaycard/1">
                <button className="btnstyle">  <Text color={color} fontSize="lg">Play Indian Culture Quiz</Text>  </button>
              </Link>
            </Box>
            <Link to="/quizplaycard/3">
              <button className="btnstyle"> <Text color={color} fontSize="lg">Play General knowledge Quiz</Text> </button>
            </Link>
          </Box>
        </div>
      </>
  );
}
