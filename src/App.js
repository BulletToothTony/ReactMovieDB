import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleMovie from "./pages/SingleMovie";
import Watchlist from "./pages/Watchlist";

// import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/watchlist">
          <Watchlist />
        </Route>
        <Route path="/movie/:id">
          <SingleMovie />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
