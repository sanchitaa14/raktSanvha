import logo from './logo.svg';
import './App.css';
import Data from './pages/Data';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './pages/Navbar';
import Camps from './pages/Camps';
import Form from './pages/Form';
import BloodDonationForm from './pages/DonorForm';
import Footer from './pages/Footer';
import CampRegistrationForm from './pages/CampRegister';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/data" element={<Data />}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path = "/camps" element={<Camps/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/donate' element={<BloodDonationForm/>}/>
          <Route path='/campregister' element={<CampRegistrationForm/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
