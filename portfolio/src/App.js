import Contact from "./components/Contact";
import SidePanel from "./components/SidePanel";
import Header from "./components/Header";
import './index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./screens/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
              <SidePanel />
          </div>
      </Router>
    </div>
  );
}

export default App;
