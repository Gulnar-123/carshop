
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Accessories from './pages/Accessories';
import Feedback from './pages/Feedback';
import Register from './pages/Register';
import Login from './pages/Login';
import ALogin from './pages/ALogin';
import MCars from './pages/MCars';
import MAccessories from './pages/MAccessories';
import VFeedback from './pages/VFeedback';
import VOrders from './pages/VOrders';
import Viewcart from './pages/Viewcart';
import OHistory from './pages/OHistory';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path='cars' element={<Cars />}></Route>
          <Route path='accessories' element={<Accessories />}></Route>
          <Route path='feedback' element={<Feedback />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='alogin' element={<ALogin />}></Route>
          <Route path='mcars' element={<MCars />}></Route>
          <Route path='maccessories' element={<MAccessories />}></Route>
          <Route path='vfeedback' element={<VFeedback />}></Route>
          <Route path='vorders' element={<VOrders />}></Route>
          <Route path='vcart' element={<Viewcart />}></Route>
          <Route path='ohistory' element={<OHistory />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
