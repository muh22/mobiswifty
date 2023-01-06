import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
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

import merchnatImage from "../../images/icon_images/merchnatscan.png";
import smartIDImage from "../../images/icon_images/Smart-ID.png";
import fraudalertImage from "../../images/icon_images/fraudalert.png";

import rraImage from "../../images/icon_images/rra.png";
import rssbImage from "../../images/icon_images/rssb.png";
import rnitImage from "../../images/icon_images/rnit.png";
import ejohezaImage from "../../images/icon_images/ejoheza.png";
import electricityImage from "../../images/icon_images/electricity.png";
import mtnImage from "../../images/icon_images/mtn.png";
import mobishuliImage from "../../images/icon_images/mobishuli.png";
import wasacImage from "../../images/icon_images/wasac.png";

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

export default function ServicePage() {

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
        <h6 style={{ textAlign: "center", fontSize: 24,color: "#ff9900", width: "100%" }}>
                Payment Zone
         </h6>
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
                                  <img src={merchnatImage} />
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
                                  <img src={smartIDImage} />
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
                                  <img src={fraudalertImage} />
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
