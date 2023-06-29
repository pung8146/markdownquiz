import React from "react";
import "./App.css";
import InputMD from "./components/InputMD";
import ConversionPage from "./components/ConversionPage";

function App() {
  return (
    <div className="App">
      <h1>마크 다운 변환기</h1>
      <InputMD />
      <ConversionPage />
    </div>
  );
}

export default App;
