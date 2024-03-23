// Home.js
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import MembershipStatus from "../../pages/membership/Membership"; // Import your MembershipStatus component
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  // State to manage membership status
  const [isMembershipActive, setMembershipActive] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Main content */}
            <section
              id="scrollspyHero"
              className="bsb-hero-2 bsb-tpl-bg-blue py-5 py-xl-8 py-xxl-10"
            >
              <div className="container overflow-hidden">
                <div className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
                  <div className="col-12 col-lg-6 order-1 order-lg-0">
                    <h1 className="display-3 fw-bolder mb-3">
                      We design sustainable <br />
                      <mark className="bsb-tpl-highlight bsb-tpl-highlight-blue">
                        <span className="bsb-tpl-font-hw display-2 text-accent fw-normal">
                          solutions
                        </span>
                      </mark>{" "}
                      for Biomedical waste disposal
                    </h1>
                    <p className="fs-4 mb-5">
                      Our methods are straight, comfortable, and established to
                      ensure evolution and acceleration.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex">
                      <button
                        type="button"
                        className="btn btn-primary bsb-btn-3xl rounded-pill"
                      >
                        Free Consultation
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary bsb-btn-3xl rounded-pill"
                      >
                        Buy Credits
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5 text-center">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src="./assets/img/hero/hero-home.jpg"
                      alt=""
                      style={{
                        WebkitMaskImage: "url(./biom.jpeg)",
                        maskImage: "url(./biom.jpeg)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-4">
            {/* Membership status component */}
            <MembershipStatus
              isMembershipActive={isMembershipActive}
              setMembershipActive={setMembershipActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
