import React from "react";
import "./Footer.css";

const FooterComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col">
          <div className="footer-background-image">
            <div class="container position-relative zindex-5 text-center pt-5 mt-lg-4 mt-xl-5">
              <p class="fst-italic fs-4 text-secondary">Don’t Waste Time</p>

              <h1 class="display-1 mt-sm-3">
                <span class="text-danger fw-bold">GET RUMBLE </span>
                <span class="d-inline-flex align-items-center">
                  <span class="text-white fw-bold"> RIGHT NOW</span>
                </span>
              </h1>

              <p class="fw-light text-white">
                We have everything you need for a perfect Boxing Wordpress
                Theme.
              </p>

              <a
                href="#demos"
                class="btn btn-lg btn-danger mx-1"
                data-smooth-scroll="">
                PURCHASE THEME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
