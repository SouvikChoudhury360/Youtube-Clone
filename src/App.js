import React from "react";


import {
  Header,
  Sidebar,
  Main,
  Watch
} from "./components";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <div className="home">
     
    <Route path="/watch">
    <Header />
      <Watch />
    </Route>
    <Route exact path ="/">
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
