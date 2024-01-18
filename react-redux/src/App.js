import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* exact element = 100% 일치하는 URL의 컴포넌트를 랜더링 */}
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
