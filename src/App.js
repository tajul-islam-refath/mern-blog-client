import "./scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
