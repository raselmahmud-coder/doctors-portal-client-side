import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AboutUs from "./Components/Pages/About/AboutUs";
import Appointment from "./Components/Pages/Appointment/AppointmentPage";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import HomePage from "./Components/Pages/Home/HomePage";
import LogIn from "./Components/Pages/LogIn/LogIn";
import Registration from "./Components/Pages/Registration/Registration";
import Reviews from "./Components/Pages/Reviews/Reviews";
import NavBar from "./Components/Shared/NavBar/NavBar";

function App() {
  return (
    <div className="lg:px-10 sm:px-5 max-w-7xl mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
