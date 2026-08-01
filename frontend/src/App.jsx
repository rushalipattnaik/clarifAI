import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import Report from "./pages/Report";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/questions" element={<Questionnaire />} />

        <Route path="/report" element={<Report />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;