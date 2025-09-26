import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from "./components/View";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/uploads" element={<View />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
