/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Form from "./Form";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


function Home({ setShow }) {
  const testimonials = [
    {
      name: "Ananya Sharma",
      title: "Entrepreneur",
      message:
        "The online legal documentation was smooth and reliable. I didn’t have to step out at all! The team is professional and the turnaround time is excellent.",
    },
    {
      name: "Ravi Iyer",
      title: "Freelance Consultant",
      message:
        "Needed quick help with an NDA. Their legal team guided me properly and shared the document within hours. Highly recommended for professionals like me.",
    },
    {
      name: "Sonal Mehta",
      title: "Startup Founder",
      message:
        "Incorporating my company through their portal was fast, transparent, and cost-effective. Their support team was patient with all my queries.",
    },
    {
      name: "Karthik Reddy",
      title: "UX Designer",
      message:
        "I used their platform to register a trademark. The process was explained clearly, and the communication was consistent. Truly a hassle-free experience!",
    },
    {
      name: "Pooja Nair",
      title: "HR Manager",
      message:
        "We needed help with employment contracts and their team delivered clear, compliant, and easy-to-understand templates tailored to our needs.",
    },
    {
      name: "Amitabh Roy",
      title: "Legal Advisor",
      message:
        "I’ve used many legal service platforms, but this one stands out for its clarity and pricing transparency. Definitely worth relying on for any small business.",
    },
  ];

  return (
    <>
      <div
        className="container-fluid d-flex flex-column flex-lg-row justify-content-between "
        style={{
          height: "80vh",
          backgroundColor: "#1a202c",
          paddingTop: 0,
          // backgroundImage:
          //   "url(/banner.png)",

        }}
      >
        {/* Slider Section */}
        <div className="text-white p-5 flex-grow-1 witr_section_title_inner" style={{
          backgroundImage:
            "url(/banner.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
          <h3 className="text-white">Get Your Complaint's Resolved</h3>
          <p style={{
            background: "rgb(0,0,0,.5)",
            padding: "10px",
            borderRadius: '2px'

          }}>
            Welcome to allindialegalcomplaints, your trusted legal partner for
            all your legal needs. Our team of experienced advocates is dedicated
            to providing expert legal guidance and representation tailored to
            your specific situation.
          </p>
          <button className="btn btn-success">Get Appointment</button>
        </div>

        <div
          className="card p-4 w-100 w-lg-50 w-xl-40 mx-auto mx-lg-4 "

          style={{
            maxWidth: 400,
            backgroundColor: "#f8f9fa",
            borderRadius: 8,
            marginTop: 30,
            height: "fit-content",
          }}
        >
          <h4 className="text-center">Register Your Complaint</h4>
          <form id="multiStepForm">
            {/* Step 1 */}
            <div id="step1">
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name (नाम)"
                  required=""
                />
                <small className="text-danger" id="errorName" />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email id (ईमेल आईडी दर्ज करें)"
                  required=""
                />
                <small className="text-danger" id="errorEmail" />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  placeholder="Enter phone number (फ़ोन नंबर दर्ज करें)"
                  required=""
                />
                <small className="text-danger" id="errorPhone" />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  placeholder="Enter city (शहर का नाम दर्ज करें)"
                  required=""
                />
                <small className="text-danger" id="errorCity" />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  placeholder="Enter state (राज्य का नाम दर्ज करें)"
                  required=""
                />
                <small className="text-danger" id="errorState" />
              </div>
              <button
                type="button"
                className="btn btn-success w-100"
                onclick="nextStep()"
              >
                Next
              </button>
            </div>
            {/* Step 2 */}
            <div id="step2" style={{ display: "none" }}>
              <div className="mb-3">
                <input
                  type="text"
                  id="refundAmount"
                  className="form-control"
                  placeholder="Refund Amount (वापसी राशि)"
                  required=""
                />
                <small className="text-danger" id="errorRefundAmount" />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="complaintAgainst"
                  className="form-control"
                  placeholder="Complaint Against (शिकायत के खिलाफ)"
                  required=""
                />
                <small className="text-danger" id="errorComplaintAgainst" />
              </div>
              <div className="mb-3">
                <textarea
                  id="complaintDescription"
                  className="form-control"
                  placeholder="Complaint Description (शिकायत विवरण)"
                  rows={3}
                  required=""
                  defaultValue={""}
                />
                <small className="text-danger" id="errorComplaintDescription" />
              </div>
              <div className="mb-3">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LeooeIpAAAAAPF4iITH24YIt0b97OPxxFgScCWF"
                />
                <small className="text-danger" id="errorCaptcha" />
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onclick="prevStep()"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  id="submitButton"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* end slider area */}
      {/* feature area  */}
      <div className="lorw_service_area mt-4 md-mt-0 ">
        <div className="container">
          <div className="row service_inner">
            {/* 1 single feature */}
            <div className="col-lg-4 col-md-6">
              <div className="em-service all_color_service text-center">
                <div className="em_service_content">
                  <div className="em_single_service_text">
                    <div className="service_top_text">
                      <div className="em-service-icon all_icon_color">
                        <i className="flaticon flaticon-phone-call" />
                      </div>
                      <div className="em-service-title">
                        <h3>
                          <a href="#">Free Legal Consultation</a>
                        </h3>
                      </div>
                    </div>
                    <div className="em-service-inner">
                      <div className="em-service-desc">
                        <p>
                          Have legal doubts? Call our experts for a free consultation and get
                          instant guidance on civil, criminal, property, or business matters.
                        </p>
                      </div>
                    </div>
                    <div className="service-btn">
                      <a href="#">
                        Read More <span className="icofont-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 single feature */}
            <div className="col-lg-4 col-md-6">
              <div className="em-service all_color_service text-center">
                <div className="em_service_content">
                  <div className="em_single_service_text">
                    <div className="service_top_text">
                      <div className="em-service-icon all_icon_color">
                        <i className="flaticon flaticon-project-management" />
                      </div>
                      <div className="em-service-title">
                        <h3>
                          <a href="#">Track Your Case Status</a>
                        </h3>
                      </div>
                    </div>
                    <div className="em-service-inner">
                      <div className="em-service-desc">
                        <p>
                          Stay updated with real-time case tracking. Know when your next hearing is,
                          who’s handling your case, and what actions have been taken.
                        </p>
                      </div>
                    </div>
                    <div className="service-btn">
                      <a href="#">
                        Read More <span className="icofont-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 single feature */}
            <div className="col-lg-4 col-md-6">
              <div className="em-service all_color_service text-center">
                <div className="em_service_content">
                  <div className="em_single_service_text">
                    <div className="service_top_text">
                      <div className="em-service-icon all_icon_color">
                        <i className="flaticon flaticon-temporary-agency" />
                      </div>
                      <div className="em-service-title">
                        <h3>
                          <a href="#">Verified Legal Experts</a>
                        </h3>
                      </div>
                    </div>
                    <div className="em-service-inner">
                      <div className="em-service-desc">
                        <p>
                          Our team consists of top-rated, verified lawyers across India—experienced
                          in property law, civil disputes, criminal defense, corporate law, and more.
                        </p>
                      </div>
                    </div>
                    <div className="service-btn">
                      <a href="#">
                        Read More <span className="icofont-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* about area  */}
      <div className="lorw_about_area">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-6 col-md-6">
              <div className="about_content_inner">
                <div className="witr_section_title">
                  <div className="witr_section_title_inner text-left">
                    <h2>MORE ABOUT US</h2>
                    <h3>Need India's Top Legal Experts on Your Side?</h3>
                    <p>
                      With years of experience and a deep understanding of Indian law, our team has
                      successfully handled thousands of cases across corporate, civil, property, and criminal
                      domains. Whether you're starting a business, resolving a dispute, or protecting your rights
                      — we’re here to represent you with integrity, clarity, and confidence.
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="about_service_inner">
                  {/* Feature 1 */}
                  <div className="em-service2 sleft all_color_service">
                    <div className="em_service_content">
                      <div className="em_single_service_text">
                        <div className="text_box witr_s_flex">
                          <div className="service_top_text all_icon_color">
                            <div className="em-service-icon">
                              <i className="fas fa-check-circle" />
                            </div>
                          </div>
                          <div className="em-service-inner">
                            <div className="em-service-title">
                              <h3><a href="#">Pan-India Legal Services</a></h3>
                            </div>
                            <div className="em-service-desc">
                              <p>
                                We serve clients across all Indian states and union territories through our vast legal network.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="em-service2 sleft all_color_service">
                    <div className="em_service_content">
                      <div className="em_single_service_text">
                        <div className="text_box witr_s_flex">
                          <div className="service_top_text all_icon_color">
                            <div className="em-service-icon">
                              <i className="fas fa-check-circle" />
                            </div>
                          </div>
                          <div className="em-service-inner">
                            <div className="em-service-title">
                              <h3><a href="#">Transparent & Affordable</a></h3>
                            </div>
                            <div className="em-service-desc">
                              <p>
                                We offer fixed-fee services with no hidden charges — legal support that’s trustworthy and accessible.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="about_bottom_content">
                  <p>
                    Our mission is to make legal help simple, approachable, and effective — from property verification and agreement drafting to litigation and corporate compliance.
                  </p>
                </div>

                {/* Signature & Button */}
                <div className="about_bottom_img_btn">


                  {/* Button */}
                  <div className="witr_button_area">
                    <div className="witr_btn_style mr">
                      <div className="witr_btn_sinner">
                        <a href="/about" className="witr_btn">More About</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-md-6">
              <div className="lorw_about_image_inner">
                <div className="single_image_area">
                  <div className="single_image single_line_option" style={{ borderRadius: '6px' }}>
                    <img src="/map.webp" alt="Legal Team" style={{ borderRadius: '6px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" " style={{ background: 'rgb(0,0,0,.1)' }} >

        <h6 style={{ fontSize: '25px', textAlign: 'center' }}>Our Plans</h6>

        <p className='text-center'>
          Our legal experts draft the complaint details and send legal notice to the concerned company to claim the dispute amount.       </p>


        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5px" }} className='container'>


          <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{ textShadow: '1px 1px 1px ' }}>LEGAL FEES RS.699+18% GST</h2>
            <ul className="list-group">
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Advocate Legal Fees</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Notary & Documentary Fee</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Lost Amount RS. 0 - 10,000/-</li>
            </ul>
            <a href="#" className="btn btn-primary " style={{ margin: '20px', marginLeft: '0px' }}>Register</a>
          </div>



          <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{ textShadow: '1px 1px 1px ' }}>LEGAL FEES RS.1499 +18% GST</h2>
            <ul className="list-group">
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Advocate Legal Fees</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Notary & Documentary Fee</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Lost Amount RS. 10,001 - 20,000/-</li>
            </ul>
            <a href="#" className="btn btn-primary " style={{ margin: '20px', marginLeft: '0px' }}>Register</a>
          </div>



          <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{ textShadow: '1px 1px 1px ' }}>LEGAL FEES RS.1999+18% GST</h2>
            <ul className="list-group">
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Advocate Legal Fees</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Notary & Documentary Fee</li>
              <li className="list-group-item"><i className="fa fa-check-circle text-success"></i> Lost Amount RS. 20,001k - 50,000/-</li>
            </ul>
            <a href="#" className="btn btn-primary " style={{ margin: '20px', marginLeft: '0px' }}>Register</a>
          </div>

          <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{ textShadow: '1px 1px 1px ' }}>LEGAL FEES RS.2999 +18% GST</h2>
            <ul className="list-group">
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Advocate Legal Fees</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Notary & Documentary Fee</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Lost Amount RS.50,001 - 1 lac</li>
            </ul>
            <a href="#" className="btn btn-primary">Subscribe</a>
          </div>

          <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{ textShadow: '1px 1px 1px ' }}>LEGAL FEES RS.5999 +18% GST</h2>
            <ul className="list-group">
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Advocate Legal Fees</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Notary & Documentary Fee</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Lost Amount RS.1 lac - 3 lac</li>
            </ul>
            <a href="#" className="btn btn-primary">Subscribe</a>
          </div>

          <div className="shadow-custom rounded p-2 bg-white">
            <h2 className='text-center' style={{ textShadow: '1px 1px 1px ' }}>LEGAL FEES RS.6999 +18% GST</h2>
            <ul className="list-group">
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Advocate Legal Fees</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Registration Act Stamp Duty. Fee</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Notary & Documentary Fee</li>
              <li className="list-group-item"><i className="fas fa-check-circle text-success"></i> Lost Amount RS Above 3 lac</li>
            </ul>
            <a href="#" className="btn btn-primary">Subscribe</a>
          </div>


        </div>

      </div>
      {/* feature area */}
      <div className="lorw_feature_area">
        <div className="container">
          <div className="row">
            {/* Section Title */}
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2>OUR SERVICES</h2>
                  <h3>We Fight for Justice with Integrity</h3>
                  <h1>Every Case. Every Time.</h1>
                </div>
              </div>
            </div>

            {/* Service 1 - Tax Law */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item all_color_service text-left">

                <div className="text_box all_icon_color">
                  <h3><a href="#">Tax Law</a></h3>
                  <p>
                    Expert guidance on income tax, GST, and corporate tax disputes, including online filings and appeals.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 - Criminal Law */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item all_color_service text-left">
                {/* <div className="service_top_image">
            <img src="assets/images/f2.png" alt="Criminal Law" />
          </div> */}
                <div className="text_box all_icon_color">
                  <h3><a href="#">Criminal Law</a></h3>
                  <p>
                    Strong legal defense and representation for criminal cases including bail, FIR, and trials.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 - Family Law */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item all_color_service text-left">
                {/* <div className="service_top_image">
            <img src="assets/images/f3.png" alt="Family Law" />
          </div> */}
                <div className="text_box all_icon_color">
                  <h3><a href="#">Family Law</a></h3>
                  <p>
                    Get help with divorce, child custody, maintenance, domestic violence, and property settlements.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4 - Real Estate Law */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item all_color_service text-left">
                {/* <div className="service_top_image">
            <img src="assets/images/f4.png" alt="Real Estate Law" />
          </div> */}
                <div className="text_box all_icon_color">
                  <h3><a href="#">Real Estate Law</a></h3>
                  <p>
                    Property verification, sale deed drafting, builder disputes, and RERA compliance handled by experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="lorw_choose_area" style={{ background: "rgb(0,0,0,.1" }}>
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6">
              <div className="choose_img_inner">
                <div className="single_image_area">
                  <div className="single_image">
                    <img src="/image.png" alt="Top Lawyers India" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-6">
              <div className="choose_content_inner">
                <div className="witr_section_title">
                  <div className="witr_section_title_inner text-left">
                    <h2>WHY CHOOSE US</h2>
                    <h3>
                      Trusted by Thousands for Legal Services <span>Across India</span>
                    </h3>
                    <p>
                      With a dedicated team of verified legal experts, a transparent process,
                      and seamless digital support, we help individuals and businesses resolve legal issues with confidence.
                      Whether it's property, family, corporate or criminal matters — we’ve got your back.
                    </p>
                  </div>
                </div>

                {/* Key Points List */}
                <div className="departmentList all_list_color">
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-check-circle" />
                        100% Confidential & Secure Legal Assistance
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check-circle" />
                        Verified Lawyers for Every Legal Category
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check-circle" />
                        PAN India Legal Coverage with Online Consultation
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="em-service2 sleft all_color_service">
                  <div className="em_service_content">
                    <div className="em_single_service_text">
                      <div className="text_box witr_s_flex">
                        <div className="service_top_text all_icon_color">
                          <div className="em-service-icon">
                            <i className="flaticon flaticon-phone-call" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* counter area css */}
      <div className="lorw_counter_area">
        <div className="container">
          <div className="row">
            {/* 1 single counter */}
            <div className="col-lg-3 col-md-6">
              <div className="witr_counter_single all_counter_color">
                <div className="witr_counter_icon">
                  <i className="icofont icofont-ui-love" />
                </div>
                <div className="witr_counter_number_inn">
                  <h3 className="counter">963</h3>
                  <h4>Wining Case</h4>
                </div>
              </div>
            </div>
            {/* 2 single counter */}
            <div className="col-lg-3 col-md-6">
              <div className="witr_counter_single all_counter_color">
                <div className="witr_counter_icon">
                  <i className="icofont icofont-business-man" />
                </div>
                <div className="witr_counter_number_inn">
                  <h3 className="counter">796</h3>
                  <h4>Total Attorneys</h4>
                </div>
              </div>
            </div>
            {/* 3 single counter */}
            <div className="col-lg-3 col-md-6">
              <div className="witr_counter_single all_counter_color">
                <div className="witr_counter_icon">
                  <i className="icofont icofont-rocket-alt-2" />
                </div>
                <div className="witr_counter_number_inn">
                  <h3 className="counter">563</h3>
                  <h4>Cases Dismissed</h4>
                </div>
              </div>
            </div>
            {/* 4 single counter */}
            <div className="col-lg-3 col-md-6">
              <div className="witr_counter_single all_counter_color">
                <div className="witr_counter_icon">
                  <i className="icofont icofont-world" />
                </div>
                <div className="witr_counter_number_inn">
                  <h3 className="counter">499</h3>
                  <h4>World in Office</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lorw tab area */}

      {/* lorw testimonial area */}
      <div className="lorw_testimonial_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2>TESTIMONIAL</h2>
                  <h3>How We Are Trusted, See What</h3>
                  <h1>They Say Bout Us</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testimonial_active witr_testi_s10">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  }}
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="witr_testi_itemt testi-width all_color_testimonial">
                        <div className="em_single_testimonial">
                          <div className="em_test_thumb test-part">
                            <img
                              src={`https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541`}
                              alt="image"
                            />
                          </div>
                          <div className="em_testi_title">
                            <h2>
                              {item.name}
                              <span>{item.title}</span>
                            </h2>
                          </div>
                          <div className="em_testi_logo">
                            <div className="em_testilogo_inner" />
                          </div>
                          <div className="em_testi_content">
                            <div className="em_testi_text">
                              <p>{item.message}</p>
                            </div>
                          </div>
                          <div className="test-part">
                            <ul>
                              <li>
                                <div className="execllent_toggol">
                                  <div className="em_crating">
                                    {[...Array(5)].map((_, i) => (
                                      <i key={i} className="icofont-star active" />
                                    ))}
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default Home;
