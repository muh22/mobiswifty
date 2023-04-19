import React, { useState, useRef,useEffect } from "react";
import { qrcodeString} from './Vouchers';
import { QRCode } from 'react-qrcode-logo';
import axios from 'axios';
import { Buffer } from 'buffer';

import {
  Container,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  FavoriteIcon,
  CardMedia,
  CardActions,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import QrReader from "react-qr-reader";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";
import logoImage from "../../images/logo/logo.jpeg";
import loginImage from "../../images/icon_images/ic_login_circle.jpeg";
import mtnImage from "../../images/icon_images/Untitled-2.jpg";



function VoucherPreview() {

  const navigate = useNavigate();
  const classes = useStyles();
  const qrRef = useRef(null);
  
  //const usernamePasswordBuffer = Buffer.from(adminUsername + ':' + adminPassword);
  const usernamePasswordBuffer = Buffer.from('mobivat' + ':' + '1234');
  const base64data = usernamePasswordBuffer.toString('base64');

    const [response, setResponse] = useState(null);
    const [responseError, setResponseError] = useState(null);

    //const [img , setImg]=useState("https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/GSDFJbFJUbjq1BONPjIrwxjMCUya5ig6qmMgS4fVYov9djHX30sdir02qhj0NRMy_265x190.png");
    
    
    const fetchQuotes = async () => {
      try {
        const res = await axios.get('https://dev.mobivat.com/mobitax-vsdc/mobivat/api/mobicore/vouchers/preview-redeem', { params: {
          voucherToken: '7230277309355806',
          voucherRedeemerId: '400401665710193'
        },
        headers: {

          'Authorization': 'Basic ${base64data}',
          // 'Authorization': 'Basic bW9iaXZhdDoxMjM0',
          
          // "Accept":"application/json",
          // "Content-Type": "application/json",
        }
      })
        // .then(response => response.status)
        // .catch(err => console.warn(err));
      // {
      //   // specify query parameters
      //   params: {
      //     voucherToken: '7230277309355806',
      //     voucherRedeemerId: '400401665710193'
      //   },
      //   // specify api basic authorization
      //   headers: {

      //     'Authorization': 'Basic ${base64data}',
      //     // 'Authorization': 'Basic bW9iaXZhdDoxMjM0',
          
      //     "Accept":"application/json",
      //     "Content-Type": "application/json",
      //   },
      //   // specify api authroization status
      //   withCredentials: true,
      //   // auth: {
      //   //   username:"mobivat",
      //   //   password:"1234"
      //   //   }
      // })
        setResponse(res.data.data);
        setResponseError(res.data);

        const statusCode =responseError.responseCode;
        if(statusCode=="101")
         {
          console.log(responseError.codeDescription);
          <script>
          function myFunction() {
          alert(responseError.codeDescription)
           }
        </script>
         
         }
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      // Trigger the API Call
      fetchQuotes();
    }, []);
    console.log(response);

  return (
    <div>
      <div id="main-wrapper">
       
        <header id="header">
          <div class="container">
            <div class="header-row">
              <div class="header-column justify-content-start">
                <div class="logo">
                  {" "}
                  <a class="d-flex" href="#" title="MobiSwift">
                    <img
                      src={logoImage}
                      width="250"
                      height="100"
                      alt="MobiSwift"
                    />
                  </a>{" "}
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#header-nav"
                >
                  {" "}
                  <span></span> <span></span> <span></span>{" "}
                </button>
                <nav class="primary-menu navbar navbar-expand-lg">
                  <div id="header-nav" class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                      <li class="dropdown">
                        {" "}
                        <a href="/">Home</a>
                      </li>
                      <li class="dropdown dropdown-mega">
                        {" "}
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div class="header-column justify-content-end">
                <nav class="login-signup navbar navbar-expand">
                  <ul class="navbar-nav">
                    <li>
                      <a href="/signin">
                        {" "}
                        <img src={loginImage} width="50" />
                      </a>{" "}
                    </li>
                    <li class="align-items-center h-auto ml-sm-3">
                      <a
                        class="btn btn-primary d-none d-sm-block"
                        href="/signup"
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

       

        <div id="content">
          <div
            class="owl-carousel owl-theme single-slideshow"
            data-autoplay="true"
            data-loop="true"
            data-autoheight="true"
            data-nav="true"
            data-items="1"
          >
            
  

            <div class="container">
           
              {
                 
                response?
                <>
                 
                <h6 style={{ textAlign: "left", fontSize: 24,color: "#ff9900", width: "100%" }}>
                 Client Information
                </h6>
                <h6 style={{ textAlign: "left", fontSize: 18,color: "#ff9900", width: "100%" }}>
                 Client Code : {response.mobicashQrcodeId}
                </h6>
               <br />
               <img src={response.profileImage} alt="icons" />
               <h6 style={{ textAlign: "left", fontSize: 18, width: "100%" }}>
               Name : {response.merchantUsername}
               </h6>
               <h6 style={{ textAlign: "left", fontSize: 18, width: "100%" }}>
                Location:{response.merchantCity}
               </h6>
               <br />
               <h6 style={{ textAlign: "left", fontSize: 18,color: "#FF0000", width: "100%" }}>
                    Make sure when scan the Qr Code
                   </h6>
                   <h6 style={{ textAlign: "left", fontSize: 18,color: "#FF0000", width: "100%" }}>
                    The Client name appear  
                   </h6>
            
                </>
                :null
              }
              
              <br /> 
              <div class="container">
                <div class="row">
                  {/* <div class="section-header">
                    <h4
                      style={{
                        backgroundColor: "#fbe5d6",
                        width: "100%",
                        fontSize: 15,
                      }}
                    >
                      
                    </h4>
                  </div> */}

                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                          {/* <QRCode value={qrcodeString[0]} size={250}  logoImage={mtnImage} logoWidth={45} logoHeight={45}/><br /> */}

                            {/* <h3 class="text-body text-1">Make sure when scan the Qr Code the Merchant name appear</h3> */}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    {/* <h6 style={{ textAlign: "left", fontSize: 18,color: "#FF0000", width: "100%" }}>
                    Make sure when scan the Qr Code
                   </h6>
                   <h6 style={{ textAlign: "left", fontSize: 18,color: "#FF0000", width: "100%" }}>
                    The Client name appear  
                   </h6> */}
                    
                  </Grid>
                </div>
              </div>
             

             

              <div class="transaction-section pb-15">
                <br />
                <div class="section-header">
                  <h2></h2>
                  <div class="view-all">
                    <Link to="#"></Link>
                  </div>
                </div>

              
              </div>
            </div>
          </div>

          <BottomMenu />
        </div>
        <Footer />
      </div>

      {
        //<!-- Document Wrapper end --> <!-- Back to Top
      }

      <a
        id="back-to-top"
        data-toggle="tooltip"
        title="Back to Top"
        href="javascript:void(0)"
      >
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 2,
    border: 12,
    borderRadius: 10,
    marginBottom: 2,
  },
  title: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    background: "#fffff",
    color: "#ff6a00",
    textAlign: "center",
    padding: 5,
    borderRadius: 5,
  },
  btn: {
    marginTop: 2,
    marginBottom: 20,
  },
}));
export default VoucherPreview;