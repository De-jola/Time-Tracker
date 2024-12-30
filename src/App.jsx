import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onboarding from "./components/Onboarding/Onboarding";
import HomePage from "./components/Dashboard/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />

        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
