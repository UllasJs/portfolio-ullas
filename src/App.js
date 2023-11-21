import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/header";
import Home from "./pages/home";

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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
