import React, { useEffect, useState } from "react";
import "../Styles/Headers.css";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/logo.png";
import logolang from "../Assets/language.png";
import { FiDownload } from "react-icons/fi";
import Axios from "axios";
// import T from "../hooks/Translate";

function Header() {
  const [myheader, setHeader] = useState();
  const [language, setlanguage] = useState(true);

  useEffect(() => {
    Axios.get(`http://localhost:4000/header`)
      .then((res) => {
        console.log(res);
        setHeader({ val: res });
        localStorage.setItem('myData', JSON.stringify(res.data))
      })
      .catch((error) => console.log(error));
  }, []);
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
              {myheader?.val.data.map((items, index) => {
                return (
                  <Nav className="nav-menu" key={index}>
                    <Nav.Link
                      className="link-item-colr nav-link "
                      href={items.url}
                    >
                      {items.title}
                    </Nav.Link>
                  </Nav>
                );
              })}
            </div>

            {/* language change button  */}
            <Nav className="ms-auto">
              <div className="change but">
                <button className="change-lan">
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
                    type="button"
                    onClick={() => {
                      setlanguage(!language);
                    }}
                  >
                    <FiDownload /> Downloads The App
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
