import React from "react";
import Bio from "./biom.jpeg";
import "./firstc.css";

function FirstC() {
  return (
    <div className="container">
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
                Our methods are straight, comfortable, and established to ensure
                evolution and acceleration.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <button
                  type="button"
                  className="btn1 btn bsb-btn-3xl rounded-pill"
                  style={{ backgroundColor: "#D9EDBF" }}
                >
                  About Us
                </button>
                <button
                  type="button"
                  className="btn2 btn btn-outline-primary bsb-btn-3xl rounded-pill"
                >
                  Services
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-center">
              <img src={Bio} alt="" className="image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstC;
