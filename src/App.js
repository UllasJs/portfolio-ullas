import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header";
import Home from "./pages/home";
import { Projects } from "./pages/projects";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { FaWhatsapp } from "react-icons/fa6";

function App() {
  function onClickWhats() {
    window.location.href =
      "https://wa.me/9074376257?text=I'm%20interested%20in%20your%20work";
  }

  return (
    <div className="App">
      <BrowserRouter basename="/portfolio-ullas">
        <div className="auto-container">
          <div>
            <Header />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/aboutme" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
        <div className="WhatsappMe" onClick={onClickWhats}>
          <FaWhatsapp className="whatsapp-btn" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
