import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <>
      <div
        className="container-fluid bg-page-header"
        style={{ marginBottom: 90 }}
      >
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 400 }}
          >
            <h3 className="display-3 text-white text-uppercase text-center">
              Contact
            </h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3" />
              <p className="m-0 text-uppercase">Contact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center pb-2">
            <h6 className="text-uppercase">Contact Us</h6>
            <h1 className="mb-4">Contact For Any Query</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="contact-form">
                <div id="success" />
                <div
                  className="p-2 rounded-3 bg-gradient-primary mx-auto rounded"
                  style={{ maxWidth: "450px", marginTop: "30px" }}
                >
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <Form />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: 400 }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24368.69965617633!2d77.6834616518166!3d12.943722181386125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13c4ddd89e49%3A0x38e208e226f26fa1!2s7th%20Cross%20Rd%2C%20Bellandur%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1skn!2sin!4v1716383734885!5m2!1skn!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
