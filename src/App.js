import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
