import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import JoinPage from "./pages/JoinPage";
import QuestionPage from "./pages/QuestionPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />} />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
            <Route path="/BlogPage" element={<BlogPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/JoinPage" element={<JoinPage />} />
            <Route path="/QuestionPage" element={<QuestionPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
