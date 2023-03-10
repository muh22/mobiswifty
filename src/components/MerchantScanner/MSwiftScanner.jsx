import React, { useState, useRef } from "react";
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

import {QrReader} from "react-qr-reader";
import { Navigate, Link, useNavigate } from "react-router-dom";

import logoImage from "../../images/logo/logo.jpeg";
import loginImage from "../../images/icon_images/ic_login_circle.jpeg";

//import searchMerchantQrCode from "../api/MerchantSearchController";

import { toast } from "react-toastify";
import BottomMenu from "./BottomMenu";
function MSwiftScanner() {

    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [scanResultFile, setScanResultFile] = useState("");
    const [scanResultWebCam, setScanResultWebCam] = useState("");
    const [searchMerchantDetailMode, setSearchMerchantDetailMode] =useState(true);
    
    const classes = useStyles();
    const qrRef = useRef(null);
  
  
     //handling scanning error:
    const handleErrorWebCam = (error) => {
      //Scanning Error:
      console.log("Scanning Errors:" + error);
    };
  
      //Handling  ONLOAD WEB CAM
    const handleOnloadWebCam = (object) => {
      //Scanning Error:
      console.log("Onload Cam:" + object);
    };
  
    // Handling ONIMAGE  LOADING EVENT
    const handleOnImageLoadWebCam = (object) => {
      //Scanning Error:
      console.log("OnImageLoad:");
    };
  
  
    //Handling Scanning Web Cam Test
    const handleScanWebCam = async (result) => {
      //Scanning Result
      if (result) {
        
        if (result.length === 162) {
          console.log("Calling Merchant Details: Scanning Result:"+result);
  
          //await searchMerchantDetails("00020101021129360032e1043f0e7e2748a3b50285bba02cda99520410005802RW5916mobiswift@1808696006KIGALI64360002EN0116mobiswift@1808690206KIGALI5303646620711030006304585C");
          //navigate('/merchant-payment',{state:result});
        } else {
          console.log("Logging Empty QR String");
        }
      }
    };

    return (
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
                    {""}
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
                          <img
                            src={loginImage}
                            width="50"
                          />
                        </a>{" "}
                      </li>
                      <li class="align-items-center h-auto ml-sm-3">
                        <a class="btn btn-primary d-none d-sm-block" href="/signup">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
    
          <div class="content">
            <div class="container">
              <div class="authentication-form pb-15">
                <form action="#">
                  <div class="form-group pb-10">
                    <label></label>
                    <Container className={classes.conatiner}>
                      <div style={{ justifyItems: "center" }}>
                        <h6 className={classes.title}> {"QR CODE SCAN TO PAY "}</h6>
                        <h6 style={{ fontSize: 10 }}>
                          To make a QR code payment, you have to scan the code
                          displayed by merchants:
                          <ul>
                            <li>On QR Code stand or Mobile phone in-store</li>
                            <li>On TV Live Stream Shopping</li>
                            <li>On Online purchase</li>
                          </ul>
                        </h6>
                        <hr style={{ color: "red", size: 20 }} width="100%" />
                      </div>
                      <Card
                        style={{
                          minHeight: "75vh",
                          background: `url("assets/images/qrbg.jpeg")`,
                        }}
                      >
                        <CardContent
                          style={{
                            justifyItems: "center",
                            marginTop: 50,
                            paddingLeft: 75,
                            paddingRight: 50,
                            fontSize: 8,
                          }}
                        >
                          <Grid
                            container
                            spacing={3}
                            direction="column"
                            alignItems="center"
                            justify="center"
                          >
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                         <h3>Qr Code Scan by Web Cam</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                      </Grid>
                            <CardActions style={{ justifyItems: "center" }}>
                              <Button size="small">Cancel</Button>
                              <Button size="small">Continue</Button>
                            </CardActions>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Container>
                  </div>
                </form>
                .
              </div>
            </div>
          </div>
    
          <BottomMenu />
    
          <div class="scroll-top" id="scrolltop">
            <div class="scroll-top-inner">
              <i class="icofont-long-arrow-up"></i>
            </div>
          </div>
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

export default MSwiftScanner