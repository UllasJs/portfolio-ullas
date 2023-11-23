import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header";
import Home from "./pages/home";
import { Projects } from "./pages/projects";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
