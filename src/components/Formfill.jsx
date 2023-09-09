import "../Styles/Home.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import data from "../Data/Data";
import T from "../hooks/Translate";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Formfill = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4ic0w8",
        "template_edgmopl",
        form.current,
        "bc4jdztkGv2IMtlJb"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("messeage send");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let SubmitButton = "Submit"
  return (
    <div className="container">
      <div className="my-form mt-5">
        <h2 className="head mt-5">{T(data.user.heading)}</h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative">
            <input
              type="text"
              className="form-control input__field"
              placeholder=" "
              id="name"
              name="name"
            />
            <label htmlFor="name" className="lable__box">
              {T(data.user.val1)}<span className="text-danger">*</span>
            </label>
            <p className="text-danger error__message">
              {" "}
              {/* <ErrorMessage name="user_name" /> */}
            </p>
          </div>
          <div className="col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative">
            <input
              type="email"
              className="form-control input__field"
              placeholder=" "
              id="email"
              name="email"
            />
            <label htmlFor="email" className="lable__box">
              {T(data.user.val2)}<span className="text-danger">*</span>
            </label>
            <p className="text-danger error__message">
              {/* <ErrorMessage name="user_email" /> */}
            </p>
          </div>
          <div className="col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative">
            <input
              type="number"
              className="form-control input__field"
              placeholder=" "
              id="phone"
              name="user_phone"
            />
            <label htmlFor="Phone" className="lable__box">
              {T(data.user.val3)}<span className="text-danger">*</span>
            </label>
            <p className="text-danger error__message">
              {/* <ErrorMessage name="Phone" /> */}
            </p>
          </div>
          <div className="col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative">
            <input
              type="text"
              className="form-control input__field"
              placeholder=" "
              id="location"
              name="user_location"
            />
            <label htmlFor="location" className="lable__box">
              {T(data.user.val4)}
            </label>
          </div>
          <div className="col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative">
            <input
              type="text"
              className="form-control input__field"
              placeholder=" "
              id="thoughts"
              name="message"
            />
            <label htmlFor="thoughts" className="lable__box">
              {T(data.user.val5)}
            </label>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="confirm"
            />
            <span>
              {T(data.user.val6)}.
            </span>
            <p className="text-danger error_message">
              {/* <ErrorMessage name="confirm" /> */}
            </p>
          </div>
          <div className="justify-content-center text-center mt-5">
            <button className="button-style px-5" type="submit">{T(SubmitButton)}</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Formfill;
