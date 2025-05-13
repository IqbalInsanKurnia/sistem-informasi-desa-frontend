import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Frontpage from "./pages/user/Frontpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </Router>
  );
}

export default App;
