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
import AdminHome from "./pages/AdminHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AdoptionPetProvider from "./context/AdoptionPetContext";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import PrivateRouteUser from "./components/PrivateRouteUser";
import AdminProvider from "./context/AdminContext";

function App() {
  return (
    <AdminProvider>
      <UserProvider>
        <AdoptionPetProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/adoption" element={<Adoption />} />
              <Route
                path="/adoption/form"
                element={
                  <PrivateRouteUser>
                    <AdoptionForm />
                  </PrivateRouteUser>
                }
              />
              <Route path="/donation" element={<Donation />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route
                path="/sponsorship/form"
                element={
                  <PrivateRouteUser>
                    <SponsorshipForm />
                  </PrivateRouteUser>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/admin/"
                element={
                  <PrivateRouteAdmin>
                    <AdminHome />
                  </PrivateRouteAdmin>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AdoptionPetProvider>
      </UserProvider>
    </AdminProvider>
  );
}

export default App;
