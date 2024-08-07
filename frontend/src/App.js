import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import UserHome from "./pages/User/UserHome";
import RecruiterHome from "./pages/Recruiter/RecruiterHome";
import Login from "./pages/Login";
import JobsApplied from "./pages/User/JobsApplied";
import JobsPosted from "./pages/Recruiter/JobsPosted";
import DetailedDescription from "./pages/User/DetailedDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={Login} />

        <Route
          path="/user"
          element={<ProtectedRoute component={UserHome} requiredRole="user" />}
        />
        <Route
          path="/user/jobs-applied"
          element={
            <ProtectedRoute component={JobsApplied} requiredRole="user" />
          }
        />
        <Route
          path="/user/jobs/:jobId"
          element={
            <ProtectedRoute
              component={DetailedDescription}
              requiredRole="user"
            />
          }
        />

        <Route
          path="/recruiter"
          element={
            <ProtectedRoute
              component={RecruiterHome}
              requiredRole="recruiter"
            />
          }
        />
        <Route
          path="/recruiter/jobs-posted"
          element={
            <ProtectedRoute component={JobsPosted} requiredRole="recruiter" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
