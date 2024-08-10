import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<SignUp/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
