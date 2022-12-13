import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./About.module.css";
import image from "../../../mock/assets/images/about.png";

const About = () => {
  return (
    <section className={styles.Section} id="about">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            {/*Imagen sobre mi */}
            <img src={image} alt="about" className={styles.image} />
          </Col>
          <Col lg={6} md={12} className="m-auto">
            {/*descripcion sobre mi */}
            <h1 className={styles.title}>Mariana Battistella</h1>
            <p className={styles.description}>
              Licenciada en la Universidad de Buenos Aires, dedique gran parte de mi vida al diseño gráfico
            </p>
            <p className={styles.containerSchoolJobs}>
              {/*estudios - trabajo */}
              <span>
                <svg //icono universidad
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z"
                    fill="#D68686"
                  />
                </svg>
              </span>
              <span className={styles.schoolJobs}>
                {/*información estudios */}
                Universidad de Buenos Aires
              </span>
            </p>
            <p className={styles.schoolJobsDescription}>
              Diseño gráfico (2007 - 2012)
            </p>
            <p className={styles.containerSchoolJobs}>
              <span>
                <svg // icono packaging
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0015 2.5C11.5415 2.5 11.0715 2.54 10.6015 2.64C7.84154 3.17 5.64154 5.4 5.12154 8.16C4.64154 10.77 5.60154 13.17 7.34154 14.72C7.77154 15.1 8.00154 15.63 8.00154 16.19V18.5C8.00154 19.6 8.90154 20.5 10.0015 20.5H10.2815C10.6315 21.1 11.2615 21.5 12.0015 21.5C12.7415 21.5 13.3815 21.1 13.7215 20.5H14.0015C15.1015 20.5 16.0015 19.6 16.0015 18.5V16.19C16.0015 15.64 16.2215 15.1 16.6415 14.73C18.0915 13.45 19.0015 11.58 19.0015 9.5C19.0015 5.63 15.8715 2.5 12.0015 2.5ZM14.0015 16.5H10.0015V15.5H14.0015V16.5ZM10.0015 18.5V17.5H14.0015V18.5H10.0015ZM15.3115 13.24C15.2215 13.32 15.1515 13.42 15.0715 13.5H8.92154C8.84154 13.41 8.77154 13.31 8.68154 13.23C7.36154 12.05 6.77154 10.29 7.09154 8.53C7.45154 6.59 9.05154 4.98 10.9815 4.6C11.3215 4.53 11.6615 4.5 12.0015 4.5C14.7615 4.5 17.0015 6.74 17.0015 9.5C17.0015 10.93 16.3915 12.29 15.3115 13.24Z"
                    fill="#D68686"
                  />
                  <path
                    d="M12.5015 10.5H11.5015V13.5H12.5015V10.5Z"
                    fill="#D68686"
                  />
                  <path
                    d="M10.381 8.37372L9.67393 9.08082L11.7952 11.2021L12.5023 10.495L10.381 8.37372Z"
                    fill="#D68686"
                  />
                  <path
                    d="M11.5025 10.5052L12.2096 11.2123L14.3309 9.09098L13.6238 8.38388L11.5025 10.5052Z"
                    fill="#D68686"
                  />
                </svg>
              </span>
              <span className={styles.schoolJobs2}>
                {/*información trabajo */}
                Diseño de packaging e identidad
              </span>
            </p>
            <p className={styles.schoolJobsDescription}>
              Más de 10 años de experiencia en el rubro
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
