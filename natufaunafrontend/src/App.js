import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Home from "./pages/UserPages/Home";
import Adoption from "./pages/UserPages/Adoptions";
import AdoptionForm from "./pages/UserPages/AdoptionForm";
import Sponsorship from "./pages/UserPages/Sponsorship";
import SponsorshipForm from "./pages/UserPages/SponsorshipForm";
import Donation from "./pages/UserPages/Donations";
import Login from "./pages/UserPages/Login";
import Register from "./pages/UserPages/Register";
import NotFound from "./pages/NotFound";
import AdminHome from "./pages/AdminPages/AdminHome";
import AdminAdoption from "./pages/AdminPages/AdminAdoption";
import AdminSponsorship from "./pages/AdminPages/AdminSponsorship";
import AdminDonation from "./pages/AdminPages/AdminDonation";
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
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route
                path="/sponsorship/form"
                element={
                  <PrivateRouteUser>
                    <SponsorshipForm />
                  </PrivateRouteUser>
                }
              />
              <Route path="/donation" element={<Donation />} />
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
              <Route
                path="/admin/adoption"
                element={
                  <PrivateRouteAdmin>
                    <AdminAdoption />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path="/admin/sponsorship"
                element={
                  <PrivateRouteAdmin>
                    <AdminSponsorship />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path="/admin/donation"
                element={
                  <PrivateRouteAdmin>
                    <AdminDonation />
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
