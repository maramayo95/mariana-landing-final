import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Services.module.css";
import kraft from "../../../mock/assets/images/kraft.png";
import totebags from "../../../mock/assets/images/totebags.png";
import caja from "../../../mock/assets/images/Caja.png";

const Services = () => {
  return (
    //Servicios
    <section className={styles.containerServices} id="services">
      <Container>
        <h1 className={styles.titleServices}>Servicios</h1>{" "}
        {/*titulo servicios */}
        <Row className={styles.services}>
          <Col lg={4} className={styles.products}>
            {/*Descripción - imágenes  primera fila */}
            <img src={kraft} alt="bolsas kraft" height={72} />
            <p className={styles.titleProducts}>Bolsas de papel Kraft</p>
            <p className={styles.descriptionProducts}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              corporis vero cupiditate tempore eos modi illum odit impedit,
              minima ea hic et velit inventore, nihil blanditiis eligendi?
              Adipisci, soluta fugit.
            </p>
          </Col>
          <Col lg={4} className={styles.products}>
            <img src={totebags} alt="totebags" height={72} />
            <p className={styles.titleProducts}>Totebags de lienzo</p>
            <p className={styles.descriptionProducts}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              corporis vero cupiditate tempore eos modi illum odit impedit,
              minima ea hic et velit inventore, nihil blanditiis eligendi?
              Adipisci, soluta fugit.
            </p>
          </Col>
          <Col lg={4} className={styles.productsFinal}>
            <img src={caja} alt="cajas estuche" height={72} />
            <p className={styles.titleProducts}>Cajas estuche con estampa</p>
            <p className={styles.descriptionProducts}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              corporis vero cupiditate tempore eos modi illum odit impedit,
              minima ea hic et velit inventore, nihil blanditiis eligendi?
              Adipisci, soluta fugit.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
