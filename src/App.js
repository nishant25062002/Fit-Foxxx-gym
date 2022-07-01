import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";
import Classes from "./components/Classes/Classes";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/classes" element={<Classes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Main />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;