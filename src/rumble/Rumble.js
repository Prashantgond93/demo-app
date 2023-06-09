import React from "react";

const Rumble = () => {
  return (
    <div>
      <header className="bg-dark py-4">
        <nav className="container">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Classes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Schedule
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Trainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero-section bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to Rumble Boxing</h1>
          <p>Train like a champion. Join us today!</p>
          <a href="#" className="btn btn-light">
            Get Started
          </a>
        </div>
      </section>

      <section className="classes-section py-5">
        <div className="container">
          <h2 className="text-center">Our Classes</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <img
                  src="boxing-class.jpg"
                  className="card-img-top"
                  alt="Boxing Class"
                />
                <div className="card-body">
                  <h3 className="card-title">Boxing</h3>
                  <p className="card-text">
                    Get in the ring and unleash your power.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <img
                  src="mma-class.jpg"
                  className="card-img-top"
                  alt="MMA Class"
                />
                <div className="card-body">
                  <h3 className="card-title">Mixed Martial Arts</h3>
                  <p className="card-text">
                    Master multiple disciplines and become a complete fighter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections and content */}

      <footer className="bg-dark py-4 text-white text-center">
        <div className="container">
          <p>&copy; 2023 Rumble Boxing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Rumble;
