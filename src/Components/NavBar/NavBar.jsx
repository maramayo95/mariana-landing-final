import React,{useState} from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import logo from "../../../mock/assets/images/Logo.png";
import instagram from "../../../mock/assets/images/instagram.svg";
import behance from "../../../mock/assets/images/Be.svg";
import linkedIn from "../../../mock/assets/images/linkedIn.svg";
import { Link } from "react-scroll";
import "../NavBar/NavBar.css";

const NavBar = () => {
  const expand = "lg"; //offcanvas expansion
  const [show, setShow] = useState(false); //mostrar - ocultar menu dispositivos mobiles
  const handleClose =()=>setShow(false);  // ocultar menu
  const handleOpen =()=>setShow(true);  // mostrar menu 
  return (
    <section>
      <Navbar
        key={expand}
        expand={expand}
        className="mb-3"
        style={{ backgroundColor: "#FEF8F9" }}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand>
            {/*Logo web  */}
            <Link //efecto scroll logo
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1500}
            >
              <img src={logo} alt="logo web" className="navbar-logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle //boton nav dispositivos mobiles
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={handleOpen}  //mostrar menu mobil
          >
            <span>  {/*icono menu mobil */}
              <svg
                width="32"
                height="40"
                viewBox="0 -5 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="menu-icon-nav"
                style={{ transform: "scale(1.1)" }}
              >
                <path
                  d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5V0.5ZM30 3.5C30.8284 3.5 31.5 2.82843 31.5 2C31.5 1.17157 30.8284 0.5 30 0.5V3.5ZM2 7.5C1.17157 7.5 0.5 8.17157 0.5 9C0.5 9.82843 1.17157 10.5 2 10.5V7.5ZM20.5 10.5C21.3284 10.5 22 9.82843 22 9C22 8.17157 21.3284 7.5 20.5 7.5V10.5ZM2 15C1.17157 15 0.5 15.6716 0.5 16.5C0.5 17.3284 1.17157 18 2 18V15ZM24.5 18C25.3284 18 26 17.3284 26 16.5C26 15.6716 25.3284 15 24.5 15V18ZM2 3.5H30V0.5H2V3.5ZM2 10.5H20.5V7.5H2V10.5ZM2 18H24.5V15H2V18Z"
                  fill="#D47F7F"
                />
              </svg>
            </span>
          </Navbar.Toggle>
          <Navbar.Offcanvas //menu dispositivos mobiles
            show={show}
            onHide={handleClose}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header>
              <span className="close-menu" onClick={handleClose}>{/* cerrar menu mobil */}
                {/*boton cerrar menu dispositivoa mobiles */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#d47f7f"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </span>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Link //logo menu mobil - efecto scroll
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={1500}
                  onClick={handleClose} // cerrar menu mobil
                >
                  <img src={logo} alt="logo menu" className="logo-offcanvas" />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link //section carousel -efecto scroll
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={1500}
                  className="nav-link"
                  onClick={handleClose} // cerrar menu mobil
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Open Sans",
                    color: "#d47f7f",
                  }}
                >
                  {/*icono en dispositivo mobil */}
                  <span className="nav-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-house-door-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </span>
                  Home
                </Link>
                <Link // link sobre  - efecto scroll
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1500}
                  className="nav-link"
                  onClick={handleClose} // cerrar menu mobil
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Open Sans",
                    color: "#d47f7f",
                  }}
                >
                  {/*icono en dispositivo mobil */}
                  <span className="nav-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-person-lines-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                    </svg>
                  </span>
                  Sobre mi
                </Link>
                <Link //link servicios - efecto scroll
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1500}
                  className="nav-link"
                  onClick={handleClose} // cerrar menu mobil
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Open Sans",
                    color: "#d47f7f",
                  }}
                >
                  {/*icono en dispositivo mobil */}
                  <span className="nav-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-bag-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                      />
                    </svg>
                  </span>
                  Servicios
                </Link>
                <Link //link contacto - efecto scroll
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1500}
                  className="nav-link"
                  onClick={handleClose} // cerrar menu mobil
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontFamily: "Open Sans",
                    color: "#d47f7f",
                  }}
                >
                  {/*icono en dispositivo mobil */}
                  <span className="nav-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                  </span>
                  Contactame
                </Link>
                <hr className="menu-line" /> {/*linea divisora */}
                <ul className="social-link"> {/*redes sociales -mobil */}
                  <li>
                    <span>
                      <a
                        href="https://www.instagram.com/beauty_bags_packaging/?r=nametag"
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleClose}  //ocultar menu
                      >
                        <img src={instagram} alt="instagram" />
                      </a>
                    </span>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleClose} //ocultar menu
                    >
                      <img src={behance} alt="Behance" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ar.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleClose}  //ocultar menu
                    >
                      <img src={linkedIn} alt="linkedIn" />
                    </a>
                  </li>
                </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
