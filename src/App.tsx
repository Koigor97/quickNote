import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";


function App() {
  return (
    <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MainLayout>
    </Router>
  )
}

export default App
