import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { QuizPlayCard } from "./QuizPlayCard";
import { QuizEnd } from "./QuizEnd";
import { QuizHomePage } from "./QuizHomePage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<QuizHomePage />} />
        <Route path="/quizplaycard/:id" element={<QuizPlayCard />} />
        <Route path="/quizendpage" element={<QuizEnd />} />
      </Routes>
    </div>
  );
}
