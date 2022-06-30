import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;