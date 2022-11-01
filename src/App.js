import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Login/Auth"
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import School from "./components/School/School";
import UpdateQuestion from "./components/UpdateQuestion";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/question/:questionId" element={<UpdateQuestion/>}></Route>
        <Route path="/login" element={<Auth />} />
        <Route path="/schools" element={<School />} />
     <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
