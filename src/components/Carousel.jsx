import Carousel from 'react-bootstrap/Carousel';
import "../css/carousel.css";

export default function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <img src='/images/carrousel/primera.png' alt='primera-foto' />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src='/images/carrousel/segunda.jpg' alt='segunda-foto' />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src='/images/carrousel/tercera.jpg' alt='tercera-foto' />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src='/images/carrousel/cuarta.jpg' alt='cuarta-foto' />
      </Carousel.Item>
    </Carousel>
  );
}