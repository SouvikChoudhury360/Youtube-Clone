import React from "react";
import {
  Header,
  Sidebar,
} from "./components";

function App() {
  return (
    <div className="home">
      <Header />
      <div className="app">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
