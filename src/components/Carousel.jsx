import Carousel from 'react-bootstrap/Carousel';
import "../css/carousel.css";

export default function CarouselFade() {
  return (
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img src='https://s1.1zoom.me/b4253/638/Houses_Mansion_Design_Garage_Shrubs_532419_1920x1080.jpg' alt='primera-foto' />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img src='https://decoracion2.com/imagenes/2020/06/casas-confinamiento-1200x675.jpg' alt='segunda-foto' />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img src='https://findercasa.com/wp-content/uploads/2019/07/Las-casas-a-la-venta-ma%CC%81s-caras-en-Espan%CC%83a-1200x675.jpg' alt='tercera-foto' />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}