import './App.css';
import Alert from './Component/Alert';
import Login_Y from './Component/Login_Y';
import About from './Component/About';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar /> {/* If Navbar uses Link, it should be inside Router */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          {/* Add more routes for other components if needed */}
        </Switch>
      </Router>
    </>    
  );
}

export default App;
