import React from "react";
import "../App.css";

const Preview = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="background-image">
            <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
              <div className="container m-5">
                <a>
                  <img
                    src="https://rumble.ancorathemes.com/splash/assets/img/logo.png"
                    alt="Gloss Blog"
                  />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        DEMOS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        FEATURE
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        DOCUMENTATIONS
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        SUPOORT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div class="container position-relative zindex-5 text-center pt-5 mt-lg-4 mt-xl-5">
              <p class="fst-italic fs-2 text-danger">Multipurpose</p>

              <h1 class="display-1 mt-sm-3">
                <span class="text-white fw-bold">BOXING & MMA</span>
                <span class="d-inline-flex align-items-center">
                  <span class="text-white fw-bold">WP THEME</span>
                </span>
              </h1>

              <a
                href="#demos"
                class="btn btn-lg btn-danger mx-1"
                data-smooth-scroll="">
                VIEW ALL DEMOS
              </a>
            </div>

            <div class="d-flex position-relative zindex-2 mb-3">
              <div
                class="flex-xxl-shrink-0 position-relative zindex-2 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                data-disable-parallax-down="lg">
                <img
                  src="https://rumble.ancorathemes.com/splash/assets/img/component/component1.png"
                  alt="Gloss Blog"
                />
              </div>
              {/* <div
                class="flex-xxl-shrink-0 position-relative zindex-1 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                data-disable-parallax-down="lg">
                <img
                  src="https://rumble.ancorathemes.com/splash/assets/img/component/component2.png"
                  alt="Gloss Blog"
                />
              </div>
              <div
                class="flex-xxl-shrink-0 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-offset="250"
                data-disable-parallax-down="lg">
                <img
                  src="https://rumble.ancorathemes.com/splash/assets/img/component/component3.png"
                  alt="Gloss Blog"
                /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
