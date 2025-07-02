import React from "react";
import ComplaintCard from "../components/ComplaintCard";

const complaintData = [
  {
    title: "Cyber Crime",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/crime.png",
  },
  {
    title: "Child Pornography",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/child.png",
  },
  {
    title: "Women Abuse",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/abuse.jpg",
  },
  {
    title: "Consumer Complaints",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/consumer.jpg",
  },
  {
    title: "Insurance Claim Rejected",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/claim.jpg",
  },
  {
    title: "Check bounce",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/check.jpg",
  },
  {
    title: "Online Blackmail",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/black.png",
  },
  {
    title: "Property Rentals",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/rent.png",
  },
  {
    title: "Family Issues",
    imgSrc: "https://indianlegaservice.com/wp-content/uploads/2024/03/fa.jpg",
  },
];

function ComplaintList() {
  return (
    <>
      <div className="container-fluid bg-page-header" style={{ marginBottom: 90 }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
            <h3 className="display-3 text-white text-uppercase text-center">
              Complaint List
            </h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="/">Home</a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3" />
              <p className="m-0 text-uppercase">Complaint List</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h2>Types of Complaints We Solve</h2>
          </div>
        </div>
        <div className="row">
          {complaintData.map((item, index) => (
            <ComplaintCard key={index} title={item.title} imgSrc={item.imgSrc} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ComplaintList;
