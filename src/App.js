import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import HomePage from './components/Home/HomePage';
import ServicePage from './components/Services/ServicePage';
import MScan2Pay from './components/Services/MScan2Pay';
import MerchantQrCodeManager from './components/MobiCode/MerchantQrCodeManager';
import MobiswiftScanner from "./components/MerchantScanner/MobiswiftScanner";

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      
        {/* Open Access - Public Access Required*/}
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/services" element={<ServicePage/>}></Route>
        <Route path="/mscan2Pay" element={<MScan2Pay/>}></Route>
        <Route path="/mobiqrcode" element={<MerchantQrCodeManager/>}></Route>
        <Route path="/mobiswiftScanner" element={<MobiswiftScanner/>}></Route>
        {
        /*<Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>*/}
       {/* Secure Access - Only Authenticated Users can access*/}
        {/*<Route path="/services" element={<Mservices />}></Route>
        */}
        

  
    </Routes>
 
    </div>
  </Router>
  );
}

export default App;
