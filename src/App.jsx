import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onboarding from "./components/Onboarding/Onboarding";
import HomePage from "./components/Dashboard/HomePage";
import Report from "./components/Dashboard/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Onboarding} />

        <Route path="/dashboard" Component={HomePage} />
        <Route path="/dashboard/report" Component={Report} />
      </Routes>
    </Router>
  );
}

export default App;
