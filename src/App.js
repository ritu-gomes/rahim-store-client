import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Adding from "./components/Adding/Adding";
import Home from "./components/Home/Home";
import Editing from "./components/Editing/Editing";
import { createContext, useState } from "react";

export const productContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  return (
    <productContext.Provider value={[products, setProducts]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/adding">
            <Adding />
          </Route>
          <Route path="/edit/:id">
            <Editing />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </productContext.Provider>
  );
}

export default App;
