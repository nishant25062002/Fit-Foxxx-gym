import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Blog from "./components/Blog/Blog";

function App() {

  return (
    <Router>
      <Routes>
              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route path="*" element={<Main />} />
              <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;