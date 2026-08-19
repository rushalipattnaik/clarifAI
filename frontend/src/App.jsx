import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import Report from "./pages/Report";
import ReportView from "./pages/ReportView";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ReportHistory from "./pages/ReportHistory";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Protected Routes */}

        <Route
          path="/questions"
          element={
            <ProtectedRoute>
              <Questionnaire />
            </ProtectedRoute>
          }
        />

        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <ReportHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports/:reportId"
          element={
            <ProtectedRoute>
              <ReportView />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;