import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";


function App() {

  const apiTesting = () => {
    fetchDataFromApi('')
  }
  return <div className="App">App</div>;
}

export default App;
