import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home"
import Men from "./Components/Men"
function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" exact component={Home}></Route>
            <Route path="/men" exact component={Men}></Route>
            <Route path="/women" exact component={Home}></Route>
            <Route path="/kids" exact component={Home}></Route>
        </Routes>
        <Navbar></Navbar>
      </Router>
  );
}

export default App;
