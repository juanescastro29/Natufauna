import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Home from "./pages/Home";
import Adoption from "./pages/Adoptions";
import AdoptionForm from "./pages/AdoptionForm";
import Sponsorship from "./pages/Sponsorship";
import SponsorshipForm from "./pages/SponsorshipForm";
import Donation from "./pages/Donations";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AdoptionPetProvider from "./context/AdoptionPetContext";

function App() {
  return (
    <UserProvider>
      <AdoptionPetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="border-bottom border-dark p-1">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/adoption/form" element={<AdoptionForm />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/sponsorship/form" element={<SponsorshipForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div className="border-top border-dark p-1">
            <Footer />
          </div>
        </BrowserRouter>
      </AdoptionPetProvider>
    </UserProvider>
  );
}

export default App;
