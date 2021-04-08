import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navigation, Footer, Home, Register, Dashboard, Teacher } from "./components";
import './App.css';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  });

  return (
    <div className="App">
      <Router>
        <Navigation />
          <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/register" exact component={() => <Register />} />
              <Route path="/dashboard" exact component={() => <Dashboard />} />
              <Route path="/teacher" exact component={() => <Teacher />} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
