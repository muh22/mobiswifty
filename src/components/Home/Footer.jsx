import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
export default function Footer() {
  return (
    <footer id="footer">
      <div class="container">
        <div class="footer-copyright pt-3 pt-lg-2 mt-2">
          <div class="row">
            <div class="col-lg">
              <p class="text-center text-lg-left mb-2 mb-lg-0">
                Copyright &copy; 2022 <a href="#">MobiSwift</a>. All Rights
                Reserved.
              </p>
            </div>
            <div class="col-lg d-lg-flex align-items-center justify-content-lg-end">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  {" "}
                  <a class="nav-link active" href="#">
                    Security
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Terms
                  </a>
                </li>
                <li class="nav-item">
                  {" "}
                  <a class="nav-link" href="#">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
           
          </div>
          <br />
            <br />
        </div>
      </div>
    </footer>
  );
}
