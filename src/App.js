import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import HomePage from './components/Home/HomePage';
import ServicePage from './components/Services/ServicePage';
import MScan2Pay from './components/Services/MScan2Pay';
import MerchantQrCodeManager from './components/MobiCode/MerchantQrCodeManager';
import MobiswiftScanner from "./components/MerchantScanner/MobiswiftScanner";
import MSwiftScanner from "./components/MerchantScanner/MSwiftScanner";
import Client_Info from "./components/MerchantScanner/Client_Info";
import NotificationSoundManager from "./components/Notifications/NotificationSoundManager";
import CategoryManager from "./components/Marketplace/CategoryManager";
import CategoryPage from "./components/Marketplace/CategoryPage";
import VoucherDataFilter from "./components/Marketplace/VoucherDataFilter";
import Vouchers from "./components/Marketplace/Vouchers";
import VoucherSearchBar from "./components/Marketplace/VoucherSearchBar";
import VoucherPreview from "./components/Marketplace/VoucherPreview";

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
        <Route path="/client_Info" element={<Client_Info/>}></Route>
        <Route path="/test_sound" element={<NotificationSoundManager/>}></Route>
        <Route path="/categoryManager" element={<CategoryManager/>}></Route>
        <Route path="/category" element={<CategoryPage/>}></Route>
        <Route path="/voucherDataFilter" element={<VoucherDataFilter/>}></Route>
        <Route path="/vouchers" element={<Vouchers/>}></Route>
        <Route path="/voucherSearchBar" element={<VoucherSearchBar/>}></Route>
        <Route path="/voucherPreview" element={<VoucherPreview/>}></Route>
        
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
