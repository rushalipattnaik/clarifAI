import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import Report from "./pages/Report";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/questions" element={<Questionnaire />} />

          <Route path="/report" element={<Report />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;