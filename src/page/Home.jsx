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
  return (
    <>
      <div
        className="container-fluid d-flex flex-column flex-lg-row justify-content-between "
        style={{
          height: "80vh",
          backgroundColor: "#1a202c",
          paddingTop: 30,
          backgroundImage:
            "url(https://onlinelegalserviceindia.in/assets/img/banner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Slider Section */}
        <div className="text-white p-5 flex-grow-1 witr_section_title_inner">
          <h3 className="text-white">Get Your Complaint's Resolved</h3>
          <p>
            Welcome to lexbridge legal services, your trusted legal partner for
            all your legal needs. Our team of experienced advocates is dedicated
            to providing expert legal guidance and representation tailored to
            your specific situation.
          </p>
          <button className="btn btn-success">Get Appointment</button>
        </div>
        {/* Form Section */}
        <div
          className="card p-4 w-100 w-lg-50 w-xl-40 mx-4 my-5 my-lg-0"
          style={{
            maxWidth: 500,
            backgroundColor: "#f8f9fa",
            borderRadius: 8,
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
      <div className="lorw_service_area">
        <div className="container">
          <div className="row service_inner">
            {/* 1 single feature */}
            <div className="col-lg-4 col-md-6">
              <div className="em-service all_color_service text-center">
                <div className="em_service_content">
                  <div className="em_single_service_text ">
                    <div className="service_top_text">
                      <div className="em-service-icon all_icon_color">
                        <i className="flaticon flaticon-phone-call" />
                      </div>
                      <div className="em-service-title">
                        <h3>
                          <a href="#">Please Call Us to Take an</a>
                        </h3>
                      </div>
                    </div>
                    <div className="em-service-inner">
                      <div className="em-service-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt
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
                  <div className="em_single_service_text ">
                    <div className="service_top_text">
                      <div className="em-service-icon all_icon_color">
                        <i className="flaticon flaticon-project-management" />
                      </div>
                      <div className="em-service-title">
                        <h3>
                          <a href="#">Case Dismissed</a>
                        </h3>
                      </div>
                    </div>
                    <div className="em-service-inner">
                      <div className="em-service-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt
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
                  <div className="em_single_service_text ">
                    <div className="service_top_text">
                      <div className="em-service-icon all_icon_color">
                        <i className="flaticon flaticon-temporary-agency" />
                      </div>
                      <div className="em-service-title">
                        <h3>
                          <a href="#">Expert Attorneys</a>
                        </h3>
                      </div>
                    </div>
                    <div className="em-service-inner">
                      <div className="em-service-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt
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
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about_content_inner">
                <div className="witr_section_title">
                  <div className="witr_section_title_inner text-left">
                    <h2>MORE ABOUT US</h2>
                    <h3>Do You Need The Top Lawyers From Us?</h3>
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. available, what if any plea bargains
                      may be offered to you. I enjoy with my whole heart.
                      available, what if any plea bargains may be offered to
                      you.
                    </p>
                  </div>
                </div>
                <div className="about_service_inner">
                  <div className="em-service2 sleft all_color_service">
                    <div className="em_service_content ">
                      <div className="em_single_service_text">
                        <div className="text_box witr_s_flex">
                          <div className="service_top_text all_icon_color">
                            <div className="em-service-icon">
                              {" "}
                              <i className="fas fa-check-circle" />
                            </div>
                          </div>
                          <div className="em-service-inner">
                            <div className="em-service-title">
                              <h3>
                                <a href="#">Market &amp;Lawyers </a>
                              </h3>
                            </div>
                            <div className="em-service-desc">
                              <p>
                                If you are looking for a thy and reputable
                                company to
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="em-service2 sleft all_color_service">
                    <div className="em_service_content ">
                      <div className="em_single_service_text">
                        <div className="text_box witr_s_flex">
                          <div className="service_top_text all_icon_color">
                            <div className="em-service-icon">
                              {" "}
                              <i className="fas fa-check-circle" />
                            </div>
                          </div>
                          <div className="em-service-inner">
                            <div className="em-service-title">
                              <h3>
                                <a href="#">Market &amp;Lawyers </a>
                              </h3>
                            </div>
                            <div className="em-service-desc">
                              <p>
                                If you are looking for a thy and reputable
                                company to
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about_bottom_content">
                  <p>
                    We created ready has taken possession of my entire soul,
                    like these real state, corporate risk practices.mornings of
                    spring.
                  </p>
                </div>
                <div className="about_bottom_img_btn">
                  <div className="em-service2 sleft all_color_service">
                    <div className="em_service_content ">
                      <div className="em_single_service_text">
                        <div className="text_box witr_s_flex">
                          <div className="service_top_text all_icon_color">
                            <div className="em-service-icon">
                              <img src="assets/images/t1.png" alt="image" />
                            </div>
                          </div>
                          <div className="em-service-inner">
                            <div className="em-service-title">
                              <h3>Shilpa Sheek</h3>
                            </div>
                            <div className="em-service-desc">
                              <p> Co- Officer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="witr_button_area">
                    <div className="witr_btn_style mr">
                      <div className="witr_btn_sinner">
                        <a href="#" className="witr_btn">
                          More About{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="lorw_about_image_inner">
                <div className="single_image_area">
                  <div className="single_image single_line_option  ">
                    <img src="assets/images/about-thumb1.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature area */}
      <div className="lorw_feature_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2>MORE SERVICE US</h2>
                  <h3>We Fight For Justice Not Win</h3>
                  <h1>Case Anyhow</h1>
                </div>
              </div>
            </div>
            {/* 1 single feature */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item all_color_service text-left">
                <div className="service_top_image">
                  <img src="assets/images/f1.png" alt="image" />
                </div>
                <div className="text_box all_icon_color">
                  <h3>
                    <a href="#">Tax Law</a>
                  </h3>
                  <p>
                    Exercitation photo booth stump town to banksy, elit small
                  </p>
                </div>
              </div>
            </div>
            {/* 2 single feature */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item all_color_service text-left">
                <div className="service_top_image">
                  <img src="assets/images/f2.png" alt="image" />
                </div>
                <div className="text_box all_icon_color">
                  <h3>
                    <a href="#">Carousel Of lorw</a>
                  </h3>
                  <p>
                    Exercitation photo booth stump town to banksy, elit small
                  </p>
                </div>
              </div>
            </div>
            {/* 3 single feature */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item all_color_service text-left">
                <div className="service_top_image">
                  <img src="assets/images/f3.png" alt="image" />
                </div>
                <div className="text_box all_icon_color">
                  <h3>
                    <a href="#">Family lorw</a>
                  </h3>
                  <p>
                    Exercitation photo booth stump town to banksy, elit small
                  </p>
                </div>
              </div>
            </div>
            {/* 4 single feature */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item all_color_service text-left">
                <div className="service_top_image">
                  <img src="assets/images/f4.png" alt="image" />
                </div>
                <div className="text_box all_icon_color">
                  <h3>
                    <a href="#">Real Estate Law</a>
                  </h3>
                  <p>
                    Exercitation photo booth stump town to banksy, elit small
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lorw brand area */}
      <div className="lorw_brand_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="carousel_imagess_area">
                <div className="brand_active d-flex flex-wrap justify-content-center align-items-center">
                  {/* Single brand logos */}
                  <div className="slide_items">
                    <a href="#">
                      <img src="assets/images/br1.png" alt="brand1" />
                    </a>
                  </div>
                  <div className="slide_items">
                    <a href="#">
                      <img src="assets/images/br2.png" alt="brand2" />
                    </a>
                  </div>
                  <div className="slide_items">
                    <a href="#">
                      <img src="assets/images/br3.png" alt="brand3" />
                    </a>
                  </div>
                  <div className="slide_items">
                    <a href="#">
                      <img src="assets/images/br4.png" alt="brand4" />
                    </a>
                  </div>
                  <div className="slide_items">
                    <a href="#">
                      <img src="assets/images/br2.png" alt="brand5" />
                    </a>
                  </div>
                  <div className="slide_items">
                    <a href="#">
                      <img src="assets/images/br3.png" alt="brand6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lorw choose area */}
      <div className="lorw_choose_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="choose_img_inner">
                <div className="single_image_area">
                  <div className="single_image">
                    <img src="assets/images/skill-thumb1.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="choose_content_inner">
                <div className="witr_section_title">
                  <div className="witr_section_title_inner text-left">
                    <h2>MORE CHOOSE US</h2>
                    <h3>
                      Do You Need The Top Lawyers <span> From Us? </span>
                    </h3>
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. available, what if any plea bargains
                      may be offered to you. I enjoy with my whole heart.
                      available, what if any plea bargains may be offered to
                      you.
                    </p>
                  </div>
                </div>
                <div className="departmentList all_list_color">
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-check-circle" />I am alone, and
                        feel the charm of existence in this spot
                      </span>
                    </li>
                    <li>
                      <span>
                        {" "}
                        <i className="fas fa-check-circle" />
                        Which I enjoy with my whole hear am alone and feel.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check-circle" />
                        Grow organically the holistic world view. am alone and
                        feel.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="em-service2 sleft all_color_service">
                  <div className="em_service_content ">
                    <div className="em_single_service_text  ">
                      <div className="text_box witr_s_flex">
                        <div className="service_top_text all_icon_color">
                          <div className="em-service-icon">
                            {" "}
                            <i className="flaticon flaticon-phone-call" />
                          </div>
                        </div>
                        <div className="em-service-inner">
                          <div className="em-service-title">
                            <h3>
                              <a href="#">Get Call Us</a>
                            </h3>
                          </div>
                          <div className="em-service-desc">
                            <p>(+099) 235 462 325</p>
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
      <div className="lorw_tab_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-left">
                  <h2>MORE SERVICE US</h2>
                  <h3>We Fight For Justice Not Win</h3>
                  <h1>Case Anyhow</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-8 witr_all_pd0">
              <div className="witr_adv_tab_area witr_taba_style1 tab_all_colora">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link epo-2537d93"
                      data-toggle="tab"
                      href="#tx_tab_02f85021"
                    >
                      <span className="witr_tab_icona">
                        {" "}
                        <i className="flaticon flaticon-school-1" />{" "}
                      </span>
                      <strong>Business</strong>{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link epo-f50521a active"
                      data-toggle="tab"
                      href="#tx_tab_02f85022"
                    >
                      <span className="witr_tab_icona">
                        {" "}
                        <i className="flaticon flaticon-book" />{" "}
                      </span>
                      <strong>Education</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link epo-19b0799"
                      data-toggle="tab"
                      href="#tx_tab_02f85023"
                    >
                      <span className="witr_tab_icona">
                        {" "}
                        <i className="flaticon flaticon-fingerprint" />{" "}
                      </span>{" "}
                      <strong>Technology</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link epo-31b269b  "
                      data-toggle="tab"
                      href="#tx_tab_02f85024"
                    >
                      {" "}
                      <span className="witr_tab_icona">
                        {" "}
                        <i className="flaticon flaticon-money-2" />{" "}
                      </span>{" "}
                      <strong>Finalcial </strong>{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link epo-5364aef  "
                      data-toggle="tab"
                      href="#tx_tab_02f85025"
                    >
                      {" "}
                      <span className="witr_tab_icona">
                        {" "}
                        <i className="flaticon flaticon-idea-1" />{" "}
                      </span>{" "}
                      <strong>Criminal</strong>{" "}
                    </a>
                  </li>
                </ul>
              </div>
              {/* tab content */}
              <div className="witr_adv_tab_area witr_taba_style1 tab_all_colora">
                <div className="tab-content">
                  {/* tab content 01 */}
                  <div
                    className="tab-pane fade epo-6487410"
                    id="tx_tab_02f85021"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="single_image_area tab_content_one">
                          <div className="single_image single_line_option  ">
                            <img
                              src="assets/images/tab-thumb.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tab_content_inner">
                          <div className="witr_text_widget">
                            <div className="witr_text_widget_inner">
                              <h2>Business Law ?</h2>
                              <p />
                              <p>
                                It is a long established fact that a reader will
                                be distracted by he readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                them distribution of letters, as opposed.
                              </p>
                              <p />
                              <div className="witr_widget_list">
                                <ul>
                                  <li>
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      {" "}
                                      I am alone, and feel the charm of
                                      existence in this spot
                                    </span>
                                  </li>
                                  <li>
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Which I enjoy with my whole hear am alone
                                      and feel.
                                    </span>
                                  </li>
                                  <li>
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Grow organically the holistic world view.
                                      am alone and feel.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="witr_button_area">
                            <div className="witr_btn_style mr">
                              <div className="witr_btn_sinner">
                                {" "}
                                <a href="#" className="witr_btn">
                                  See More Destails{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tab content 02 */}
                  <div
                    className="tab-pane fade epo-6487410 active show"
                    id="tx_tab_02f85022"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tab_content_inner">
                          <div className="witr_text_widget">
                            <div className="witr_text_widget_inner">
                              <h2>Education Law ?</h2>
                              <p />
                              <p>
                                It is a long established fact that a reader will
                                be distracted by he readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                them distribution of letters, as opposed.
                              </p>
                              <p />
                              <div className="witr_widget_list">
                                <ul>
                                  <li>
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>
                                    <span className="witr_list_text">
                                      {" "}
                                      I am alone, and feel the charm of
                                      existence in this spot
                                    </span>
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Which I enjoy with my whole hear am alone
                                      and feel.
                                    </span>
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Grow organically the holistic world view.
                                      am alone and feel.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="witr_button_area">
                            <div className="witr_btn_style mr">
                              <div className="witr_btn_sinner">
                                <a href="#" className="witr_btn">
                                  See More Destails{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="single_image_area">
                          <div className="single_image single_line_option  ">
                            <img
                              src="assets/images/tab-thumb.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tab content 03 */}
                  <div
                    className="tab-pane fade epo-6487410"
                    id="tx_tab_02f85023"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tab_content_inner">
                          <div className="witr_text_widget">
                            <div className="witr_text_widget_inner">
                              <h2>Technology Law ?</h2>
                              <p />
                              <p>
                                It is a long established fact that a reader will
                                be distracted by he readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                them distribution of letters, as opposed.
                              </p>
                              <p />
                              <div className="witr_widget_list">
                                <ul>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      {" "}
                                      I am alone, and feel the charm of
                                      existence in this spot
                                    </span>
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Which I enjoy with my whole hear am alone
                                      and feel.
                                    </span>
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Grow organically the holistic world view.
                                      am alone and feel.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="witr_button_area">
                            <div className="witr_btn_style mr">
                              <div className="witr_btn_sinner">
                                {" "}
                                <a href="#" className="witr_btn">
                                  See More Destails{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tab_witr_video tab_content3_video">
                          <div className="video-part">
                            <div className="video-overlay witr_all_color_v">
                              <div className="video-item   witr_none_before   text-center">
                                {" "}
                                <a
                                  className="tx_svd_icon video-popup video-vemo-icon venobox vbox-item"
                                  data-vbtype="youtube"
                                  data-autoplay="true"
                                  href="https://youtu.be/BS4TUd7FJSg"
                                >
                                  {" "}
                                  <i className="icofont-ui-play" />{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tab content 04 */}
                  <div
                    className="tab-pane fade epo-6487410"
                    id="tx_tab_02f85024"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tab_content_inner">
                          <div className="witr_text_widget">
                            <div className="witr_text_widget_inner">
                              <h2>Finalcial Law ?</h2>
                              <p />
                              <p>
                                It is a long established fact that a reader will
                                be distracted by he readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                them distribution of letters, as opposed.
                              </p>
                              <p />
                              <div className="witr_widget_list">
                                <ul>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      {" "}
                                      I am alone, and feel the charm of
                                      existence in this spot
                                    </span>
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Which I enjoy with my whole hear am alone
                                      and feel.
                                    </span>
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Grow organically the holistic world view.
                                      am alone and feel.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="witr_button_area">
                            <div className="witr_btn_style mr">
                              <div className="witr_btn_sinner">
                                {" "}
                                <a href="#" className="witr_btn">
                                  See More Destails{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="single_image_area">
                          <div className="single_image single_line_option  ">
                            <img
                              src="assets/images/tab-thumb.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tab content 05 */}
                  <div
                    className="tab-pane fade epo-6487410"
                    id="tx_tab_02f85025"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="single_image_area tab_content_one">
                          <div className="single_image single_line_option  ">
                            <img
                              src="assets/images/tab-thumb.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tab_content_inner">
                          <div className="witr_text_widget">
                            <div className="witr_text_widget_inner">
                              <h2>Criminal Law ?</h2>
                              <p />
                              <p>
                                It is a long established fact that a reader will
                                be distracted by he readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                them distribution of letters, as opposed.
                              </p>
                              <p />
                              <div className="witr_widget_list">
                                <ul>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      {" "}
                                      I am alone, and feel the charm of
                                      existence in this spot
                                    </span>
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Which I enjoy with my whole hear am alone
                                      and feel.
                                    </span>
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="witr_list_icon">
                                      <i className="icofont icofont-rounded-right" />
                                    </span>{" "}
                                    <span className="witr_list_text">
                                      Grow organically the holistic world view.
                                      am alone and feel.
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="witr_button_area">
                            <div className="witr_btn_style mr">
                              <div className="witr_btn_sinner">
                                {" "}
                                <a href="#" className="witr_btn">
                                  See More Destails{" "}
                                </a>
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
            <div className="col-lg-4 col-md-4">
              <div className="tab_witr_video">
                <div className="video-part">
                  <div className="video-overlay witr_all_color_v">
                    <div className="video-item   witr_none_before   text-center">
                      {" "}
                      <a
                        className="tx_svd_icon video-popup video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        {" "}
                        <i className="icofont-ui-play" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lorw team area */}
      <div className="lorw_team_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2>OUR TEAM</h2>
                  <h3>Our Expert Lawyers</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row team_active">
            {/* 1 single team */}
            <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12 col-lg-4">
              <div className="all_color_team">
                <div className="witr_team_section">
                  <img src="assets/images/team-04.jpg" alt="image" />
                </div>
                <div className="post_team_content">
                  <div className="row">
                    {/* Left Column for Details */}
                    <div className="col-6">
                      <div className="post_team_content9 all_content_bg_color">
                        <h5>
                          <a href="#">Liton Sarkar</a>
                        </h5>
                        <span>Founder</span>
                      </div>
                    </div>
                    {/* Right Column for Social Media Icons */}
                    <div className="col-6">
                      <div className="post_team_icon_9 all_team_icon_o_color">
                        <ul className="witr_pots_team_s">
                          <li>
                            <a href="#">
                              <i className="icofont-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 single team */}
            <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12 col-lg-4">
              <div className="all_color_team">
                <div className="witr_team_section">
                  <img src="assets/images/team-05.jpg" alt="image" />
                </div>
                <div className="post_team_content">
                  <div className="row">
                    {/* Left Column for Details */}
                    <div className="col-6">
                      <div className="post_team_content9 all_content_bg_color">
                        <h5>
                          <a href="#">Tomas Brown</a>
                        </h5>
                        <span>Founder</span>
                      </div>
                    </div>
                    {/* Right Column for Social Media Icons */}
                    <div className="col-6">
                      <div className="post_team_icon_9 all_team_icon_o_color">
                        <ul className="witr_pots_team_s">
                          <li>
                            <a href="#">
                              <i className="icofont-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 single team */}
            <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12 col-lg-4">
              <div className="all_color_team">
                <div className="witr_team_section">
                  <img src="assets/images/team-06.jpg" alt="image" />
                </div>
                <div className="post_team_content">
                  <div className="row">
                    {/* Left Column for Details */}
                    <div className="col-6">
                      <div className="post_team_content9 all_content_bg_color">
                        <h5>
                          <a href="#">Assadul Islam</a>
                        </h5>
                        <span>Founder</span>
                      </div>
                    </div>
                    {/* Right Column for Social Media Icons */}
                    <div className="col-6">
                      <div className="post_team_icon_9 all_team_icon_o_color">
                        <ul className="witr_pots_team_s">
                          <li>
                            <a href="#">
                              <i className="icofont-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 single team */}
            <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12 col-lg-4">
              <div className="all_color_team">
                <div className="witr_team_section">
                  <img src="assets/images/team-05.jpg" alt="image" />
                </div>
                <div className="post_team_content">
                  <div className="row">
                    {/* Left Column for Details */}
                    <div className="col-6">
                      <div className="post_team_content9 all_content_bg_color">
                        <h5>
                          <a href="#">Shamim Sarkar</a>
                        </h5>
                        <span>Founder</span>
                      </div>
                    </div>
                    {/* Right Column for Social Media Icons */}
                    <div className="col-6">
                      <div className="post_team_icon_9 all_team_icon_o_color">
                        <ul className="witr_pots_team_s">
                          <li>
                            <a href="#">
                              <i className="icofont-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  {[1, 2, 3, 4].map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="witr_testi_itemt testi-width all_color_testimonial">
                        <div className="em_single_testimonial">
                          <div className="em_test_thumb test-part">
                            <img
                              src={`assets/images/testi-0${item}.png`}
                              alt="image"
                            />
                          </div>
                          <div className="em_testi_title">
                            <h2>
                              {item === 1 && "Rebecca Stevens"}
                              {item === 2 && "Nihidan Alex"}
                              {item === 3 && "Rebecca Stevens"}
                              {item === 4 && "Poral Dawson"}
                              <span>
                                {item === 1 && "Diroctore"}
                                {item === 2 && "UX Designer"}
                                {item === 3 && "CEO & Funder"}
                                {item === 4 && "Designer"}
                              </span>
                            </h2>
                          </div>
                          <div className="em_testi_logo">
                            <div className="em_testilogo_inner" />
                          </div>
                          <div className="em_testi_content">
                            <div className="em_testi_text">
                              <p>
                                Following best practices and pro edu izations in
                                the industry, our cles disinf a reader will be
                                distracted discretion admiration in particular.
                              </p>
                            </div>
                          </div>
                          <div className="test-part">
                            <ul>
                              <li>
                                <div className="execllent_toggol">
                                  <div className="em_crating">
                                    {[...Array(5)].map((_, i) => (
                                      <i
                                        key={i}
                                        className="icofont-star active"
                                      />
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
      {/* <div className="lorw_testimonial_area">
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
            <div className="col-lg-12 ">
              <div className=" testimonial_active witr_testi_s10"> */}
      {/* 1 single testimonial */}
      {/* <div className="witr_testi_itemt testi-width all_color_testimonial">
                  <div className="em_single_testimonial">
                    <div className="em_test_thumb test-part">
                      <img src="assets/images/testi-01.png" alt="image" />
                    </div>
                    <div className="em_testi_title">
                      <h2>
                        Rebecca Stevens <span>Diroctore</span>
                      </h2>
                    </div>
                    <div className="em_testi_logo">
                      <div className="em_testilogo_inner" />
                    </div>
                    <div className="em_testi_content">
                      <div className="em_testi_text">
                        <p>
                          Following best practices and pro edu izations in the
                          industry, our cles disinf a reader will be distracted
                          discretion admiration in particular.
                        </p>
                      </div>
                    </div>
                    <div className="test-part">
                      <ul>
                        <li>
                          <div className="execllent_toggol">
                            <div className="em_crating">
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
      {/* 2 single testimonial */}
      {/* <div className="witr_testi_itemt testi-width all_color_testimonial">
                  <div className="em_single_testimonial">
                    <div className="em_test_thumb test-part">
                      <img src="assets/images/testi-02.png" alt="image" />
                    </div>
                    <div className="em_testi_title">
                      <h2>
                        Nihidan Alex <span>UX Designer</span>
                      </h2>
                    </div>
                    <div className="em_testi_logo">
                      <div className="em_testilogo_inner" />
                    </div>
                    <div className="em_testi_content">
                      <div className="em_testi_text">
                        <p>
                          Following best practices and pro edu izations in the
                          industry, our cles disinf a reader will be distracted
                          discretion admiration in particular.
                        </p>
                      </div>
                    </div>
                    <div className="test-part">
                      <ul>
                        <li>
                          <div className="execllent_toggol">
                            <div className="em_crating">
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
      {/* 3 single testimonial */}
      {/* <div className="witr_testi_itemt testi-width all_color_testimonial">
                  <div className="em_single_testimonial">
                    <div className="em_test_thumb test-part">
                      <img src="assets/images/testi-03.png" alt="image" />
                    </div>
                    <div className="em_testi_title">
                      <h2>
                        Rebecca Stevens <span>CEO &amp; Funder</span>
                      </h2>
                    </div>
                    <div className="em_testi_logo">
                      <div className="em_testilogo_inner" />
                    </div>
                    <div className="em_testi_content">
                      <div className="em_testi_text">
                        <p>
                          Following best practices and pro edu izations in the
                          industry, our cles disinf a reader will be distracted
                          discretion admiration in particular.
                        </p>
                      </div>
                    </div>
                    <div className="test-part">
                      <ul>
                        <li>
                          <div className="execllent_toggol">
                            <div className="em_crating">
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
      {/* 4 single testimonial */}
      {/* <div className="witr_testi_itemt testi-width all_color_testimonial">
                  <div className="em_single_testimonial">
                    <div className="em_test_thumb test-part">
                      <img src="assets/images/testi-02.png" alt="image" />
                    </div>
                    <div className="em_testi_title">
                      <h2>
                        Poral Dawson <span>Designer</span>
                      </h2>
                    </div>
                    <div className="em_testi_logo">
                      <div className="em_testilogo_inner" />
                    </div>
                    <div className="em_testi_content">
                      <div className="em_testi_text">
                        <p>
                          Following best practices and pro edu izations in the
                          industry, our cles disinf a reader will be distracted
                          discretion admiration in particular.
                        </p>
                      </div>
                    </div>
                    <div className="test-part">
                      <ul>
                        <li>
                          <div className="execllent_toggol">
                            <div className="em_crating">
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                              <i className="icofont-star active" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* lorw portfolio area */}
      <div className="lorw_portfolio_area pstyle2 pstyle_1 port_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2>CASE STUDIES</h2>
                  <h3>Our Latest Case Studies</h3>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="portfolio_nav  wittr_pfilter_menu">
                <ul id="filter" className="filter_menu ">
                  <li className="current_menu_item" data-filter="*">
                    All Work
                  </li>
                  <li data-filter=".business_law">Business Law</li>
                  <li data-filter=".family_law">Family Law</li>
                  <li data-filter=".finalcial_low">Finalcial Low</li>
                  <li data-filter=".technology_low">Technology Low</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="pstyle2 pstyle4">
                <div className="prot_wrap row portfolio_active">
                  {/* 1 single portfolio */}
                  <div className="grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 business_law family_law">
                    <div className="single_protfolio">
                      <div className="prot_thumb">
                        <img src="assets/images/p1.jpg" alt="image" />
                        <div className="prot_content">
                          <div className="prot_content_inner">
                            <div className="picon">
                              {" "}
                              <a
                                className="portfolio-icon venobox vbox-item"
                                data-gall="myGallery"
                                href="assets/images/p1.jpg"
                              >
                                <i className="icofont-image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pprotfolio4">
                        <div className="porttitle_inner4">
                          <h3>
                            <a href="#">Domestic Violence</a>
                          </h3>
                          <p>
                            <span className="category-item-p">
                              Business Law
                            </span>
                            <span className="category-item-p">Family Law</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 2 single portfolio */}
                  <div className="grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 business_law finalcial_low">
                    <div className="single_protfolio">
                      <div className="prot_thumb">
                        <img src="assets/images/p2.jpg" alt="image" />
                        <div className="prot_content">
                          <div className="prot_content_inner">
                            <div className="picon">
                              {" "}
                              <a
                                className="portfolio-icon venobox vbox-item"
                                data-gall="myGallery"
                                href="assets/images/p2.jpg"
                              >
                                <i className="icofont-image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pprotfolio4">
                        <div className="porttitle_inner4">
                          <h3>
                            <a href="#">Labour Law</a>
                          </h3>
                          <p>
                            <span className="category-item-p">
                              Business Law
                            </span>
                            <span className="category-item-p">
                              Finalcial Low
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 3 single portfolio */}
                  <div className="grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 family_law finalcial_low">
                    <div className="single_protfolio">
                      <div className="prot_thumb">
                        <img src="assets/images/p3.jpg" alt="image" />
                        <div className="prot_content">
                          <div className="prot_content_inner">
                            <div className="picon">
                              {" "}
                              <a
                                className="portfolio-icon venobox vbox-item"
                                data-gall="myGallery"
                                href="assets/images/p3.jpg"
                              >
                                <i className="icofont-image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pprotfolio4">
                        <div className="porttitle_inner4">
                          <h3>
                            <a href="#">Common Law</a>
                          </h3>
                          <p>
                            <span className="category-item-p">Family Law </span>
                            <span className="category-item-p">
                              Finalcial Low
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 4 single portfolio */}
                  <div className="grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 business_law finalcial_low">
                    <div className="single_protfolio">
                      <div className="prot_thumb">
                        <img src="assets/images/p4.jpg" alt="image" />
                        <div className="prot_content">
                          <div className="prot_content_inner">
                            <div className="picon">
                              {" "}
                              <a
                                className="portfolio-icon venobox vbox-item"
                                data-gall="myGallery"
                                href="assets/images/p4.jpg"
                              >
                                <i className="icofont-image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pprotfolio4">
                        <div className="porttitle_inner4">
                          <h3>
                            <a href="#">Tax Law</a>
                          </h3>
                          <p>
                            <span className="category-item-p">
                              Business Law
                            </span>
                            <span className="category-item-p">
                              Finalcial Low
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 5 single portfolio */}
                  <div className="grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 technology_low">
                    <div className="single_protfolio">
                      <div className="prot_thumb">
                        <img src="assets/images/p5.jpg" alt="image" />
                        <div className="prot_content">
                          <div className="prot_content_inner">
                            <div className="picon">
                              {" "}
                              <a
                                className="portfolio-icon venobox vbox-item"
                                data-gall="myGallery"
                                href="assets/images/p5.jpg"
                              >
                                <i className="icofont-image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pprotfolio4">
                        <div className="porttitle_inner4">
                          <h3>
                            <a href="#">Family Low</a>
                          </h3>
                          <p>
                            {" "}
                            <span className="category-item-p">
                              Family Law
                            </span>{" "}
                            <span className="category-item-p">
                              Technology Low
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 6 single portfolio */}
                  <div className="grid-item col-lg-4 col-md-6 col-xs-12 col-sm-12 witr_all_mb_30 technology_low">
                    <div className="single_protfolio">
                      <div className="prot_thumb">
                        <img src="assets/images/p6.jpg" alt="image" />
                        <div className="prot_content">
                          <div className="prot_content_inner">
                            <div className="picon">
                              {" "}
                              <a
                                className="portfolio-icon venobox vbox-item"
                                data-gall="myGallery"
                                href="assets/images/p6.jpg"
                              >
                                <i className="icofont-image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pprotfolio4">
                        <div className="porttitle_inner4">
                          <h3>
                            <a href="#">Real Estate Law</a>
                          </h3>
                          <p>
                            <span className="category-item-p">Family Law</span>
                            <span className="category-item-p">
                              Technology Low
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="witr_button_area">
            <div className="witr_btn_style mr">
              <div className="witr_btn_sinner">
                {" "}
                <a href="#" className="witr_btn">
                  View Project{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area css */}
      <div className="lorw_contact_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 witr_all_pd0">
              <div className="contact_left_inner">
                <h2>Frequently Asked</h2>
                {/* service item 1 */}
                <div className="em-service2 sright all_color_service">
                  <div className="em_service_content ">
                    <div className="em_single_service_text">
                      <div className="text_box witr_s_flex">
                        <div className="service_top_text">
                          <div className="em-service-icon all_icon_color">
                            <i className="icofont icofont-facebook-messenger" />
                          </div>
                        </div>
                        <div className="em-service-inner">
                          <div className="em-service-desc">
                            <p>
                              {" "}
                              I am alone, and feel the charm of existence in
                              this spot
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* service item 2 */}
                <div className="em-service2 sright all_color_service">
                  <div className="em_service_content ">
                    <div className="em_single_service_text">
                      <div className="text_box witr_s_flex">
                        <div className="service_top_text">
                          <div className="em-service-icon all_icon_color">
                            <i className="icofont icofont-read-book-alt" />
                          </div>
                        </div>
                        <div className="em-service-inner">
                          <div className="em-service-desc">
                            <p>
                              {" "}
                              I am alone, and feel the charm of existence in
                              this spot
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* service item 3 */}
                <div className="em-service2 sright all_color_service">
                  <div className="em_service_content ">
                    <div className="em_single_service_text">
                      <div className="text_box witr_s_flex">
                        <div className="service_top_text">
                          <div className="em-service-icon all_icon_color">
                            <i className="icofont icofont-money" />
                          </div>
                        </div>
                        <div className="em-service-inner">
                          <div className="em-service-desc">
                            <p>
                              I am alone, and feel the charm of existence in
                              this spot
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* service item 4 */}
                <div className="em-service2 sright all_color_service">
                  <div className="em_service_content ">
                    <div className="em_single_service_text">
                      <div className="text_box witr_s_flex">
                        <div className="service_top_text">
                          <div className="em-service-icon all_icon_color">
                            <i className="icofont icofont-price" />
                          </div>
                        </div>
                        <div className="em-service-inner">
                          <div className="em-service-desc">
                            <p>
                              I am alone, and feel the charm of existence in
                              this spot
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 witr_all_pd0">
              <div className="contact_inner">
                <div className="apartment_area">
                  <div className="apartment_text">
                    <h1>Contact Us</h1>
                    <h2>Get In Touch</h2>
                  </div>
                  <div className="witr_apartment_form">
                    <form
                      action="https://demo.themexbd.com/html/lorw/mail.php"
                      method="post"
                      id="contact-form"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="twr_form_box">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="twr_form_box">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="twr_form_box">
                            <input
                              type="number"
                              name="number"
                              placeholder="Phone*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="twr_form_box">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="twr_form_box ">
                            <textarea
                              name="comment"
                              placeholder="Comments/Message"
                              defaultValue={""}
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit Now
                          </button>
                        </div>
                        <div className="col-lg-12 text-center">
                          <p className="form-messege" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lorw blog area */}
      <div className="lorw_blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2>Blog Post</h2>
                  <h3>Recent Case Studies</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="witr_blog_area11">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="blog_active !pb-20"
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {/* Blog Slide 1 */}
                  <SwiperSlide>
                    <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                      <div className="busi_singleBlog all_blog_color">
                        <div className="witr_sb_thumb">
                          <a href="#">
                            <img src="assets/images/blogs1.jpg" alt="Blog 1" />
                          </a>
                        </div>
                        <div className="witr_blog_con bs5">
                          <h2>
                            <a href="single-blog.html">
                              How will you know success when it shows
                            </a>
                          </h2>
                          <p>
                            Exercitation photo booth stumptown to banksy, elit
                            small batch freegan… How to Attain Process
                            Automation
                          </p>
                        </div>
                        <div className="em-blog-content-area_adn">
                          <div className="learn_more_adn">
                            <a className="learn_btn adnbtn2" href="#">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Blog Slide 2 */}
                  <SwiperSlide>
                    <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                      <div className="busi_singleBlog all_blog_color">
                        <div className="witr_sb_thumb">
                          <a href="#">
                            <img src="assets/images/blogs2.jpg" alt="Blog 2" />
                          </a>
                        </div>
                        <div className="witr_blog_con bs5">
                          <h2>
                            <a href="single-blog.html">
                              Industrial Branch Of Engineering.
                            </a>
                          </h2>
                          <p>
                            Exercitation photo booth stumptown to banksy, elit
                            small batch freegan… How to Attain Process
                            Automation
                          </p>
                        </div>
                        <div className="em-blog-content-area_adn">
                          <div className="learn_more_adn">
                            <a className="learn_btn adnbtn2" href="#">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Blog Slide 3 */}
                  <SwiperSlide>
                    <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                      <div className="busi_singleBlog all_blog_color">
                        <div className="witr_sb_thumb">
                          <a href="#">
                            <img src="assets/images/blogs3.jpg" alt="Blog 3" />
                          </a>
                        </div>
                        <div className="witr_blog_con bs5">
                          <h2>
                            <a href="single-blog.html">
                              It is a long established fact a reader will be
                            </a>
                          </h2>
                          <p>
                            Exercitation photo booth stumptown to banksy, elit
                            small batch freegan… How to Attain Process
                            Automation
                          </p>
                        </div>
                        <div className="em-blog-content-area_adn">
                          <div className="learn_more_adn">
                            <a className="learn_btn adnbtn2" href="#">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Blog Slide 4 */}
                  <SwiperSlide>
                    <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                      <div className="busi_singleBlog all_blog_color">
                        <div className="witr_sb_thumb">
                          <a href="#">
                            <img src="assets/images/blogs4.jpg" alt="Blog 4" />
                          </a>
                        </div>
                        <div className="witr_blog_con bs5">
                          <h2>
                            <a href="single-blog.html">
                              Carousel Of Colors In Cinq This Terre Beach.
                            </a>
                          </h2>
                          <p>
                            Exercitation photo booth stumptown to banksy, elit
                            small batch freegan… How to Attain Process
                            Automation
                          </p>
                        </div>
                        <div className="em-blog-content-area_adn">
                          <div className="learn_more_adn">
                            <a className="learn_btn adnbtn2" href="#">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lorw_blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title">
                <div className="witr_section_title_inner text-center">
                  <h2>Blog Post</h2>
                  <h3>Recent Case Studies</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="witr_blog_area11">
                <div className="blog_active"> */}
      {/* 1 single blog */}
      {/* <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                    <div className="busi_singleBlog all_blog_color">
                      <div className="witr_sb_thumb">
                        <a href="#">
                          <img src="assets/images/blogs1.jpg" alt="image" />
                        </a>
                        <div className="witr_post_meta9" />
                      </div>
                      <div className="witr_blog_con bs5">
                        <h2>
                          <a href="single-blog.html">
                            How will you know success when it shows
                          </a>
                        </h2>
                        <p>
                          Exercitation photo booth stumptown to banksy, elit
                          small batch freegan… How to Attain Process Automation
                        </p>
                      </div>
                      <div className="em-blog-content-area_adn">
                        <div className="learn_more_adn">
                          <a className="learn_btn adnbtn2" href="#">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
      {/* 2 single blog */}
      {/* <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                    <div className="busi_singleBlog all_blog_color">
                      <div className="witr_sb_thumb">
                        <a href="#">
                          <img src="assets/images/blogs2.jpg" alt="image" />
                        </a>
                        <div className="witr_post_meta9" />
                      </div>
                      <div className="witr_blog_con bs5">
                        <h2>
                          <a href="single-blog.html">
                            Industrial Branch Of Engineering.
                          </a>
                        </h2>
                        <p>
                          Exercitation photo booth stumptown to banksy, elit
                          small batch freegan… How to Attain Process Automation
                        </p>
                      </div>
                      <div className="em-blog-content-area_adn">
                        <div className="learn_more_adn">
                          <a className="learn_btn adnbtn2" href="#">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
      {/* 3 single blog */}
      {/* <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                    <div className="busi_singleBlog all_blog_color">
                      <div className="witr_sb_thumb">
                        <a href="#">
                          <img src="assets/images/blogs3.jpg" alt="image" />
                        </a>
                        <div className="witr_post_meta9" />
                      </div>
                      <div className="witr_blog_con bs5">
                        <h2>
                          <a href="single-blog.html">
                            It is a long established fact a reader will be
                          </a>
                        </h2>
                        <p>
                          Exercitation photo booth stumptown to banksy, elit
                          small batch freegan… How to Attain Process Automation
                        </p>
                      </div>
                      <div className="em-blog-content-area_adn">
                        <div className="learn_more_adn">
                          <a className="learn_btn adnbtn2" href="#">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
      {/* 4 single blog */}
      {/* <div className="witr_all_mb_30 col-md-12 col-xs-12 col-sm-12">
                    <div className="busi_singleBlog all_blog_color">
                      <div className="witr_sb_thumb">
                        <a href="#">
                          <img src="assets/images/blogs4.jpg" alt="image" />
                        </a>
                        <div className="witr_post_meta9" />
                      </div>
                      <div className="witr_blog_con bs5">
                        <h2>
                          <a href="single-blog.html">
                            Carousel Of Colors In Cinq This Terre Beach.
                          </a>
                        </h2>
                        <p>
                          Exercitation photo booth stumptown to banksy, elit
                          small batch freegan… How to Attain Process Automation
                        </p>
                      </div>
                      <div className="em-blog-content-area_adn">
                        <div className="learn_more_adn">
                          <a className="learn_btn adnbtn2" href="#">
                            Read More
                          </a>
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
      {/* footer area */}
    </>
  );
}

export default Home;
