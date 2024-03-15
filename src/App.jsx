import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'


function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <div className="App">App</div>;
}

export default App;
