import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
export default function BottomMenu() {
  return (
    <section class="section">
      <div className="app-navbar">
        <div className="container">
          <div className="navbar-content ">
            <div class="navbar-content-item">
              <Link to="/" class="active">
                <i class="flaticon-house"></i>
                Home
              </Link>
            </div>
            <div class="navbar-content-item">
              <Link to="/services">
                <i class="flaticon-menu-1"></i>
                Services
              </Link>
            </div>
            <div class="navbar-content-item">
              <Link to="#">
                <i class="flaticon-menu-1"></i>
                MarketPlace
              </Link>
            </div>
            <div class="navbar-content-item">
              <Link to="#">
                <i class="flaticon-menu-1"></i>
                MobiTv
              </Link>
            </div>
            <div class="navbar-content-item">
              <Link to="#">
                <i class="flaticon-settings"></i>
                MoreApps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
