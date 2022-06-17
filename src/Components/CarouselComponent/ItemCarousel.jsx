import React from 'react';
import {Row,Col} from 'react-bootstrap';

const ItemCarousel = (props) => {  
  return (
    <Row>
        <Col lg={6}>   {/*columna imagen carousel */}
          <img src={props.image} alt={props.alt} className='carousel-image'/>
        </Col>
        <Col lg={6} className='m-auto'>   {/*columna texto carousel */}
          <h1 className='carousel-title'>{props.title}</h1> 
          <p className='carousel-description'>{props.description}</p>
        </Col>
    </Row>
  )
}

export default ItemCarousel