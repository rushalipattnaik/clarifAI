import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questionnaire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;