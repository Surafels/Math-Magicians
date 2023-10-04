import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import Home from './components/Home';

function App() {
  return (
    <div>
      <nav>
        <p className="nav-head">Math Magicians</p>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/Home" index element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
