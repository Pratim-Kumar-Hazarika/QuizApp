import { render } from "react-dom";
import { QuizProvider } from "./QuizProvider";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
const rootElement = document.getElementById("root");

render(
  <ChakraProvider>
    <Router>
      <QuizProvider>
        <App />
      </QuizProvider>
    </Router>
  </ChakraProvider>,
  rootElement
);
