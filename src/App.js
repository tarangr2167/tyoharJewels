import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";

// import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import AllProductPage from "./Pages/AllProductPage";
import SingleProductPage from "./Pages/SingleProductPage";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Components/Contact";
import Checkout from "./Components/CheckOut";
import Navbar2 from "./Components/Navbar2";
import Profile from "./Components/Profile";
import LoginPage from "./Pages/LoginPage";
import SigninPage from "./Pages/SigninPage";
import OurTrust from "./Components/OurTrust";

function AppWrapper() {
  const location = useLocation();
  // List of routes where the Footer should be hidden
  const hideFooterRoutes = ["/about", "/login", "/signin"];

  // Check if current route matches any in the list
  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allproduct" element={<AllProductPage />} />
        <Route path="/allproductring" element={<AllProductPage />} />
        <Route path="/allproductearrings" element={<AllProductPage />} />
        <Route path="/allproductnecklaces" element={<AllProductPage />} />
        <Route path="/allproductbracelet" element={<AllProductPage />} />
        <Route path="/product" element={<SingleProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ourtrust" element={<OurTrust />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
