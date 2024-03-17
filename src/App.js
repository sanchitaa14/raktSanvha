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
import Profile from './pages/Profile';
import FindBloodBanks from './pages/Map';
import OrderTracker from './pages/components/Track';
import ChatbotComponent from './pages/Chatbot';
function App() {
  return (
    <div className="App">
      <Nav/>
      <ChatbotComponent/>
      <Router>
        <Routes>
          <Route path ="/track" element={<OrderTracker/>}/>
          <Route path='/profile' element={<Profile />} />
          <Route path = "/" element={<Home />}/>
          <Route path = "/data" element={<Data />}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path = "/camps" element={<Camps/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/donate' element={<BloodDonationForm/>}/>
          <Route path='/campregister' element={<CampRegistrationForm/>}/>
          <Route path='/map' element={<FindBloodBanks/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
