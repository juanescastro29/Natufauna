import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adoption from './pages/Adoptions'
import Sponsorship from './pages/Sponsorship'
import Donation from './pages/Donations'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
