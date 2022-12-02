// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import {StartPage} from "./pages/StartPage/StartPage";
import {FormPage} from "./pages/FormPage/FormPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/form" element={<FormPage/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>404 Not Found</p>
            </main>
          }
        />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
