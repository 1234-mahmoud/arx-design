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
import OneBlog from "./components/OneBlog";
import OneProject from "./components/OneProject";
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="*" element={<Home />}/>
            <Route path="/About" element={<About />} />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
            <Route path="/BlogPage" element={<BlogPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/JoinPage" element={<JoinPage />} />
            <Route path="/QuestionPage" element={<QuestionPage />} />
            <Route path="/OneBlog" element={<OneBlog />} />
            <Route path="/OneProject" element={<OneProject />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
