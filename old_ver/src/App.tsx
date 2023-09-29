import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import PoseRigPage from "./pages/PoseRigPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<PoseRigPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
