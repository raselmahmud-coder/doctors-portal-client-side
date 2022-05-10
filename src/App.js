import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/Pages/About/AboutUs";
import Appointment from "./Components/Pages/Appointment/Appointment";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import HomePage from "./Components/Pages/Home/HomePage";
import LogIn from "./Components/Pages/LogIn/LogIn";
import Reviews from "./Components/Pages/Reviews/Reviews";
import NavBar from "./Components/Shared/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/log-in" element={<LogIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
