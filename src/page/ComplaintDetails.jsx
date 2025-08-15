import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

// import indianLawImage from "../assets/images/indianlaw.jpg";

const complaintDetailsData = {
  "cyber-crime": {
    title: "Cyber Crime",
    subtitle: "Online threats, hacking, and privacy breaches",
    description:
      "Cybercrime encompasses offenses committed using computers, networks, or the internet. These crimes include identity theft, phishing, cyberstalking, online fraud, hacking, and unauthorized access to digital information. As technology advances, cybercriminals adopt sophisticated methods, making it imperative for individuals, businesses, and law enforcement agencies to stay vigilant, implement robust cybersecurity measures, and promptly report any suspicious online activities.",
    images: [
      "/assets/images/crime1.jpg",
      "/assets/images/crime2.jpg",
      "/assets/images/crime3.jpg",
      "/assets/images/crime4.jpg",
      "/assets/images/crime5.jpg",
    ],
    lawReference: "Information Technology Act, 2000 - Sections 66C, 66D, 67",
    url: "/complaints/cyber-crime",
    points: [
      {
        title: "Online Fraud & Phishing",
        text: "Deceptive emails, websites, or payment links designed to steal personal information.",
      },
      {
        title: "Data Theft",
        text: "Unauthorized access and misuse of personal or corporate data.",
      },
    ],
  },

  "child-pornography": {
    title: "Child Pornography",
    subtitle: "Combating the exploitation of minors online",
    description:
      "Child pornography involves the creation, distribution, or possession of sexually explicit content involving minors. Such activities are severe offenses under Indian law, leading to stringent penalties. The Protection of Children from Sexual Offences (POCSO) Act and the Information Technology Act, 2000, provide a legal framework to address and prevent these heinous crimes. It's crucial to report any suspected instances to authorities to safeguard children's rights and well-being.",
    images: [
      "/assets/images/child1.jpg",
      "/assets/images/child2.jpg",
      "/assets/images/child3.jpg",
      "/assets/images/child4.jpg",
      "/assets/images/child5.jpg",
    ],
    lawReference:
      "Protection of Children from Sexual Offences Act, 2012 (POCSO) & IT Act, 2000",
    url: "/complaints/child-pornography",
    points: [
      {
        title: "Possession of Illicit Content",
        text: "Holding or accessing illegal media involving minors.",
      },
      {
        title: "Online Exploitation",
        text: "Coercing or luring children into creating explicit digital content.",
      },
    ],
  },

  "women-abuse": {
    title: "Women Abuse",
    subtitle: "Addressing violence and harassment against women",
    description:
      "Women abuse encompasses various forms of violence, including domestic abuse, sexual harassment, and workplace discrimination. Laws like the Protection of Women from Domestic Violence Act, 2005, and IPC Sections 354 and 376 aim to protect women's rights and ensure justice. Victims are encouraged to report incidents promptly to access legal remedies and support services designed to address and prevent such abuses.",
    images: [
      "/assets/images/women1.jpg",
      "/assets/images/women2.jpg",
      "/assets/images/women3.jpg",
      "/assets/images/women4.jpg",
      "/assets/images/women5.jpg",
    ],
    lawReference:
      "Protection of Women from Domestic Violence Act, 2005 | IPC Sections 354, 376",
    url: "/complaints/women-abuse",
    points: [
      {
        title: "Domestic Violence",
        text: "Physical, emotional, or financial abuse by a partner or family member.",
      },
      {
        title: "Sexual Harassment",
        text: "Unwanted advances or behavior in personal or professional settings.",
      },
    ],
  },

  "consumer-complaints": {
    title: "Consumer Complaints",
    subtitle: "Protecting consumer rights and addressing grievances",
    description:
      "Consumers have the right to receive goods and services that meet quality standards. Issues like defective products, false advertising, or subpar services can be addressed under the Consumer Protection Act, 2019. This legislation empowers consumers to file complaints, seek redressal, and ensure accountability from businesses, promoting fair trade practices and consumer welfare.",
    images: [
      "/assets/images/consumer1.jpg",
      "/assets/images/consumer2.jpg",
      "/assets/images/consumer3.jpg",
      "/assets/images/consumer4.jpg",
      "/assets/images/consumer5.jpg",
    ],
    lawReference: "Consumer Protection Act, 2019",
    url: "/complaints/consumer-complaints",
    points: [
      {
        title: "Faulty Products",
        text: "Receiving defective or substandard goods.",
      },
      {
        title: "Service Deficiency",
        text: "Inadequate or unsatisfactory service delivery.",
      },
    ],
  },

  "insurance-claim": {
    title: "Insurance Claim",
    subtitle: "Challenging unjust insurance claim denials",
    description:
      "Policyholders may face claim rejections due to various reasons, including alleged non-disclosure or policy misinterpretation. The Insurance Act, 1938, and IRDAI regulations provide mechanisms for grievance redressal. If dissatisfied with an insurer's decision, individuals can approach the Insurance Ombudsman or consumer courts to seek a fair resolution and ensure rightful claim settlements.",
    images: [
      "/assets/images/insurance1.jpg",
      "/assets/images/insurance2.jpg",
      "/assets/images/insurance3.jpg",
      "/assets/images/insurance4.jpg",
      "/assets/images/insurance5.jpg",
    ],
    lawReference: "Insurance Act, 1938 & IRDA Regulations",
    url: "/complaints/insurance-claim-rejected",
    points: [
      {
        title: "Claim Rejection",
        text: "Denial of valid insurance claims without proper justification.",
      },
      {
        title: "Policy Misinterpretation",
        text: "Incorrect application of policy terms leading to claim denial.",
      },
    ],
  },

  "check-bounce": {
    title: "Check Bounce",
    subtitle: "Legal remedies for dishonored cheques",
    description:
      "A bounced cheque occurs when a bank refuses to honor a cheque due to insufficient funds or other reasons. Under Section 138 of the Negotiable Instruments Act, 1881, issuing a cheque that bounces is a criminal offense. Victims can initiate legal proceedings to recover the owed amount, which may include sending a legal notice and filing a complaint in court if necessary.",
    images: [
      "/assets/images/cheque1.jpg",
      "/assets/images/cheque2.jpg",
      "/assets/images/cheque3.jpg",
      "/assets/images/cheque4.jpg",
      "/assets/images/cheque5.jpg",
    ],
    lawReference: "Negotiable Instruments Act, 1881 - Section 138",
    url: "/complaints/check-bounce",
    points: [
      {
        title: "Legal Notice Drafting",
        text: "Preparing and sending a formal notice to the issuer of the bounced cheque.",
      },
      {
        title: "Filing Section 138 Case",
        text: "Initiating legal action to recover the due amount.",
      },
    ],
  },

  "online-blackmail": {
    title: "Online Blackmail",
    subtitle: "Combating digital extortion and threats",
    description:
      "Online blackmail involves threatening individuals to release sensitive information or images unless demands are met. Such acts are punishable under IPC Section 384 and IT Act Sections 66E and 67. Victims should report incidents to cybercrime cells or through the national cybercrime portal to initiate legal action and prevent further exploitation.",
    images: [
      "/assets/images/blackmail1.jpg",
      "/assets/images/blackmail2.jpg",
      "/assets/images/blackmail3.jpg",
      "/assets/images/blackmail4.jpg",
      "/assets/images/blackmail5.jpg",
    ],
    lawReference: "IPC Section 384 | IT Act Sections 66E, 67",
    url: "/complaints/online-blackmail",
    points: [
      {
        title: "Threatening Messages",
        text: "Receiving messages that coerce or intimidate for personal gain.",
      },
      {
        title: "Private Content Misuse",
        text: "Unauthorized sharing or threats to share personal or sensitive content.",
      },
    ],
  },
  "property-rentals": {
    title: "Property Rentals",
    subtitle: "Legal solutions for tenant and landlord disputes",
    description:
      "Property rental issues often arise from conflicts between tenants and landlords over agreements, maintenance, eviction, or rent payments. Disputes may involve unauthorized occupation, damage to property, non-payment of rent, or breach of contract terms. Legal remedies are available under the Rent Control Act and the Transfer of Property Act. It is essential for both landlords and tenants to have properly drafted agreements and follow the legal process when disagreements occur.",
    images: [
      "/assets/images/property1.jpg",
      "/assets/images/property2.jpg",
      "/assets/images/property3.jpg",
      "/assets/images/property4.jpg",
      "/assets/images/property5.jpg",
    ],
    lawReference: "Rent Control Act | Transfer of Property Act",
    url: "/complaints/property-rentals",
    points: [
      {
        title: "Eviction Support",
        text: "Help with legally removing non-compliant or overstaying tenants.",
      },
      {
        title: "Agreement Disputes",
        text: "Resolving rental agreement conflicts and enforcement.",
      },
    ],
  },
  "family-issues": {
    title: "Family Issues",
    subtitle: "Support for divorce, custody, and family legal matters",
    description:
      "Family disputes can be emotionally and legally complex. Whether it's divorce, child custody, alimony, property division, or guardianship, these matters require sensitivity and legal accuracy. Indian family laws such as the Hindu Marriage Act, Special Marriage Act, and Guardians and Wards Act govern these cases. Legal support can help protect your rights and ensure fair resolutions through mutual settlement or legal proceedings in family courts.",
    images: [
      "/assets/images/family1.jpg",
      "/assets/images/family2.jpg",
      "/assets/images/family3.jpg",
      "/assets/images/family4.jpg",
      "/assets/images/family5.jpg",
    ],
    lawReference:
      "Hindu Marriage Act, 1955 | Special Marriage Act, 1954 | Guardians and Wards Act, 1890",
    url: "/complaints/family-issues",
    points: [
      {
        title: "Divorce & Separation",
        text: "Legal guidance for mutual or contested divorce proceedings.",
      },
      {
        title: "Child Custody",
        text: "Helping parents obtain or defend custody rights in a child's best interest.",
      },
    ],
  },
};

function ComplaintDetails() {
  const { slug } = useParams();
  const complaint = complaintDetailsData[slug];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animation happens only once when scrolling down
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [slug]);

  if (loading) return <Loader />;

  if (!complaint) {
    return (
      <div className="container text-center mt-5">
        <h2>Complaint Not Found</h2>
        <p>The complaint you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{complaint.title} - Online Legal Service India</title>
        <meta name="description" content={complaint.description} />
      </Helmet>
      <div
        className="container-fluid d-flex flex-column flex-lg-row justify-content-between "
        style={{
          height: "60vh",
          backgroundColor: "#1a202c",
          paddingTop: 30,
          backgroundImage:
            "url(https://onlinelegalserviceindia.in/assets/img/banner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white p-5 flex flex-col items-center justify-center text-center witr_section_title_inner">
          <h3 className="text-white">{complaint.title}</h3>
          <p className="mb-4">
            Welcome to allindialegalcomplaints, your trusted legal partner for
            all your legal needs. Our team of experienced advocates is dedicated
            to providing expert legal guidance and representation tailored to
          </p>
          <button className="btn btn-success">Get Appointment</button>
        </div>
      </div>
      <div className="lorw_about_area">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-lg-6 col-md-6">
              <div className="about_content_inner text-white">
                <div className="witr_section_title_inner text-left mb-4">
                  <h2>{complaint.title}</h2>
                  <h3 style={{ color: "#222" }}>
                    {complaint.subtitle || "Detailed Complaint Information"}
                  </h3>
                  <p
                    style={{
                      color: "#000",
                      lineHeight: "1.6",
                      marginTop: "10px",
                    }}
                  >
                    {complaint.description || "No description available."}
                  </p>
                </div>
                {complaint.points?.length > 0 && (
                  <div className="about_service_inner">
                    {complaint.points.map((point, idx) => {
                      return (
                        <div
                          key={idx}
                          className="em-service2 sleft all_color_service mb-4 em-service"
                          style={{
                            marginBottom: "30px",
                            padding: "30px",
                            backgroundColor: "#fff",
                            borderRadius: "5px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div className="em_service_content">
                            <div className="em_single_service_text">
                              <div className="text_box witr_s_flex">
                                <div className="service_top_text all_icon_color">
                                  <div className="em-service-icon">
                                    <i className="fas fa-check-circle"></i>
                                  </div>
                                </div>
                                <div className="em-service-inner">
                                  <div className="em-service-title">
                                    <h3>
                                      <a href="#">{point.title}</a>
                                    </h3>
                                  </div>
                                  <div className="em-service-desc">
                                    <p>{point.text || "No details provided"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {complaint.lawReference && (
                  <div className="em-service2 sleft all_color_service mb-3 em-service">
                    <div className="em_service_content">
                      <div className="em_single_service_text">
                        <div className="text_box witr_s_flex">
                          <div className="service_top_text all_icon_color">
                            <div className="em-service-icon">
                              <i className="fas fa-book"></i>
                            </div>
                          </div>
                          <div className="em-service-inner">
                            <div className="em-service-title">
                              <h3>
                                <a href="#">Law Reference</a>
                              </h3>
                            </div>
                            <div className="em-service-desc">
                              <p>{complaint.lawReference}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex align-items-start">
              <div className="image-grid w-100">
                {complaint.images.slice(0, 4).map((imgUrl, index) => {
                  const direction =
                    index % 2 === 0 ? "fade-right" : "fade-left"; // alternate directions
                  const offsetClass = index % 2 === 0 ? "push-up" : "push-down";

                  return (
                    <div
                      className={`image-box ${offsetClass}`}
                      key={index}
                      data-aos={direction}
                    >
                      <img src={imgUrl} alt={`Image ${index + 1}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row align-items-center g-4">
            {/* Form Column */}
            <div className="col-lg-6 d-flex align-items-center">
              <section className="w-100">
                <div className="p-4 bg-white shadow rounded-3 w-100">
                  <h4 className="text-dark text-center mb-4">
                    Register Your Complaint
                  </h4>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name (नाम)"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email id (ईमेल आईडी दर्ज करें)"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number (फ़ोन नंबर दर्ज करें)"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter city (शहर का नाम दर्ज करें)"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter state (राज्य का नाम दर्ज करें)"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </section>
            </div>

            {/* Info Column */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="ps-lg-4 w-100">
                <img
                  src={complaint.images?.[4]} // Assuming the 5th image is at index 4
                  alt="Additional visual"
                  className="img-fluid rounded mb-4 d-block mx-auto"
                  style={{
                    maxHeight: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h4 className="text-center text-lg-start">
                  Why Choose Online Legal Service India?
                </h4>
                <div className="departmentList all_list_color">
                  <ul className="list-unstyled mt-3">
                    <li className="mb-3 d-flex align-items-center gap-2">
                      <i className="fas fa-check-circle"></i>
                      <span>
                        Work with empathy and confidentiality to ensure client
                        trust.
                      </span>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-2">
                      <i className="fas fa-check-circle"></i>
                      <span>
                        Provide expert legal representation in complex legal
                        frameworks.
                      </span>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-2">
                      <i className="fas fa-check-circle"></i>
                      <span>
                        Collaborate with law enforcement and digital experts to
                        strengthen cases.
                      </span>
                    </li>
                  </ul>

                  <div className="text-center text-lg-start">
                    <a
                      href="/contact"
                      className="btn btn-success text-white w-50"
                    >
                      File a Complaint
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComplaintDetails;
