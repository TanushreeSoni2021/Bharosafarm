import React from "react";
import "../Styles/Headers.css";
import "../App.css";
import data from "../Data/Data"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/logo.png";
import logolang from "../Assets/language.png";
import { FiDownload } from "react-icons/fi";
import T from "../hooks/Translate";

function Header() {
  let button ="Downloads The App";
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        variant="dark"
        expand="lg"
        className="nav-colo-1 navbar-style"
      >
        <Container>
          <Navbar.Brand className="logo-img">
            <img src={logo} alt="Bharosa Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav response"
            style={{ backgroundColor: "#8da85f" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="mflex">
              {data.header.map((items, index) => {
                return (
                  <Nav className="nav-menu" key={index}>
                    <Nav.Link
                      className="link-item-colr nav-link "
                      href={items.url}
                    >
                      {T(items.title)}
                    </Nav.Link>
                  </Nav>
                );
              })}
            </div>

            {/* language change button  */}
            <Nav className="ms-auto">
              <div className="change but">
                <button onClick={(event) => {
                  event.preventDefault();
                  let isTrue = localStorage.getItem('index')
                  localStorage.setItem('index', isTrue === "0" ? 1 : 0)
                  window.location.reload()

                }} className="change-lan">
                  <img src={logolang} alt="" />
                </button>
              </div>
              <span className="but">
                <a
                  href="https://play.google.com/store/apps/details?id=bharosa.mitra.bharosa_mitra_fe_0_1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="button-style "
                    type="button">
                    <FiDownload /> {T(button)}
                  </button>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=bharosa.mitra.bharosa_mitra_fe_0_1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button-sty " type="button">
                    <FiDownload /> App
                  </button>
                </a>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
