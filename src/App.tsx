import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeoraeIntroPage from "./pages/SeoraeIntroPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>홈</h1>} />
        <Route path="/seorae" element={<SeoraeIntroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
