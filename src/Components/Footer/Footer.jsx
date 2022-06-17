import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import instagram from "../../../mock/assets/images/instagram.svg";
import behance from "../../../mock/assets/images/Be.svg";
import linkedin from "../../../mock/assets/images/linkedIn.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className={styles.containerFooter}>
      <Container className="mb-2">
        <Row>
          <Col lg={4}>
            {/*texto sobre mi */}
            <h1 className={styles.titleFooter}>
              ¿Querés conocer más sobre mí?
            </h1>
          </Col>
          <Col lg={4} className={styles.social}>
            {/*redes sociales enlaces */}
            <ul className={styles.socialLinks}>
              <li>
                <span>
                  <a
                    href="https://www.instagram.com/beauty_bags_packaging/?r=nametag"
                    target="_blank"
                    rel="noreferrer"
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
                >
                  <img src={behance} alt="Behance" />
                </a>
              </li>
              <li>
                <a
                  href="https://ar.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedIn" />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} className={styles.links}>
            {/*Nav de secciones footer */}
            <ul className={styles.navFooter}>
              <Link //sección home
                to="home"
                activeClass={styles.linkActive}
                className={styles.linkInactive}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
              >
                <li>Home |</li>
              </Link>
              <Link //sección sobre mi
                to="about"
                activeClass={styles.linkActive}
                className={styles.linkInactive}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
              >
                <li>Sobre mí |</li>
              </Link>
              <Link //sección servicios
                to="services"
                activeClass={styles.linkActive}
                className={styles.linkInactive}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
              >
                <li>Servicios |</li>
              </Link>
              <Link //sección contacto
                to="contact"
                activeClass={styles.linkActive}
                className={styles.linkInactive}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
              >
                <li>Contacto</li>
              </Link>
            </ul>
          </Col>
        </Row>
      </Container>
      {/**sección copyright */}
      <section className={styles.footerDesign}>
        <p className={styles.textDesign}>
          Diseñado por  : Juan Pablo Ursic , Maquetado por : Leandro Wagner y Matias Aramayo. Todos los Derechos Reservados ©
        </p>
      </section>
    </section>
  );
};

export default Footer;
