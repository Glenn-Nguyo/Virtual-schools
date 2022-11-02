import "bootstrap/dist/css/bootstrap.min.css"
//import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Login/Auth"
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import School from "./components/School/School";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Educators from "./components/Educators/Educators";
import Owner from "./components/Owners/Owner";
// import CreateOwner from "./Owner's Page/src/Components/CreateOwner";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/owners" element={<NavbarComp />} />
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/enroll" element={<CreateOwner />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/schools" element={<School />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/educators" element={<Educators />} />
        <Route path="/admin" element={<Owner/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
