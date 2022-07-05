import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";
import Classes from "./components/Classes/Classes";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Blogg from "./components/Blog/Blogg";
import BlogTemp from "./components/Blog/BlogTemp";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/classes" element={<Classes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blogs" element={<Blog />} /> */}
        <Route path="/blogs" element={<BlogTemp />} />
        {/* <Route path="/blog2" element={<Blogg />} /> */}
        <Route path="*" element={<Main />} />
        <Route path="/aboutme" element={<About/>}/>
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;