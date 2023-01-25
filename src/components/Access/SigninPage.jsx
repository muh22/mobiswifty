import React from "react";
import { Card } from "@material-ui/core";
import SigninSliderManager from "./SigninSliderManager";
import logoImage from "../../images/logo/logo.jpeg";
import loginImage from "../../images/icon_images/ic_login_circle.jpeg";
import BottomMenu from "./BottomMenu";

function PageSignin() {
  return (
    <div>
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
      <div id="main-wrapper" class="h-100">
        <div class="container-fluid px-0 h-100">
          <div class="row no-gutters h-100">
            <div class="col-md-6">
              <div class="hero-wrap d-flex align-items-center h-100">
                <div class="hero-bg hero-bg-scroll"></div>
                <div class="hero-content mx-auto w-100 h-110 d-flex flex-column">
                  <Card elevation={0} style={{ margin: 10 }}>
                    <SigninSliderManager />
                  </Card>
                </div>
              </div>
            </div>

            <div class="col-md-6 d-flex align-items-center">
              <div class="container my-4">
                <div class="row">
                  <div class="col-11 col-lg-9 col-xl-8 mx-auto">
                    <h3 class="font-weight-400 mb-4">Log In</h3>

                    <form id="loginForm">
                      <div class="form-group">
                        <label for="username">Username:</label>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          required
                          placeholder="Enter Username"
                        />
                      </div>
                      <div class="form-group">
                        <label for="password">Password:</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div class="row">
                        <div class="col-sm">
                          <div class="form-check custom-control custom-checkbox">
                            <input
                              id="remember-me"
                              name="remember"
                              class="custom-control-input"
                              type="checkbox"
                            />
                            <label
                              class="custom-control-label"
                              for="remember-me"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div class="col-sm text-right">
                          <a class="btn-link" href="forget-password">
                            Forgot Password ?
                          </a>
                        </div>
                      </div>
                      <button class="btn btn-primary btn-block my-4">
                        Login
                      </button>
                    </form>
                    <p class="text-3 text-center text-muted">
                      Don't have an account?{" "}
                      <a class="btn-link" href="signup">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        id="back-to-top"
        data-toggle="tooltip"
        title="Back to Top"
        href="javascript:void(0)"
      >
        <i class="fa fa-chevron-up"></i>
      </a>
      <BottomMenu />
    </div>
  );
}

export default PageSignin;