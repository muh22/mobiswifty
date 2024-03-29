import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
import { QRCode } from 'react-qrcode-logo';
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

import SearchBar from "material-ui-search-bar";

import scanImage from '../../images/icon_images/pmt-scan-bg.png';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
import { Paper, Box, Typography, ButtonBase } from "@material-ui/core";
import BottomMenu from "../Home/BottomMenu";
import Footer from "./Footer";

import logoImage from "../../images/logo/logo.jpeg";
import loginImage from "../../images/icon_images/ic_login_circle.jpeg";
import serviceImage from "../../images/icon_images/serviceicon.png";
import rraImage from "../../images/icon_images/rra.png";
import rssbImage from "../../images/icon_images/rssb.png";
import rnitImage from "../../images/icon_images/rnit.png";
import ejohezaImage from "../../images/icon_images/ejoheza.png";
import electricityImage from "../../images/icon_images/electricity.png";
import mtnImage from "../../images/icon_images/mtn.png";
import mobishuliImage from "../../images/icon_images/mobishuli.png";
import wasacImage from "../../images/icon_images/wasac.png";
import CategoryManager from "./CategoryManager";
import VoucherSearchBar from "./VoucherSearchBar";
export let qrcodeString=[];


//global inline styling
const useStyles = makeStyles((theme) => ({
    root: {
      borderRadius: 10,
      borderColor: "#ff9900",
      padding: 2,
      marginTop: 5,
      marginLeft: 5,
      marginRightt: 5,
    },
  }));

export default function Vouchers() {

  const[searchValue,setSearchValue]=useState();
  const doSomethingWith=()=>{
    console.log("Searching Token Id");
  }
    const classes = useStyles();
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
            <Paper
              elevation={0}
              variant="outlined"
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className={classes.root}
            >
              <div class="container">
                <div class="row">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <div class="col-sm-12 col-lg-12 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={0}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {" "}
                                  <img src={serviceImage} />
                                </i>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Paper>

            <div class="container">
              <h6 style={{ textAlign: "center", fontSize: 14, width: "100%" }}>
                A range of services to support individual needs
              </h6>
              <div className="transaction-card mb-15">
                                <Link to="#">
                                  <div className="transaction-card-info">
                                    <div className="transaction-info-thumb">
                                    <i class="flaticon-menu-1"></i>
                                    </div>
                                    <div className="transaction-info-text">
                                    <h6><span style={{fontSize:14}}><b>Voucher Types:</b></span> <span></span></h6>
                                    <VoucherSearchBar/>
                                    <p style={{color:'blue',fontSize:12,marginBottom:0,paddingBottom:0}}>Tap to redeem your voucher token</p>
                                    </div>
                                  </div>

                                </Link>
                              </div>
                              <div className="transaction-card mb-15">
                                {/* <Link to="#"> */}
                                  <div className="transaction-card-info">

                                    <div className="transaction-info-text">

                                    <h6>

                                      <span style={{fontSize:10}}>

                                      <SearchBar
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    onRequestSearch={() => doSomethingWith(searchValue)}

    placeholder="####-####-####-####"
  /></span> <span style={{color:'blue',fontSize:12,marginBottom:0,paddingBottom:0}}>Search your <b style={{color:"red"}}>voucher token*</b> to redeem it here!</span></h6>


                                    {//<SearchBarSide/>
}








                                    </div>

                                  </div>
                                  <div className="transaction-card-det negative-number">
                                <img src={scanImage} width="50"/>


                                  </div>
                                  
                                  <div className="transaction-info-text" style={{border:"1px solid #ff9900"}}>

                                     <a href="/voucherPreview">Next</a>
                                    </div>
                                   
                               {/* </Link> */}
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