import React from "react";
import { Link } from "react-router-dom";

function Header({ setShow }) {
  return (
    <>
      <div className="em40_header_area_main">
        <div className="lorw-header-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-8 col-xl-8 col-md-12 col-sm-12">
                <div className="top-address text-left">
                  <p>
                    <span>
                      <i className="icofont-home" /> 2nd Floor New World.
                    </span>
                    <a href="tel:+998556778345">
                      <i className="icofont-ui-call" /> +998556778345
                    </a>
                    <a href="mailto:demo@example.com">
                      <i className="icofont-envelope" /> demo@example.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-lg-4 col-xl-4 col-md-12 col-sm-12">
                <div className="top-right-menu">
                  <ul className="social-icons text-right text_m_center">
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
                        <i className="icofont-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END HEADER TOP AREA */}
        <div className="lorw-main-menu one_page hidden-xs hidden-sm witr_h_h10">
          <div className="lorw_nav_area scroll_fixed postfix">
            <div className="container">
              <div className="row logo-left">
                <div className="col-md-3 col-sm-3 col-xs-4">
                  <div className="logo">
                    <a
                      className="main_sticky_main_l"
                      href="index-2.html"
                      title="lorw"
                    >
                      <img src="/assets/images/logo1.png" alt="lorw" />
                    </a>
                    <a
                      className="main_sticky_l"
                      href="index-2.html"
                      title="lorw"
                    >
                      <img src="/assets/images/logo2.png" alt="lorw" />
                    </a>
                  </div>
                </div>
                {/* MAIN MENU */}
                <div className="col-md-9 col-sm-9 col-xs-8">
                  <div className="tx_mmenu_together">
                    <nav className="lorw_menu">
                      <ul className="sub-menu">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Complaint List</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/complaints/cyber-crime">
                                Cyber Crime
                              </Link>
                            </li>
                            <li>
                              <Link to="/complaints/child-pornography">
                                Child Pornography
                              </Link>
                            </li>
                            <li>
                              <Link to="/complaints/women-abuse">
                                Women Abuse
                              </Link>
                            </li>
                            <li>
                              <Link to="/complaints/consumer-complaints">
                                Consumer Complaints
                              </Link>
                            </li>
                            <li>
                              <Link to="/complaints/insurance-claim">
                                Insurance Claim
                              </Link>
                            </li>
                            <li>
                              <Link to="/complaints/check-bounce">
                                Check Bounce
                              </Link>
                            </li>
                            <li>
                              <Link to="/complaints/online-blackmail">
                                Online Blackmail
                              </Link>
                            </li>
                            <li>
                              <Link to="/complaints/property-rentals">
                                Property Rentals
                              </Link>
                            </li>
                            <li>
                              <Link to="/complaints/family-issues">
                                Family Issues
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                    <div className="donate-btn-header">
                      <a className="dtbtn" href="#">
                        Request A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE MENU Logo AREA */}
      <div className="mobile_logo_area hidden-md hidden-lg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="mobile_menu_logo text-center">
                <a href="index-2.html" title="lorw">
                  <img src="/assets/images/logo1.png" alt="lorw" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE MENU AREA */}
      <div className="  mbm hidden-md hidden-lg header_area main-menu-area">
        <div className="menu_area mobile-menu">
          <nav className="lorw_menu">
            <ul className="sub-menu">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Complaint List</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Cyber Crime</a>
                  </li>
                  <li>
                    <a href="#">Child Pornography</a>
                  </li>
                  <li>
                    <a href="#">Woman Abuse</a>
                  </li>
                  <li>
                    <a href="#">Consumer Complaints</a>
                  </li>
                  <li>
                    <a href="#">Insurance Claim</a>
                  </li>
                  <li>
                    <a href="#">Check Bounce</a>
                  </li>
                  <li>
                    <a href="#">Online Blackmail</a>
                  </li>
                  <li>
                    <a href="#">Property Rentals</a>
                  </li>
                  <li>
                    <a href="#">Family Issues</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
