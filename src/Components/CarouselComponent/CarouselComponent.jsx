import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import {dataCarousel} from './infoCarousel';
import ItemCarousel from './ItemCarousel';
import './CarouselComponent.css';

const CarouselComponent = () => {
   
  return (
    <section className='carousel-container'id='home'>  {/*contenedor carousel */}
      <Container>
        <Carousel>
          {
            dataCarousel.map(item=>(   //datos del carousel de archivo infoCarousel.js
              <Carousel.Item key={item.id}>
                <ItemCarousel
                  image={item.image}
                  alt={item.alt}
                  title={item.title}
                  description={item.description}
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Container>
    </section>
  )
}

export default CarouselComponent