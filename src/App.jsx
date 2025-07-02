import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "../public/assets/css/flaticon.css";

import LAyout from "./components/LAyout";
import Form from "./page/Form";
import About from "./page/About";
import Contact from "./page/Contact";
import Pricing from "./page/Pricing";
import Privacy from "./page/Privacy";
import Terms from "./page/Terms";
import Refund from "./page/Refund";
import ComplaintList from "./page/ComplaintList";
import ComplaintDetails from "./page/ComplaintDetails";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LAyout>
                {" "}
                <Home setShow={setShow} />
              </LAyout>
            }
          />
          <Route
            path="/about"
            element={
              <LAyout>
                {" "}
                <About setShow={setShow} />
              </LAyout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <LAyout>
                {" "}
                <Contact setShow={setShow} />
              </LAyout>
            }
          />
          <Route
            path="/complaint-list"
            element={
              <LAyout>
                <ComplaintList />
              </LAyout>
            }
          />

          <Route
            path="/complaints/:slug"
            element={
              <LAyout>
                <ComplaintDetails setShow={setShow} />
              </LAyout>
            }
          />

          <Route
            path="/pricing"
            element={
              <LAyout>
                {" "}
                <Pricing setShow={setShow} />
              </LAyout>
            }
          />
          <Route
            path="/contact"
            element={
              <LAyout>
                {" "}
                <Contact setShow={setShow} />
              </LAyout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <LAyout>
                {" "}
                <Privacy setShow={setShow} />
              </LAyout>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <LAyout>
                {" "}
                <Terms setShow={setShow} />
              </LAyout>
            }
          />
          <Route
            path="/refund-policy"
            element={
              <LAyout>
                {" "}
                <Refund setShow={setShow} />
              </LAyout>
            }
          />
        </Routes>
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
      </BrowserRouter>
    </>
  );
}

export default App;
