import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFileAlt,
  FaClipboardCheck,
  FaThumbsUp,
  FaTrophy,
} from "react-icons/fa";
// import "../../public/assets/css/flaticon.css";

function About({ setShow }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="container-fluid d-flex flex-column flex-lg-row justify-center items-center text-center"
        style={{
          height: "60vh",
          backgroundColor: "#1a202c",
          paddingTop: 30,
          backgroundImage:
            "url(https://onlinelegalserviceindia.in/assets/img/banner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white p-5 flex flex-col items-center justify-center text-center witr_section_title_inner">
          <h3 className="text-white">About Us</h3>
          <p className="mb-4">
            Welcome to lexbridge legal services, your trusted legal partner for
            all your legal needs. Our team of experienced advocates is dedicated
            to providing expert legal guidance and representation tailored to
          </p>
          <button className="btn btn-success">Get Appointment</button>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Empowering Justice Through Technology
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Bridging the gap between legal expertise and digital accessibility,
            ensuring justice is just a click away.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-10" data-aos="fade-up">
          {[
            {
              title: "Our Mission",
              content:
                "To make legal services accessible, affordable, and reliable for every Indian citizen.",
              delay: "0",
            },
            {
              title: "Achievements",
              content: (
                <ul className="space-y-1">
                  <li>📈 Cases Raised: 10,000+</li>
                  <li>✅ Cases Solved: 9,500+</li>
                  <li>🏆 Success Rate: 95%</li>
                </ul>
              ),
              delay: "100",
            },
            {
              title: "Why Choose Us?",
              content: (
                <ul className="space-y-1">
                  <li>✔️ Expert Legal Team</li>
                  <li>✔️ 100% Confidentiality</li>
                  <li>✔️ Digital & Accessible Services</li>
                </ul>
              ),
              delay: "200",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border-l-4 border-green-600 transition-all"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <h4 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h4>
              <div className="text-gray-600">{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 bg-gray-50" data-aos="zoom-in">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Ready to Resolve Your Legal Issues?
        </h3>
        <button className="btn btn-success">Get Started Now</button>
      </div>

      {/* Legacy Section */}
      <div className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="flex flex-col lg:flex-row gap-10 items-stretch"
            data-aos="fade-up"
          ></div>
        </div>
      </div>
      <div className="lorw_about_area" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about_content_inner">
                <div className="witr_section_title">
                  <div className="witr_section_title_inner text-left">
                    <h2>MORE ABOUT US</h2>
                    <h3>We Provide Reliable And Effective Legal Services</h3>
                    <p>
                      At Online Legal Service India, we understand that
                      navigating the legal system can be daunting. Our mission
                      is to make the legal process as smooth and stress-free as
                      possible for our clients. With years of experience and a
                      commitment to excellence, our team of advocates is here to
                      provide you with the support and representation you need
                      to achieve the best possible outcome.
                    </p>
                  </div>
                </div>

                <div className="about_bottom_content">
                  <p>
                    Our ready-made legal solutions are designed to ease your
                    journey through complex matters like real estate, corporate
                    law, and risk management. With a client-first approach, we
                    offer practical and effective strategies tailored to your
                    unique needs.
                  </p>
                </div>

                <div className="about_bottom_img_btn">
                  <div className="em-service2 sleft all_color_service">
                    <div className="em_service_content">
                      <div className="em_single_service_text">
                        <div className="text_box witr_s_flex">
                          <div className="service_top_text all_icon_color">
                            <div className="em-service-icon">
                              <img src="assets/images/t1.png" alt="image" />
                            </div>
                          </div>
                          <div className="em-service-inner">
                            <div className="em-service-title">
                              <h3>Richard Garrett</h3>
                            </div>
                            <div className="em-service-desc">
                              <p>CEO & Founder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="witr_button_area">
                    <div className="witr_btn_style mr">
                      <div className="witr_btn_sinner">
                        <div className="sign-image">
                          <img
                            src="/assets/images/signature.png"
                            alt="About Us"
                            className="w-24 h-50 object-contain inline-block"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="lorw_about_image_inner">
                <div className="single_image_area">
                  <div className="single_image single_line_option mb-6">
                    <img src="assets/images/about-thumb1.jpg" alt="image" />
                  </div>
                </div>
              </div>

              {/* <div
                    className="about-card wow fadeInUp text-left" // margin-left for the whole card
                    data-wow-delay="500ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "500ms",
                      animationName: "fadeInUp",
                    }}
                  > */}
              <div className="em-service2 sleft all_color_service ml-6">
                <div className="em_service_content">
                  <div className="em_single_service_text mb-6">
                    <div className="text_box witr_s_flex flex items-center gap-6">
                      <div className="service_top_text all_icon_color">
                        <div className="em-service-icon text-[#0e2e50] text-5xl">
                          <i className="flaticon-license"></i>
                        </div>
                      </div>
                      <div className="em-service-inner">
                        <div className="em-service-title">
                          <h3>Complaints Solved</h3>
                        </div>
                        <div className="em-service-desc">
                          <p className="text-xl font-semibold">1500+</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="em_single_service_text">
                    <div className="text_box witr_s_flex flex items-center gap-6">
                      <div className="service_top_text all_icon_color">
                        <div className="em-service-icon text-[#0e2e50] text-5xl">
                          <i className="flaticon-globe"></i>
                        </div>
                      </div>
                      <div className="em-service-inner">
                        <div className="em-service-title">
                          <h3>Success Rate</h3>
                        </div>
                        <div className="em-service-desc">
                          <p className="text-xl font-semibold">100%</p>
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
      {/* </div> */}
    </>
  );
}

export default About;
