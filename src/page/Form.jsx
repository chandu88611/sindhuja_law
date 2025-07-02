import React, { useState } from 'react'

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import { CircularProgress } from '@mui/material';

const schemaStep1 = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
});

const schemaStep2 = yup.object().shape({
  refundAmount: yup.string().required('Refund amount is required'),
  complaintAgainst: yup.string().required('Complaint against is required'),
  complaintDescription: yup.string().required('Complaint description is required'),
});
function Form() {
const [step,setStep]=useState(1)
const [captchaToken, setCaptchaToken] = useState("");
const [loading, setloading] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

const { handleSubmit: handleSubmitStep1, control: controlStep1, formState: { errors: errorsStep1 },getValues } = useForm({
  resolver: yupResolver(schemaStep1)
});
const values=getValues()
console.log(values)
const { handleSubmit: handleSubmitStep2, control: controlStep2, formState: { errors: errorsStep2 } } = useForm({
  resolver: yupResolver(schemaStep2)
});

const onSubmitStep1 = (data) => {
  
  setStep(2); 
};

const onSubmitStep2 =async (data) => {


    if (!captchaToken) {
      Swal.fire({
        text: "Captha is Required",
        icon: "warning",
      });
      return;
    }

   
    const currentUrl = window?.location?.href;
    let updatedUrl;

    if (
      currentUrl &&
      (currentUrl.startsWith("http://") ||
        currentUrl.startsWith("https://"))
    ) {
      updatedUrl = currentUrl.replace(
        /^(https?:\/\/)/,
        "www."
      );
    } else {
      console.log(currentUrl);
    }
    try {
      setloading(true);
      const formData = new FormData();
      formData.append("captcha_token", captchaToken);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values?.phone);
      formData.append("city", values?.city);
      formData.append("state", values?.state);
      formData.append("refund_amount", data?.refundAmount);
      formData.append("complaint_againest", data?.complaintAgainst);
      formData.append("note", data?.complaintDescription);
      formData.append("domain", "legal");

      const res = await axios.post(
        "https://master.lexbridgelegalservices.com/enquiry-api/v2/store-enq",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res?.data?.status) {
        setloading(false);
        Swal.fire({
          title: "Success",
          text: res?.data?.message,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.message,
          icon: "error",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
      if (error?.response?.data?.errors?.email) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.errors?.email[0],
          icon: "error",
        });
      }
      if (error?.response?.data?.errors?.phone) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.errors?.phone[0],
          icon: "error",
        });
      }
      setloading(false);
    }
    setloading(false);
  }



  return (
    <div className='mt-2'>
         {/* <form  onSubmit={(e)=>{
            e.preventDefault();
         }}> */}
              <div >
                <div >
                 
                </div>
                <form onSubmit={handleSubmitStep1(onSubmitStep1)}>
        <div className="row g-4">
          <div className="col-12">
            <div className="form-group">
              <h3 className="text-dark">Register Your Complaint</h3>
            </div>
            {step === 1 && (
            <div className='col-12'>
              <div className="col-12 mt-3">
                <div className="form-group text-start">
                  <div className="form-control-wrap">
                    <Controller
                      name="name"
                      control={controlStep1}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      )}
                    />
                    {errorsStep1.name && <span className="text-danger text-xs">{errorsStep1.name.message}</span>}
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="form-group text-start">
                  <div className="form-control-wrap">
                    <Controller
                      name="email"
                      control={controlStep1}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="form-control"
                          placeholder="Enter email id"
                        />
                      )}
                    />
                    {errorsStep1.email && <span className="text-danger text-xs">{errorsStep1.email.message}</span>}
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="form-group text-start">
                  <div className="form-control-wrap">
                    <Controller
                      name="phone"
                      control={controlStep1}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="form-control"
                          placeholder="Enter phone number"
                        />
                      )}
                    />
                    {errorsStep1.phone && <span className="text-danger text-xs">{errorsStep1.phone.message}</span>}
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="form-group text-start">
                  <div className="form-control-wrap">
                    <Controller
                      name="city"
                      control={controlStep1}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="form-control"
                          placeholder="Enter city"
                        />
                      )}
                    />
                    {errorsStep1.city && <span className="text-danger text-xs">{errorsStep1.city.message}</span>}
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="form-group text-start">
                  <div className="form-control-wrap">
                    <Controller
                      name="state"
                      control={controlStep1}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="form-control"
                          placeholder="Enter state"
                        />
                      )}
                    />
                    {errorsStep1.state && <span className="text-danger text-xs">{errorsStep1.state.message}</span>}
                  </div>
                </div>
              </div>
            </div>
          )}
              {step==1&&<button
              className="btn-anim "
              type="submit"
              disabled={step === 1 && Object.keys(errorsStep1).length > 0}
            >
              { 'Next' }
            </button>}
          </div>
         
        </div>
      </form>
<form action="" className='row' onSubmit={handleSubmitStep2(onSubmitStep2)}>
{step==2&&<div className='col-12'>
                    <div className="col-12 mt-3">
                  <div className="form-group text-start">
                  
                    <div className="form-control-wrap">
                    <Controller
                      name="refundAmount"
                      control={controlStep2}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="form-control"
                          placeholder="Refund Amount"
                        />
                      )}
                    />
                    {errorsStep2.refundAmount && <span className="text-danger text-xs">{errorsStep2.refundAmount.message}</span>}
                  </div>
                  
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="form-group text-start">
                  
                    <div className="form-control-wrap">
                    <Controller
                      name="complaintAgainst"
                      control={controlStep2}
                      render={({ field }) => (
                        <input
                          {...field}
                          className="form-control"
                          placeholder="Complaint Against"
                        />
                      )}
                    />
                    {errorsStep2.complaintAgainst && <span className="text-danger text-xs">{errorsStep2.complaintAgainst.message}</span>}
                  </div>
                  
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="form-group text-start">
                  
                    <div className="form-control-wrap">
                    <Controller
                      name="complaintDescription"
                      control={controlStep2}
                      render={({ field }) => (
                        <textarea
                          {...field}
                          className="form-control"
                          placeholder="Complaint Description"
                        />
                      )}
                    />
                    {errorsStep2.complaintDescription && <span className="text-danger text-xs">{errorsStep2.complaintDescription.message}</span>}
                  </div>
                  
                  </div>
                </div>
                <ReCAPTCHA
                                sitekey="6LeooeIpAAAAAPF4iITH24YIt0b97OPxxFgScCWF"
                                onChange={handleCaptchaChange}
                                style={{
                                  transform: "scale(0.60)",
                                  WebkitTransform: "scale(0.60)",
                                  transformOrigin: "0 0",
                                  WebkitTransformOrigin: "0 0",
                                  marginLeft:'25%'
                                }}
                                className='col-12"'
                              />
                </div>}
          <div className="col-12 text-center">
            {step === 2 && (
              <button className="btn btn-primary-outline" type="button" onClick={() => setStep(1)}>
                Back
              </button>
            )}
            {step==2&&<button
              className="btn-anim"
              type="submit"
              disabled={step === 1 && Object.keys(errorsStep1).length > 0}
            >
            {loading ? (
                                  <CircularProgress
                                    size={21}
                                    style={{ color: "white" }}
                                  />
                                ) : (
                                  " Submit"
                                )}
            </button>}
          </div>
</form>
             
               
                
              </div>
            {/* </form> */}

    </div>
  )
}

export default Form