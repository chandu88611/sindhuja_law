import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Container } from '@mui/material';
function Pricing({ setShow }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>

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
        <Container maxWidth="md">
          {/* <Typography variant="h3" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Welcome to allindialegalcomplaints, your trusted legal partner. Our
                    experienced team provides expert legal guidance and representation.
                  </Typography> */}
          <div className="text-white p-5 flex flex-col items-center justify-center text-center witr_section_title_inner">
            <h3 className="text-white">Pricing</h3>

            <button className="btn btn-success">Get Appointment</button>
          </div>

        </Container>

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
    </>
  )
}

export default Pricing