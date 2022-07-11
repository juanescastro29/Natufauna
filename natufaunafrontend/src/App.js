import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter className='Browser'>
      <Routes className='Routes'>
        <Route className='Route' path="/home" element={<Home />} />
        <Route className='Route' path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
