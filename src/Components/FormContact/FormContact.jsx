import React from "react";
import {useForm} from 'react-hook-form';
import {Container,Row,Col} from 'react-bootstrap';
import "./FormContact.css";

const FormContact = () => {
  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      content: ""
    }
  })
  const handleError =()=>{  //posicionar botón dentro del form cuando hay errores
    const btnForm = document.getElementById('btnForm');
    btnForm.classList.add('btn-click-form');
  }

  return (
    <Container className='form-container'>
     <Row>
      <Col lg={12}>
        <section className="form-design"id="contact">
          <Row>
            <Col lg={12}>
              <h3 className="title-form">Contacto</h3>
            </Col>      
          </Row>
          <form onSubmit={handleSubmit((data)=> console.log(data)) }className='form-section'>
            <Row className="form-inputs">
              <Col lg={4}> 
                <Row>
                  <p className="error-message">{errors.name?.type === 'required' && "Por favor, completá tu nombre"}</p>
                  <input {...register("name", {required:true , pattern: /^[A-Za-z]+$/i})} type="text" placeholder="Escribí acá tu nombre apellido" />
                </Row>
                <Row>
                  <p className="error-message">{errors.email?.type === 'required' && "Por favor completá tu email"}</p>
                  <input {...register("email", {required:true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} type="email" placeholder="Escribí tu dirección email" />
                </Row>
                <Row>
                  <p className="error-message">{errors.subject?.type === 'required' && "Por favor completá el campo asunto"}</p>
                  <input {...register("subject", {required:true})} type="text" placeholder="Escribí el asunto de tu consulta" />
                </Row>
              </Col>
              <Col lg={8} className='text-center textA-div'>
                <div className="">
                  <p className="error-message textA-div">{errors.content?.type === 'required' && "Por favor necesitamos esta información para saber sobre tu consulta"}</p>
                  <textarea {...register("content", {required:true})} type="text" placeholder="Escribe un mensaje aquí" className="textArea"/>  
                </div>
              </Col>
            </Row>           
            <Row>
              <Col lg={12} className='text-center mt-2'>
                <button className="btn-form" type="submit" onClick={()=>handleError()}id='btnForm'>
                    <span className='me-2'>
                    <svg width="16" height="15" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                      <path d="M2.51 3.48728L10.02 7L2.5 5.9091L2.51 3.48728ZM10.01 13L2.5 16.5127V14.0909L10.01 13ZM0.51 0.181824L0.5 7.81819L15.5 10L0.5 12.1818L0.51 19.8182L21.5 10L0.51 0.181824Z" fill="white" />
                    </svg>
                    </span>
                    <span >
                      Enviar Consulta
                    </span>
                </button>
              </Col>
            </Row>
          </form>
        </section>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContact;
