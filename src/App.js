import logo from './logo.svg';
import './App.css';
import Router from './Router';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div>
  );
}

export default App;
