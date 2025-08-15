import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "../page/Form";
import { FaWhatsapp } from "react-icons/fa";

function LAyout({ children }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header setShow={setShow} />
      {children}
      <Footer />

      {show && (
        <div className="showmodal">
          <div
            className="p-2 rounded-3 bg-gradient-primary mx-auto rounded"
            style={{ maxWidth: "450px", marginTop: "30px" }}
          >
            <div className="card border-0 shadow-sm rounded-4">
              <div
                style={{
                  borderRadius: "50%",
                  background: "rgb(0,0,0,.5)",
                  width: "fit-content",
                  color: "white",
                  margin: "3px",
                  cursor: "pointer",
                }}
                onClick={() => setShow(false)}
              >
                <span style={{ padding: "5px" }}>X</span>
              </div>
              <div className="card-body">
                <Form />
              </div>
            </div>
          </div>
        </div>
      )}
      <a href="https://wa.me/916363862257" className="" style={{position:"fixed",bottom:10,right:10}}>
        <div className="whatsapp blink-animation" >
          <FaWhatsapp size={"40px"}  color="green"/>
        </div>
      </a>
    </>
  );
}

export default LAyout;
