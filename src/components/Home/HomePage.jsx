import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
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
import { Paper, Box, Typography, ButtonBase } from "@material-ui/core";
import SliderManager from "./SliderManager";
import $ from "jquery";
import scanToPayImage from "../../images/icon_images/scan2pay1.png";
import tokenImage from "../../images/icon_images/mobitoken.png";
import cashlessImage from "../../images/icon_images/cashless3.png";
import successpayImage from "../../images/icon_images/successpay.png";

import b2cImage from "../../images/icon_images/b2c-icon.png";
import b2bImage from "../../images/icon_images/b2b-icon.png";
import salesImage from "../../images/icon_images/sales-icon.png";

import mobishopImage from "../../images/icon_images/mobishop-icon.png";
import mobiyellowImage from "../../images/icon_images/mobiyellow-icon.png";
import mobicoupImage from "../../images/icon_images/mobicoupon-icon.png";

import emailImage from "../../images/icon_images/emailsup.png";
import faqImage from "../../images/icon_images/faqsupsup.png";
import ticketImage from "../../images/icon_images/ticketsup.png";
import chatImage from "../../images/icon_images/chat-menu.jpeg";
import serviceImage from "../../images/icon_images/serviceicon.png";
import joinusImage from "../../images/icon_images/join-us-ic.jpeg";
import alertImage from "../../images/icon_images/alert-ic.jpeg";
import logoImage from "../../images/logo/logo.jpeg";
import loginImage from "../../images/icon_images/ic_login_circle.jpeg";
import BottomMenu from "./BottomMenu";
import Footer from "./Footer";

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

export default function HomePage() {
  //variable declaration
  const [showChat, setShowChat] = useState(false);
  const classes = useStyles();
  //scripting block
  useEffect(() => {
    //alert($("#input").val())
    // Preloader
    $(window).on("load", function () {
      $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
      $("#preloader").delay(333).fadeOut("slow"); // will fade out the white DIV that covers the web app.
      $("body").delay(333);
    });

    // Dropdown show on hover
    $(
      ".primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown"
    ).on("mouseover", function () {
      if ($(window).width() > 991) {
        $(this).find("> .dropdown-menu").stop().slideDown("fast");
        $(this).bind("mouseleave", function () {
          $(this).find("> .dropdown-menu").stop().css("display", "none");
        });
      }
    });

    // When dropdown going off to the out of the screen.
    $(".primary-menu .dropdown-menu").each(function () {
      var menu = $("#header .header-row").offset();
      var dropdown = $(this).parent().offset();

      var i =
        dropdown.left +
        $(this).outerWidth() -
        (menu.left + $("#header .header-row").outerWidth());

      if (i > 0) {
        $(this).css("margin-left", "-" + (i + 5) + "px");
      }
    });

    // DropDown Arrow
    $(".primary-menu")
      .find("a.dropdown-toggle")
      .append($("<i />").addClass("arrow"));

    // Mobile Collapse Nav
    $(
      '.primary-menu .dropdown-toggle[href="#"], .primary-menu .dropdown-toggle[href!="#"] .arrow'
    ).on("click", function (e) {
      if ($(window).width() < 991) {
        e.preventDefault();
        var $parentli = $(this).closest("li");
        $parentli.siblings("li").find(".dropdown-menu:visible").slideUp();
        $parentli.find("> .dropdown-menu").stop().slideToggle();
        $parentli.siblings("li").find("a .arrow.open").toggleClass("open");
        $parentli.find("> a .arrow").toggleClass("open");
      }
    });

    // Mobile Menu Button Icon
    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("open");
    });
  });

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
            <SliderManager />

            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Payment Zone</b>
              </i>
            </h6>

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
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={scanToPayImage} />
                                </i>
                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  <b></b>
                                </h3>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={tokenImage} />
                                </i>

                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  <b></b>
                                </h3>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">VCard</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0  text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {/* <img src={cashlessImage} /> */}
                                </i>
                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  {/* <b>Cashless</b> */}
                                </h3>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5">
                        <div class="bg-light shadow-sm-0 rounded p-0  text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={successpayImage} />
                                </i>
                                <h6 class="text-body" style={{ fontSize: 10 }}>
                                  <b></b>
                                </h6>
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
            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Billing Zone</b>
              </i>
            </h6>

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
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={b2cImage} />
                                </i>
                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  <b>Consumer Sales</b>
                                </h3>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={b2bImage} />
                                </i>

                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  <b>Business Sales</b>
                                </h3>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">VCard</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0  text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={salesImage} />
                                </i>
                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  <b>Sales Report</b>
                                </h3>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5">
                        <div class="bg-light shadow-sm-0 rounded p-0  text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {/* <img src={successpayImage} /> */}
                                </i>
                                <h6 class="text-body" style={{ fontSize: 10 }}>
                                  <b></b>
                                </h6>
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

            {/* <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Service Zone</b>
              </i>
            </h6> */}
            {/* <Paper
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
                          <Link to="/services">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
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
            </Paper> */}

            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Membership Zone</b>
              </i>
            </h6>
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
                          <Link to="/signup">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={joinusImage} />
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


            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Market Place</b>
              </i>
            </h6>

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
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  >
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={mobishopImage} />
                                </i>
                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  <b>MobiShop</b>
                                </h3>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={mobiyellowImage} />
                                </i>

                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  <b>MobiYellow</b>
                                </h3>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">VCard</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0  text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={mobicoupImage} />
                                </i>
                                <h3 class="text-body" style={{ fontSize: 10 }}>
                                  <b>MobiCoupon</b>
                                </h3>
                              </span>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div class="col-sm-8 col-md-6 col-lg-5">
                        <div class="bg-light shadow-sm-0 rounded p-0  text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  {/* <img src={successpayImage} /> */}
                                </i>
                                <h6 class="text-body" style={{ fontSize: 10 }}>
                                  <b></b>
                                </h6>
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


            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Communication Zone</b>
              </i>
            </h6>

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
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={alertImage} />
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
            <h6>
              <i class="flaticon-right-arrow" style={{ fontSize: 12 }}>
                {" "}
                <b>Support Zone</b>
              </i>
            </h6>

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
                  <h6
                    style={{
                      color: "#f76a07",
                      textAlign: "right",
                      fontSize: 10,
                    }}
                  >
                    <b>We are ready to help you 24/7/365</b>
                  </h6>
                  <Grid container spacing={1}>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a href="#">
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={chatImage} />
                                </i>
                              </span>
                            </Card>
                            <h3 class="text-body text-1"> </h3>
                          </a>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6 mb-2 mb-lg-0">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a>
                            <Card elevation={5}>
                              {" "}
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={ticketImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Ticket</h3>*/}
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <a>
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={emailImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">Message</h3>*/}
                          </a>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <div class="col-sm-8 col-lg-6">
                        <div class="bg-light shadow-sm-0 rounded p-0 text-center">
                          <Link to="#">
                            <Card elevation={5}>
                              <span class="d-block text-10 text-primary mt-1 mb-1">
                                <i>
                                  <img src={faqImage} />
                                </i>
                              </span>
                            </Card>

                            {/*<h3 class="text-body text-1">FAQ</h3>*/}
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Paper>
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

      {
        //<!-- Video Modal
      }
    </div>
  );
}
