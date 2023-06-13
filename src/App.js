//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
//Router
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Ract Hooks</h1>
      <BrowserRouter>
      <ul>
        <li>
<Link to="/">HOME</Link>
        </li>
        <li>
<Link to="/about">ABOUT</Link>
        </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home userName={"Natália"} />} />
            <Route path="/about" element={<About />} />          
           
          </Routes>

          </BrowserRouter>
          </div>
  );
}

export default App;
