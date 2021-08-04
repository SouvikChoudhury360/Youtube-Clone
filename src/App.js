import React from "react";
import {
  Header,
  Sidebar,
  Main,
  Watch,
  PreviewChannel
} from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/login">
            <h1>login</h1>
          </Route>
          
        <div className="home">
          <Route path="/watch">
            <Header />
            <Watch />
          </Route>

          <Route path="/PreviewChannel">
            <Header />
            <div className="app">
              <Sidebar changeWidth />
              <PreviewChannel />
            </div>
          </Route>

          <Route exact path="/">
            <Header />
            <div className="app">
              <Sidebar />
              <Main />
            </div>
          </Route>
        </div>
        
      </Switch>
    </Router>
  );
}

export default App;
