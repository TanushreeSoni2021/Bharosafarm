import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/Headers.css";
import "../App.css";
import data from "../Data/Data"
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import slider1 from "../Assets/slider1.png";
import slider2 from "../Assets/slider2.png";
import T from "../hooks/Translate";

function Slider() {
let button ="Downloads The App";
let Contactbutton = "Contact Us"
  return (
    <>
      <div id="home" className="mar">
        <div>
          <Carousel className="container p-2 ">
            <Carousel.Item className="slide-bar">
              <img className="d-block w-100" src={slider1} alt="First slide" />
              <Carousel.Caption className="caption">
                <div className="text-margin m-0">
                  <h1>{T(data.slider.heading)} </h1>
                  <h3>{T(data.slider.secondhead)}</h3>
                  <p>
                    {T(data.slider.para)}
                    <br />
                    {T(data.slider.secondpara)}
                  </p>
                  <div className="buttons">
                    {/* <a href="https://play.google.com/store/apps/details?id=bharosa.mitra.bharosa_mitra_fe_0_1" target="_blank" >
                                            <button className='button-style' type="submit" >
                                                <FiDownload /> Downloads The App</button>
                                        </a> */}
                    <Link
                      to="https://play.google.com/store/apps/details?id=bharosa.mitra.bharosa_mitra_fe_0_1"
                      target="_blank"
                    >
                      <button className="button-style" type="submit">
                        <FiDownload /> {T(button)}
                      </button>
                    </Link>

                    <a href="#contact">
                      <button className="button-light" variant="light">{T(Contactbutton)}</button>
                    </a>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide-bar">
              <img
                className="d-block w-100 h-100"
                src={slider2}
                alt="Second slide"
              />

              <Carousel.Caption className="caption">
                <div className="row m-4 d-flex justify-content-center align-items-center ">
                  <a
                    className="play"
                    href="https://youtu.be/J_7rmoEwllw"
                    target={"_blank"}
                    datatype="video"
                    rel="noreferrer"
                  >
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </a>
                  <h3>{T(data.slider.video)}</h3>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Slider;
