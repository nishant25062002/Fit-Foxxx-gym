import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";

function App() {

  return (
    <Router>
      <Routes>
              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;